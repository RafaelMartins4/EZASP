// @ts-ignore
const { FACT, CHOICE, DEFINITION, CONSTRAINT, SHOW_STATEMEMENT, INVALID_RULE, CONSTANT, COMMENT, getRuleType } = require('../parser/getRuleType');

// @ts-ignore
const { formatText } = require('../parser/formatText');
const { getPredicates } = require('../parser/getPredicates');

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

function arrayContainsObject(array, object) {
	for (const element of array) {
		if (JSON.stringify(element) == JSON.stringify(object)) {
			return true;
		}	
	}

	return false;
}

function arrayOfPredicatesContaintsPredicateInLine(array, line) {
	for (const element of array) {
		if (element.lineStart == line) {
			return true;
		}
	}

	return false;
}

function getPredicatesRanges(predicate, line, start) {
	const results = [];

	let i = 0;
	while (i != -1) {
		const indexStart = line.indexOf(predicate.name, i);
		if (indexStart == -1)
			i = -1;
		else if (indexStart == 0 || line[indexStart - 1].match(/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/? ]$/)) {
			results.push({ lineStart: start, lineEnd: start, indexStart: indexStart, indexEnd: indexStart + predicate.name.length })
			i = indexStart + predicate.name.length;
		}
		else
			i = indexStart + predicate.name.length;
	}

	return results;
}

/**
 * @param {string} textRaw
 */
