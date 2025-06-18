const { loadParser } = require('../parser/parser-wrapper.cjs');

const MAC_OS = 1;
const WINDOWS = 2;
const LINUX = 3;

function detectOS() {
	switch (process.platform) {
		case "darwin": return MAC_OS;
		case "win32": return WINDOWS;
		default: return LINUX;
	}
}

/**
 * @param {string} textRaw
 */
async function loadErrors(textRaw, fileName, extraTextRaw, disableFeatures) {

	if (textRaw == '' || textRaw == '\r\n' || textRaw == '\n')
		return [[], []];

	const extraTextExists = JSON.stringify(extraTextRaw) != JSON.stringify([[], []]);

	let syntax;
	let orderErrors;
	let predicateErrors;
	let commentWarnings;
	let hover;

	if (disableFeatures) {
		syntax = disableFeatures.syntaxChecking;
		orderErrors = disableFeatures.orderErrors;
		predicateErrors = disableFeatures.predicateErrors;
		commentWarnings = disableFeatures.commentWarnings;
		hover = disableFeatures.hoverPredicates;
	}
	else{
		commentWarnings = "true";
	}

	/*
	* ---------- GET DATA FROM PARSER CLASSES ----------
	*/
	const parser = await loadParser();
	const parserResult = parser.parse(textRaw);
	const lineRanges = parserResult.lineRanges;

	const extraParserResults = [];
	const extraDefinedPredicates = [];
	const extraConstructTypes = [];

	if (extraTextRaw != []) {
		for (const text of extraTextRaw[1]) {
			let extraResult = parser.parse(text); 
			extraParserResults.push(extraResult);
			extraDefinedPredicates.push(extraResult.definedPredicates);
			extraConstructTypes.push(extraResult.constructTypes);
		}
	}

	// Syntax Errors

	let syntaxErrorRanges = [];
	let syntaxErrorMessages = [];

	if (syntax != "true") {
		const syntaxErrors = parserResult.syntaxErrors;
		const tokenErrors = parserResult.tokenErrors;

		syntaxErrors.forEach(error => {
			const range = {
				lineStart: error.lineStart - 1,
				lineEnd: error.lineEnd - 1,
				indexStart: error.indexStart,
				indexEnd: error.indexEnd
			};
			syntaxErrorRanges.push(range);
			syntaxErrorMessages.push(error.message);
		});

		tokenErrors.forEach(error => {
			const range = {
				lineStart: error.lineStart - 1,
				lineEnd: error.lineEnd - 1,
				indexStart: error.indexStart,
				indexEnd: error.indexEnd
			};
			syntaxErrorRanges.push(range);
			syntaxErrorMessages.push(error.message);
		});
	}

	// Ordering Errors

	let orderingWarningRanges = [];
	let orderingWarningMessages = [];

	const constructTypes = parserResult.constructTypes;

	if (orderErrors != "true") {

		// Check if the program has a generator (choice rule)
		let hasGenerator = false;

		hasGenerator = constructTypes.some(construct => construct.type === 'ChoiceRule');

		if(!hasGenerator && extraTextExists) {
			for(const extraConstructTypeArray of extraConstructTypes) {
				hasGenerator = extraConstructTypeArray.some(construct => construct.type === 'ChoiceRule');
				if(hasGenerator)
					break;
			}
		}

		const correctOrder = [
			'Constant',
			'Fact',
			'ChoiceRule',
			'DefiniteRule',
			'Constraint',
			'Optimization',
			'Show'
		];

		let lastSeenIndex = -1;

		for (const construct of constructTypes) {
			const currentIndex = correctOrder.indexOf(construct.type);
	
			if (currentIndex === -1) {
				// If the type is not in the correctOrder array, skip it
				continue;
			}

			let generatorWarningMessage = "Warning: The program does not have a generator (Choice rule). Consider adding one after Facts and before Definite Rules";;
	
			if (currentIndex < lastSeenIndex) {
				orderingWarningRanges.push({
					lineStart: construct.lineStart - 1,
					lineEnd: construct.lineEnd - 1,
					indexStart: construct.indexStart,
					indexEnd: construct.indexEnd
				});

				let warningMessage;
				switch (construct.type) {
					case 'Constant':
						warningMessage = 'Warning: Constants must be at the beginning of the program.';
						break;
					case 'Fact':
						warningMessage = 'Warning: Facts must be at the beginning, or between constants and choice rules.';
						break;
					case 'ChoiceRule':
						warningMessage = 'Warning: Choices must be at the beginning, or between facts and definitions.';
						break;
					case 'DefiniteRule':
						warningMessage = 'Warning: Definitions must be between choices and constraints.';
						break;
					case 'Constraint':
						warningMessage = 'Warning: Constraints must be between definitions and either optimization or show statements.';
						break;
					case 'Optimization':
						warningMessage = 'Warning: Optimization statements must appear after constraints and before show statements.';
						break;
					case 'Show':
						warningMessage = 'Warning: Show statements must appear at the end of the program.';
						break;
					default:
						warningMessage = `Warning: "${construct.type}" is out of order.`;
				}

				if(!hasGenerator && currentIndex > 2) {
					orderingWarningMessages.push(warningMessage + ' | ' + generatorWarningMessage);
					hasGenerator = true; // Set true to avoid pushing the message again
				} else {
					orderingWarningMessages.push(warningMessage);
				}
			} else {
				if(!hasGenerator && currentIndex > 2) {
					orderingWarningRanges.push({
						lineStart: construct.lineStart - 1,
						lineEnd: construct.lineEnd - 1,
						indexStart: construct.indexStart,
						indexEnd: construct.indexEnd
					});
					orderingWarningMessages.push(generatorWarningMessage);
					hasGenerator = true; // Set true to avoid pushing the message again
				}
				lastSeenIndex = currentIndex;
			}
		}
	}

	// Stratification Errors

	const definedPredicates = parserResult.definedPredicates;
	const usedPredicates = parserResult.usedPredicates;

	/* We separate stratification errors in two types:
		1. Predicates that are used but never defined - Error, this is underlined in red
		2. Predicates that are used before they are defined - Warning, this is underlined in yellow
	*/
	let stratificationErrorRanges = [];
	let stratificationErrorMessages = [];

	let stratificationWarningRanges = [];
	let stratificationWarningMessages = [];

	for (const [usedPredicateKey, usedPositions] of usedPredicates.entries()) {
		let isDefinedInExtraFile = false;

		// Checks if another file defines the predicate
		if(extraTextExists) {
			for(const extraDefinedPredicatesMap of extraDefinedPredicates) {
				if(extraDefinedPredicatesMap.has(usedPredicateKey)) {
					// If the predicate is defined in another file, we don't need to check the rest of the extra files
					isDefinedInExtraFile = true;
					break;
				}
			}
		}
		// If the predicate is defined in another file, we don't need to check the current file
		if(isDefinedInExtraFile)
			continue;
		
		const definedLocations = definedPredicates.get(usedPredicateKey);
	
		if (!definedLocations) {
			usedPositions.forEach(position => {
				if (predicateErrors != "true") {
					const range = {
						lineStart: position.lineStart - 1,
						lineEnd: position.lineEnd - 1,
						indexStart: position.indexStart,
						indexEnd: position.indexEnd
					}

					stratificationErrorRanges.push(range);
					stratificationErrorMessages.push(`Error: Predicate ${usedPredicateKey} is never defined.`);
				}
			});
		} else {
			// Check if the predicate is defined before each usage
			usedPositions.forEach(usedPosition => {
				let isDefinedBefore = definedLocations.some(definedLocation => {
					return (
						definedLocation.lineStart < usedPosition.lineStart ||
						(definedLocation.lineStart === usedPosition.lineStart &&
							definedLocation.indexStart <= usedPosition.indexStart)
					);
				});

				if (!isDefinedBefore && predicateErrors != "true") {
					const range = {
						lineStart: usedPosition.lineStart - 1,
						lineEnd: usedPosition.lineEnd - 1,
						indexStart: usedPosition.indexStart,
						indexEnd: usedPosition.indexEnd
					};
					stratificationWarningRanges.push(range);
					stratificationWarningMessages.push(`Warning: Predicate ${usedPredicateKey} is used before it is defined.`);
				}	
			});
		}		
	}


	let symbol;

	if (detectOS() == WINDOWS) {
		symbol = "\\";
	}
	else
		symbol = "/";

	let currentFileName;

	if (extraTextExists) {
		const split = fileName.split(symbol)

		currentFileName = split[split.length - 1];
	}

	// Preprocess the ASP comments from the text and save them in a map with their last line as the key
	function preprocessComments(text) {
	    const comments = new Map();
		const normalizedText = text.replace(/\r\n/g, '\n'); // Ensure that it works across all OS
		const lines = normalizedText.split('\n'); 

		let insideBlockComment = false;
		let currentBlockComment = ''; 


		lines.forEach((line, index) => {
			let i = 0;
			while (i < line.length) {
				// If we're inside a block comment, accumulate text until we find '*%'
				if (insideBlockComment) {
					const blockEndIndex = line.indexOf('*%', i);
					// Block comment ends on this line
					if (blockEndIndex !== -1) {
						currentBlockComment += line.slice(i, blockEndIndex).trim();
						insideBlockComment = false;
						if (!comments.has(index + 1)) {
							comments.set(index + 1, []);
						}
						comments.get(index + 1).push(currentBlockComment);
						currentBlockComment = '';
						i = blockEndIndex + 2; // Move the index past '*%'
					} 
					// Block comment continues on this line
					else {
						currentBlockComment += line.slice(i).trim() + ' ';
						break; // Move to the next line
					}
				} 
				// Found the start of a comment
				else if (line[i] === '%') {
					// It's a block comment
					if (i + 1 < line.length && line[i + 1] === '*') {
						insideBlockComment = true;
						currentBlockComment = '';
						i += 2; // Move past '%*'
					} 
					// It's a line comment
					else {
						const commentText = line.slice(i + 1).trim();
						if (!comments.has(index + 1)) {
							comments.set(index + 1, []);
						}
						comments.get(index + 1).push(commentText);
						break; // No need to process the rest of the line
					}
				} else {
					i++;
				}
			}
		});

		return comments;
	}

	// Calculate the definition messages for the predicates
	const definitionMessages = new Map();
	const noCommentLines = new Map();
	const comments = preprocessComments(textRaw);

	
	for(const [predicateKey, locations] of definedPredicates.entries()) {
		locations.forEach(location => {
			const commentLine = location.lineStart - 1;
			// If the previous line has a comment, add it to the definitionMessages
			if(comments.has(commentLine)) {
				const commentTexts = comments.get(commentLine);
				commentTexts.forEach(commentText => {
					if (!definitionMessages.has(predicateKey)) {
						definitionMessages.set(predicateKey, []);
					}
					if(!extraTextExists)
						definitionMessages.get(predicateKey).push(`${commentText} (line ${location.lineStart}).`);
					else
						definitionMessages.get(predicateKey).push(`${commentText} (${currentFileName} line ${location.lineStart}).`);
				});
			// If not, add it to the noCommentLines, saving the predicateKey and the location
			// This will later be processed to add a 'No comment' message with all the lines to the definitionMessages map 
			} else {
				if (!noCommentLines.has(predicateKey)) {
					noCommentLines.set(predicateKey, []);
				}
				console.log('pushing location to noCommentLines: ', location);
				noCommentLines.get(predicateKey).push(location);
			}
		});
	}

	// Process the noCommentLines to add a 'No comment' message to the definitionMessages map
	for (const [predicateKey, lines] of noCommentLines.entries()) {
		if (!definitionMessages.has(predicateKey)) {
			definitionMessages.set(predicateKey, []);
		}
		const uniqueLineStarts = [...new Set(lines.map(line => line.lineStart))]; // Remove duplicates
		if(!extraTextExists) {
			if(uniqueLineStarts.length > 1)
				definitionMessages.get(predicateKey).push(`No comment found where predicate ${predicateKey} is defined (lines ${uniqueLineStarts.join(',')}).`);
			else
				definitionMessages.get(predicateKey).push(`No comment found where predicate ${predicateKey} is defined (line ${uniqueLineStarts.join(',')}).`);
		} else {
			if(uniqueLineStarts.length > 1)
				definitionMessages.get(predicateKey).push(`No comment found where predicate ${predicateKey} is defined (${currentFileName} lines ${uniqueLineStarts.join(',')}).`);
			else 
				definitionMessages.get(predicateKey).push(`No comment found where predicate ${predicateKey} is defined (${currentFileName} line ${uniqueLineStarts.join(',')}).`);
		}
	}

	// Process the extra files' predicates
	if(extraTextExists) {
		extraDefinedPredicates.forEach((extraDefinedPredicatesMap, index) => {
			const currentExtraFileName = extraTextRaw[0][index];
			const extraComments = preprocessComments(extraTextRaw[1][index]);
			const extraNoCommentLines = new Map();
			for(const [predicateKey, locations] of extraDefinedPredicatesMap.entries()) {
				locations.forEach(location => {
					const commentLine = location.lineStart - 1;
					// If the previous line has a comment, add it to the definitionMessages
					if(extraComments.has(commentLine)) {
						const commentTexts = extraComments.get(commentLine);
						commentTexts.forEach(commentText => {
							if (!definitionMessages.has(predicateKey)) {
								definitionMessages.set(predicateKey, []);
							}
							definitionMessages.get(predicateKey).push(`${commentText} (${currentExtraFileName} line ${location.lineStart}).`);
						});
					// If not, add it to the noCommentLines, saving the predicateKey and the line number
					// This will later be processed to add a 'No comment' message with all the lines to the definitionMessages map 
					} else {
						if (!extraNoCommentLines.has(predicateKey)) {
							extraNoCommentLines.set(predicateKey, []);
						}
						extraNoCommentLines.get(predicateKey).push(location.lineStart);
					}
				});
			}

			// Process the noCommentLines to add a 'No comment' message to the definitionMessages map

			for (const [predicateKey, lines] of extraNoCommentLines.entries()) {
				if (!definitionMessages.has(predicateKey)) {
					definitionMessages.set(predicateKey, []);
				}
				const uniqueLines = [...new Set(lines)]; // Remove duplicates
				if(uniqueLines.length > 1)
					definitionMessages.get(predicateKey).push(`No comment found where predicate ${predicateKey} is defined (${currentExtraFileName} lines ${uniqueLines.join(',')}).`);
				else 
					definitionMessages.get(predicateKey).push(`No comment found where predicate ${predicateKey} is defined (${currentExtraFileName} line ${uniqueLines.join(',')}).`);
			}
		});
	}

	// Add a warning message to lines that define a predicate and are not commented
	let noCommentWarningRanges = [];
	let noCommentWarningLines = [];

	for(const [noCommentKey, locations] of noCommentLines.entries()) {
		locations.forEach(location => {
			if(!noCommentWarningLines.includes(location.lineStart)) {
				noCommentWarningLines.push(location.lineStart);
			}
		});
	}

	noCommentWarningLines.forEach(line => {
		lineRanges.get(line).forEach(range => {
			noCommentWarningRanges.push({
				lineStart: range.lineStart - 1,
				lineEnd: range.lineEnd - 1,
				indexStart: range.indexStart,
				indexEnd: range.indexEnd
			});
		});
	});

	// Remove duplicates from the definitionMessages map (not sure if this is necessary)
	for (const key of [...definitionMessages.keys()]) {
		const checker = [];
		const array = definitionMessages.get(key);

		for (const message of array)
			if (!checker.includes(message))
				checker.push(message)

		definitionMessages.set(key, checker);
	}

	function doRangesOverlap(range1, range2) {
		if (range1.lineEnd < range2.lineStart) return false;
		if (range1.lineStart > range2.lineEnd) return false;

		if (range1.lineStart === range1.lineEnd && range2.lineStart === range2.lineEnd && range1.lineStart === range2.lineStart) {
			return range1.indexEnd > range2.indexStart && range1.indexStart < range2.indexEnd;
		}

		if (range1.lineEnd === range2.lineStart) {
			if (range1.lineEnd === range1.lineStart && range2.lineStart === range2.lineEnd) {
				return range1.indexEnd > range2.indexStart && range1.indexStart < range2.indexEnd;
			}
			return range1.indexEnd > range2.indexStart;
		}
		if (range2.lineEnd === range1.lineStart) {
			if (range2.lineEnd === range2.lineStart && range1.lineStart === range1.lineEnd) {
				return range2.indexEnd > range1.indexStart && range2.indexStart < range1.indexEnd;
			}
			return range2.indexEnd > range1.indexStart;
		}

		return true;
	}

	function containsErrorInLocation(location) {
		const normalizedLocation = {
			lineStart: location.lineStart - 1,
			lineEnd: location.lineEnd - 1,
			indexStart: location.indexStart,
			indexEnd: location.indexEnd
		};

		if(predicateErrors != "true") {
			stratificationErrorRanges.forEach(range => {
				if(doRangesOverlap(range, normalizedLocation)) {
					return true;
				}
			});
		}

		if(syntax != "true") {
			syntaxErrorRanges.forEach(range => {
				if(doRangesOverlap(range, normalizedLocation)) {
					return true;
				}
			});
		}

		return false;
	}

	function containsWarningInLocation(location) {
		const normalizedLocation = {
			lineStart: location.lineStart - 1,
			lineEnd: location.lineEnd - 1,
			indexStart: location.indexStart,
			indexEnd: location.indexEnd
		};

		if(commentWarnings != "true") {
			noCommentWarningRanges.forEach(range => {
				if(doRangesOverlap(range, normalizedLocation)) {
					return true;
				}
			});
		}

		if(orderErrors != "true") {
			orderingWarningRanges.forEach(range => {
				if(doRangesOverlap(range, normalizedLocation)) {
					return true;
				}
			});
		}

		if(predicateErrors != "true") {
			stratificationWarningRanges.forEach(range => {
				if(doRangesOverlap(range, normalizedLocation)) {
					return true;
				}
			});
		}

		return false;
	}

	let noCommentWarningMessages = [];

	const checker = [];

	for (const range of noCommentWarningRanges) {
		const tmp = JSON.stringify(range);
		if (!checker.includes(JSON.stringify(range)))
			checker.push(tmp)
	}

	let noCommentWarningRangesFinal = [];

	if (commentWarnings != "true") {
		for (const range of checker) {
			if(!containsErrorInLocation(JSON.parse(range))) {
				noCommentWarningRangesFinal.push(JSON.parse(range))
			}
		}

		for (const range of noCommentWarningRangesFinal) {
			noCommentWarningMessages.push(`Warning. This line is defining a predicate without proper commenting (line ${range.lineStart + 1}).`);
		}
	}

	let fullLineWarningRanges = orderingWarningRanges.concat(noCommentWarningRangesFinal);
	let fullLineWarningMessages = orderingWarningMessages.concat(noCommentWarningMessages);

	// Do a final check to ensure that ordering warnings only appear in lines that do not have any other errors/warnings
	// This is done to avoid creating lines with entagled errors and warnings. Given that ordering warnings underline the whole line, we give priority
	// to errors and warnings that are specific to the predicate (i.e. there can only be full line warnings/errors if there are no other errors/warnings in the line) 
	let finalFullLineWarningRanges = [];
	let finalFullLineWarningMessages = [];

	// TODO: for each range in fullLineWarningRanges, check if it overlaps with any error range, if it does, skip it
	// if it does not, add it to finalFullLineWarningRanges and finalFullLineWarningMessages



	let predicateHoverRanges = [];
	let predicateHoverMessages = [];

	if(hover != "true") {
		for (const [predicateKey, locations] of definedPredicates.entries()) {
			locations.forEach(location => {
				if(!containsErrorInLocation(location) && !containsWarningInLocation(location)) {
					if (!predicateHoverRanges.includes(location) && definitionMessages.has(predicateKey)) {
						predicateHoverRanges.push({
							lineStart: location.lineStart - 1,
							lineEnd: location.lineEnd - 1,
							indexStart: location.indexStart,
							indexEnd: location.indexEnd
						});
						const messages = definitionMessages.get(predicateKey);
						let finalMessage = "";
						for(let i = 0; i < messages.length - 1; i++) {
							finalMessage += messages[i] + " | ";
						}
						finalMessage += messages[messages.length - 1];
						predicateHoverMessages.push(finalMessage);
					}
				}
			});	
		}

		for( const [predicateKey, locations] of usedPredicates.entries()) {
			locations.forEach(location => {
				if(!containsErrorInLocation(location) && !containsWarningInLocation(location)) {
					if (!predicateHoverRanges.includes(location) && definitionMessages.has(predicateKey)) {
						predicateHoverRanges.push({
							lineStart: location.lineStart - 1,
							lineEnd: location.lineEnd - 1,
							indexStart: location.indexStart,
							indexEnd: location.indexEnd
						});
						const messages = definitionMessages.get(predicateKey);
						let finalMessage = "";
						for(let i = 0; i < messages.length - 1; i++) {
							finalMessage += messages[i] + " | ";
						}
						finalMessage += messages[messages.length - 1];
						predicateHoverMessages.push(finalMessage);
					}
				}
			});		
		}
	}

	return [syntaxErrorRanges.concat(stratificationErrorRanges), 
		orderingWarningRanges.concat(stratificationWarningRanges.concat(noCommentWarningRangesFinal)),
		syntaxErrorMessages.concat(stratificationErrorMessages), 
		orderingWarningMessages.concat(stratificationWarningMessages.concat(noCommentWarningMessages)),
		predicateHoverRanges, predicateHoverMessages
	 ];

	
}

module.exports = { loadErrors };