function loadErrors(textRaw, extraTextRaw, disableFeatures) {

	if (textRaw == '' || textRaw == '\r\n' || textRaw == '\n')
		return [[], []];

	const OS = detectOS();

	let SPLIT_CODE;

	if (OS == WINDOWS)
		SPLIT_CODE = '\r\n';
	else
		SPLIT_CODE = '\n';
	
	let orderErrors;
	let predicateErrors;
	let warnings;
	let hover;

	if(disableFeatures){
		orderErrors = disableFeatures.orderErrors;
		predicateErrors = disableFeatures.predicateErrors;
		warnings = disableFeatures.commentWarnings;
		hover = disableFeatures.hoverPredicates;
	}

	//Gets the document and splits it into an array of lines
	const text = textRaw.split(SPLIT_CODE);

	const result1 = formatText(text);
	const formattedText = result1.formattedText;
	const lines = result1.lines;

	const result2 = getPredicates(formattedText);
	const predicates = result2.predicates;
	const nonReductantRules = result2.nonReductantRules;

	const extraText = extraTextRaw.split(SPLIT_CODE);
	const extraResult1 = formatText(extraText);
	const extraFormattedText = extraResult1.formattedText;

	const extraResult2 = getPredicates(extraFormattedText);
	const extraPredicates = extraResult2.predicates;
	const extraNonReductantRules = extraResult2.nonReductantRules;

	let errorRanges = [];
	let errorMessages = [];

	//Shows error if rules are invalid
	for (let i = 0; i < nonReductantRules.length; i++) {
		if (nonReductantRules[i][0] == INVALID_RULE) {
			const range = lines[nonReductantRules[i][1]];
			errorRanges.push(range);
			errorMessages.push("Invalid Rule.")
		}
	}

	for (let i = 0; i < nonReductantRules.length; i++) {
		if (nonReductantRules[i][0] == INVALID_RULE) {
			nonReductantRules.splice(i, 1);
		}
	}

	//Shows error if fact is in the wrong place
	let lastLineisConstant = true;
	for (let i = 0; i < nonReductantRules.length; i++) {
		if (lastLineisConstant && nonReductantRules[i][0] != CONSTANT) {
			lastLineisConstant = false;
		}
		if (nonReductantRules[i][0] == CONSTANT && !lastLineisConstant) {
			const range = lines[nonReductantRules[i][1]];
			errorRanges.push(range);
			errorMessages.push("Error, all constants must be at the beginning.")
		}
	}

	//Shows error if fact is in the wrong place
	let lastLineisFact = true;
	for (let i = 0; i < nonReductantRules.length; i++) {
		if (nonReductantRules[i][0] == CONSTANT) { }
		else if (lastLineisFact && nonReductantRules[i][0] != FACT) {
			lastLineisFact = false;
		}
		if (nonReductantRules[i][0] == FACT && !lastLineisFact) {
			const range = lines[nonReductantRules[i][1]];
			errorRanges.push(range);

			let isFact = true;
			let isConstant = false;
			for (let j = i - 1; j >= 0 && isFact; j--) {
				if (nonReductantRules[j][0] != FACT)
					isFact = false;
				if (nonReductantRules[j][0] == CONSTANT)
					isConstant = true;
			}
			if (isConstant)
				errorMessages.push("Error, this block of facts is in between a block of other rules.")
			else
				errorMessages.push("Error, all facts must be at the beginning, or between constants and choices.")
		}
	}

	//Shows error if choice is in the wrong place
	let lastLineisChoice = true;
	for (let i = 0; i < nonReductantRules.length; i++) {
		if (nonReductantRules[i][0] == CONSTANT) { }
		else if (nonReductantRules[i][0] == FACT) { }
		else if (lastLineisChoice && nonReductantRules[i][0] != CHOICE) {
			lastLineisChoice = false;
		}
		if (nonReductantRules[i][0] == CHOICE && !lastLineisChoice) {
			const range = lines[nonReductantRules[i][1]];
			errorRanges.push(range);

			let isChoice = true;
			let isFact = false;
			for (let j = i - 1; j >= 0 && isChoice; j--) {
				if (nonReductantRules[j][0] != CHOICE)
					isChoice = false;
				if (nonReductantRules[j][0] == FACT)
					isFact = true;
			}
			if (isFact)
				errorMessages.push("Error, this block of choices is in between a block of other rules.")
			else
				errorMessages.push("Error, all choices must be at the beginning, or between facts and definitions.")
		}
	}

	//Shows error if definition is in the wrong place
	let lastLineisDefinition = true;
	for (let i = 0; i < nonReductantRules.length; i++) {
		if (nonReductantRules[i][0] == CONSTANT) { }
		else if (nonReductantRules[i][0] == FACT) { }
		else if (nonReductantRules[i][0] == CHOICE) { }
		else if (lastLineisDefinition && nonReductantRules[i][0] != DEFINITION) {
			lastLineisDefinition = false;
		}
		if (nonReductantRules[i][0] == DEFINITION && !lastLineisDefinition) {
			const range = lines[nonReductantRules[i][1]];
			errorRanges.push(range);

			let isDefinition = true;
			let isChoice = false;
			for (let j = i - 1; j >= 0 && isDefinition; j--) {
				if (nonReductantRules[j][0] != DEFINITION)
					isDefinition = false;
				if (nonReductantRules[j][0] == CHOICE)
					isChoice = true;
			}
			if (isChoice)
				errorMessages.push("Error, this block of definitions is in between a block of other rules.")
			else
				errorMessages.push("Error, all definitions must be between choices and constraints.")
		}
	}

	//Shows error if constraint is in the wrong place
	let lastLineisConstraint = true;
	for (let i = 0; i < nonReductantRules.length; i++) {
		if (nonReductantRules[i][0] == CONSTANT) { }
		else if (nonReductantRules[i][0] == FACT) { }
		else if (nonReductantRules[i][0] == CHOICE) { }
		else if (nonReductantRules[i][0] == DEFINITION) { }
		else if (lastLineisConstraint && nonReductantRules[i][0] != CONSTRAINT) {
			lastLineisConstraint = false;
		}
		if (nonReductantRules[i][0] == CONSTRAINT && !lastLineisConstraint) {
			const range = lines[nonReductantRules[i][1]];
			errorRanges.push(range);

			let isConstraint = true;
			let isDefinition = false;
			for (let j = i - 1; j >= 0 && isConstraint; j--) {
				if (nonReductantRules[j][0] != CONSTRAINT)
					isConstraint = false;
				if (nonReductantRules[j][0] == DEFINITION)
					isDefinition = true;
			}
			if (isDefinition)
				errorMessages.push("Error, this block of constraints is in between a block of other rules.")
			else
				errorMessages.push("Error, all constraints must be between definitions and show statements.")
		}
	}

	//Shows error if view is in the wrong place
	let lastLineisShowStatement = true;
	for (let i = 0; i < nonReductantRules.length; i++) {
		if (nonReductantRules[i][0] == CONSTANT) { }
		else if (nonReductantRules[i][0] == FACT) { }
		else if (nonReductantRules[i][0] == CHOICE) { }
		else if (nonReductantRules[i][0] == DEFINITION) { }
		else if (nonReductantRules[i][0] == CONSTRAINT) { }
		else if (lastLineisShowStatement && nonReductantRules[i][0] != SHOW_STATEMEMENT) {
			lastLineisShowStatement = false;
		}
		if (nonReductantRules[i][0] == SHOW_STATEMEMENT && !lastLineisShowStatement) {
			const range = lines[nonReductantRules[i][1]];
			errorRanges.push(range);

			let isShow = true;
			let isConstraint = false;
			for (let j = i - 1; j >= 0 && isShow; j--) {
				if (nonReductantRules[j][0] != SHOW_STATEMEMENT)
					isShow = false;
				if (nonReductantRules[j][0] == CONSTRAINT)
					isConstraint = true;
			}
			if (isConstraint)
				errorMessages.push("Error, this block of show statements is in between a block of other rules.")
			else
				errorMessages.push("Error, all show statements must be after constraints.")
		}
	}

	const definedPredicates = [];

	const definitionMessages = new Map();

	for (let i = 0; i < extraNonReductantRules.length; i++) {
		if (extraNonReductantRules[i][0] != INVALID_RULE) {
			for (const predicate of extraPredicates[i].head) {
				const tmp = extraFormattedText[extraNonReductantRules[i][1]].split(':-')[0];
				if (extraNonReductantRules[i][0] != SHOW_STATEMEMENT) {
					if (!tmp.includes(':'))
						definedPredicates.push(predicate)
					else if (!tmp.split(':')[1].includes(predicate.name))
						definedPredicates.push(predicate)
				}
			}
		}
	}

	const undefinedPredicates = new Map();

	let warningRanges = [];

	for (let i = 0; i < nonReductantRules.length; i++) {
		let hasDefinedMessage = false;
		if ((nonReductantRules[i][0] == FACT || nonReductantRules[i][0] == CHOICE) && !definitionMessages.has(JSON.stringify(predicates[i].head[0]))){
			if(nonReductantRules[i][1] != 0 && getRuleType(formattedText[nonReductantRules[i][1]-1]) == COMMENT)
				definitionMessages.set(JSON.stringify(predicates[i].head[0]), formattedText[nonReductantRules[i][1]-1].replace('%','').replace('%*','').replace('*%','')+" (line "+(lines[nonReductantRules[i][1]].lineStart+1)+").")
			else {
				definitionMessages.set(JSON.stringify(predicates[i].head[0]), "No comment where this predicate is defined (line "+(lines[nonReductantRules[i][1]].lineStart+1)+")." );
				warningRanges.push(lines[nonReductantRules[i][1]])
			}
			hasDefinedMessage = true;
		}
		else if (nonReductantRules[i][0] == FACT || nonReductantRules[i][0] == CHOICE){
			if(nonReductantRules[i][1] != 0 && getRuleType(formattedText[nonReductantRules[i][1]-1]) == COMMENT){
				const message = definitionMessages.get(JSON.stringify(predicates[i].head[0]));
				definitionMessages.set(JSON.stringify(predicates[i].head[0]), message + " | " + formattedText[nonReductantRules[i][1]-1].replace('%','').replace('%*','').replace('*%','')+" (line "+(lines[nonReductantRules[i][1]].lineStart+1)+").")
			}			
			else {
				const message = definitionMessages.get(JSON.stringify(predicates[i].head[0]));
				definitionMessages.set(JSON.stringify(predicates[i].head[0]), message + " | " + "No comment where this predicate is defined (line "+(lines[nonReductantRules[i][1]].lineStart+1)+")." )
				warningRanges.push(lines[nonReductantRules[i][1]])
			}
			hasDefinedMessage = true;
		}
		if (nonReductantRules[i][0] != INVALID_RULE) {
			for (const predicate of predicates[i].head) {
				const tmp = formattedText[nonReductantRules[i][1]].split(':-')[0];
				if (nonReductantRules[i][0] != SHOW_STATEMEMENT) {
					if (!tmp.includes(':')) {
						definedPredicates.push(predicate)
						if (!definitionMessages.has(JSON.stringify(predicates[i].head[0])))
							if(nonReductantRules[i][1] != 0 && getRuleType(formattedText[nonReductantRules[i][1]-1]) == COMMENT)
								definitionMessages.set(JSON.stringify(predicates[i].head[0]), formattedText[nonReductantRules[i][1]-1].replace('%','').replace('%*','').replace('*%','')+" (line "+(lines[nonReductantRules[i][1]].lineStart+1)+").")
							else{
								definitionMessages.set(JSON.stringify(predicates[i].head[0]), "No comment where this predicate is defined (line "+(lines[nonReductantRules[i][1]].lineStart+1)+")." )
								warningRanges.push(lines[nonReductantRules[i][1]])
							}
						else if (!hasDefinedMessage){
							if(nonReductantRules[i][1] != 0 && getRuleType(formattedText[nonReductantRules[i][1]-1]) == COMMENT){
								const message = definitionMessages.get(JSON.stringify(predicates[i].head[0]));
								definitionMessages.set(JSON.stringify(predicates[i].head[0]), message + " | " + formattedText[nonReductantRules[i][1]-1].replace('%','').replace('%*','').replace('*%','')+" (line "+(lines[nonReductantRules[i][1]].lineStart+1)+").")
							}	
							else {
								const message = definitionMessages.get(JSON.stringify(predicates[i].head[0]));
								definitionMessages.set(JSON.stringify(predicates[i].head[0]), message + " | " + "No comment where this predicate is defined (line "+(lines[nonReductantRules[i][1]].lineStart+1)+")." )
								warningRanges.push(lines[nonReductantRules[i][1]])
							}
						}
					}
					else if (!tmp.split(':')[1].includes(predicate.name)) {
						definedPredicates.push(predicate)
						if (!definitionMessages.has(JSON.stringify(predicates[i].head[0])))
							if(nonReductantRules[i][1] != 0 && getRuleType(formattedText[nonReductantRules[i][1]-1]) == COMMENT)
								definitionMessages.set(JSON.stringify(predicates[i].head[0]), formattedText[nonReductantRules[i][1]-1].replace('%','').replace('%*','').replace('*%',''))
							else {
								definitionMessages.set(JSON.stringify(predicates[i].head[0]), "No comment where this predicate is defined (line "+(lines[nonReductantRules[i][1]].lineStart+1)+")." )	
								warningRanges.push(lines[nonReductantRules[i][1]])
							}
						else if(!hasDefinedMessage){
							if(nonReductantRules[i][1] != 0 && getRuleType(formattedText[nonReductantRules[i][1]-1]) == COMMENT){
								const message = definitionMessages.get(JSON.stringify(predicates[i].head[0]));
								definitionMessages.set(JSON.stringify(predicates[i].head[0]), message + " | " + formattedText[nonReductantRules[i][1]-1].replace('%','').replace('%*','').replace('*%','')+" (line "+(lines[nonReductantRules[i][1]].lineStart+1)+").")
							}	
							else {
								const message = definitionMessages.get(JSON.stringify(predicates[i].head[0]));
								definitionMessages.set(JSON.stringify(predicates[i].head[0]), message + " | " + "No comment where this predicate is defined (line "+(lines[nonReductantRules[i][1]].lineStart+1)+")." )
								warningRanges.push(lines[nonReductantRules[i][1]])
							}
						}
					}
					else if (!arrayContainsObject(definedPredicates, predicate)) {
						if (undefinedPredicates.has(lines[nonReductantRules[i][1]])) {
							if (!undefinedPredicates.get(lines[nonReductantRules[i][1]]).includes(predicate))
								undefinedPredicates.get(lines[nonReductantRules[i][1]]).push(predicate);
						}
						else
							undefinedPredicates.set(lines[nonReductantRules[i][1]], [predicate]);
					}
				}
				else {
					if (!arrayContainsObject(definedPredicates, predicate))
						if (undefinedPredicates.has(lines[nonReductantRules[i][1]]))
							undefinedPredicates.get(lines[nonReductantRules[i][1]]).push(predicate);
						else
							undefinedPredicates.set(lines[nonReductantRules[i][1]], [predicate]);
				}
			}

			for (const predicate of predicates[i].tail) {
				if (!arrayContainsObject(definedPredicates, predicate)) {
					if (undefinedPredicates.get(lines[nonReductantRules[i][1]])) {
						if (!arrayContainsObject(undefinedPredicates.get(lines[nonReductantRules[i][1]]), predicate))
							undefinedPredicates.get(lines[nonReductantRules[i][1]]).push(predicate);
					}
					else
						undefinedPredicates.set(lines[nonReductantRules[i][1]], [predicate]);
				}
			}
		}
	}

	let predicateErrorRanges = [];
	let predicateErrorMessages = [];

	for (const key of undefinedPredicates.keys()) {
		predicateErrorRanges.push(key);

		const predicates = undefinedPredicates.get(key);

		if (predicates.length == 1)
			predicateErrorMessages.push("Error, predicate " + predicates[0].name + "/" + predicates[0].arguments + " is not defined yet.")

		else {
			let names = "";
			for (let j = 0; j < predicates.length; j++)
				if (j == 0)
					names = names + " " + predicates[j].name + "/" + predicates[j].arguments;

				else if (j == predicates.length - 1)
					names = names + " and " + predicates[j].name + "/" + predicates[j].arguments;
				else
					names = names + ", " + predicates[j].name + "/" + predicates[j].arguments;

				predicateErrorMessages.push("Error, predicates" + names + " are not defined yet.")
		}
	}

	const seen = new Set();
	for (let i = 0; i < errorRanges.length; i++) {
		if (!seen.has(errorRanges[i]))
			seen.add(errorRanges[i]);
		else {
			const index = errorRanges.indexOf(errorRanges[i]);
			errorMessages[index] = errorMessages[index] + " " + errorMessages[i];
			errorRanges.splice(i, 1);
			errorMessages.splice(i, 1);
			i--;
		}
	}

	const linesWithPredicates = new Map();

	for (let i = 0; i < nonReductantRules.length; i++) {
		for (const predicate of predicates[i].head) {
			if (definitionMessages.has(JSON.stringify(predicate))) {
				const ranges = getPredicatesRanges(predicate, formattedText[nonReductantRules[i][1]], lines[nonReductantRules[i][1]].lineStart);
				for(const range of ranges)
					if (!linesWithPredicates.has(JSON.stringify(range)))
						linesWithPredicates.set(JSON.stringify(range), JSON.stringify(predicate))
			}
		}

		for (const predicate of predicates[i].tail) {
			if (definitionMessages.has(JSON.stringify(predicate))) {
				const ranges = getPredicatesRanges(predicate, formattedText[nonReductantRules[i][1]], lines[nonReductantRules[i][1]].lineStart)
				for(const range of ranges)
					if (!linesWithPredicates.has(JSON.stringify(predicate)))
						linesWithPredicates.set(JSON.stringify(range), JSON.stringify(predicate))
			}
		}
	}

	let predicateRanges = [];
	let predicateMessages = [];

	const keys = [...linesWithPredicates.keys()];

	

	for(const key of keys){
		if(!arrayOfPredicatesContaintsPredicateInLine(errorRanges,JSON.parse(key).lineStart) && !arrayOfPredicatesContaintsPredicateInLine(warningRanges,JSON.parse(key).lineStart)){
			predicateRanges.push(JSON.parse(key));
			predicateMessages.push(definitionMessages.get(linesWithPredicates.get(key)));
		}
	}

	let warningMessages = [];

	for(const range of warningRanges){
		warningMessages.push("Warning. This line is defining a predicate without proper commenting (line "+range.lineStart+").");
	}

	if(disableFeatures){
		if(JSON.parse(orderErrors)){
			errorRanges = [];
			errorMessages = [];
		}
		if(JSON.parse(predicateErrors)){
			predicateErrorRanges = [];
			predicateErrorMessages = [];
		}
		if(JSON.parse(warnings)){
			warningRanges = [];
			warningMessages = [];
		}
		if(JSON.parse(hover)){
			predicateRanges = [];
			predicateMessages = [];
		}
			
	}

	return [errorRanges.concat(predicateErrorRanges), errorMessages.concat(predicateErrorMessages), predicateRanges, predicateMessages, warningRanges, warningMessages];
}

module.exports = { loadErrors }