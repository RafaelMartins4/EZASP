// @ts-ignore
const { getRuleType, EMPTY, COMMENT, FACT, CHOICE, DEFINITION, CONSTRAINT, SHOW_STATEMEMENT, INVALID_RULE } = require('../parser/getRuleType');

// @ts-ignore
const { formatText } = require('../parser/formatText');

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
function loadUnderlineDummy(textRaw) {

	if (textRaw == '' || textRaw == '\r\n' || textRaw == '\n')
		return [[], []];

	const OS = detectOS();

	let SPLIT_CODE;

	if (OS == WINDOWS)
		SPLIT_CODE = '\r\n';
	else
		SPLIT_CODE = '\n';

	//Gets the document and splits it into an array of lines
	const text = textRaw.trim().split(SPLIT_CODE);

	const result = formatText(text);
	const formattedText = result.formattedText;
	const lines = result.lines;

	/**
	 * @param {number} index
	 */
	function getRange(index){
		const originalStart = text[lines[index][0]];
		const originalEnd = text[lines[index][1]];
		const rule = formattedText[index];

		let startIndex = -1;

		if(!originalStart.endsWith('.'))
			startIndex = originalStart.lastIndexOf('.');
		else
			startIndex = originalStart.slice(0,-1).lastIndexOf('.');
		
		let endIndex = startIndex;

		if(originalStart != originalEnd)
			for(let i = 0; i<originalEnd.length; i++){
				if(originalEnd[i] == rule[0])
					endIndex = i+rule.length;
			}

		return {firstline: lines[index][0], lastLine:lines[index][1], start: startIndex, end : endIndex}
	}


	/*
	Creates an array without comments and empty spaces, where in each position there is an array with 2 positons:
		position 0 -> the rule's type
		position 1 -> the rule's index in the array formattedText
	*/
	let nonReductantRules = [];

	for (let i = 0; i < formattedText.length; i++) {
		let ruleType = getRuleType(formattedText[i]);
		if (ruleType == COMMENT || ruleType == EMPTY) { }
		else
			nonReductantRules.push([ruleType, i]);
	}

	/*
		Underlines and provides error message to every rule in the ASP that violates the EZASP protocol
	*/
	let rangesToUnderline = [];
	let hoverMessages = [];

	//Shows error if rules are invalid
	for (let i = 0; i < nonReductantRules.length; i++) {
		if (nonReductantRules[i][0] == INVALID_RULE) {
			const range = getRange(nonReductantRules[i][1]);
			rangesToUnderline.push(range);
			hoverMessages.push("Invalid Rule.")
		}
	}

	//Shows error if fact is in the wrong place
	let lastLineisFact = true;
	for (let i = 0; i < nonReductantRules.length; i++) {
		if (lastLineisFact && nonReductantRules[i][0] != FACT) {
			lastLineisFact = false;
		}
		if (nonReductantRules[i][0] == FACT && !lastLineisFact) {
			const range = getRange(nonReductantRules[i][1]);
			rangesToUnderline.push(range);
			hoverMessages.push("Error, all facts must be before choices.")
		}
	}

	//Shows error if choice is in the wrong place
	let lastLineisChoice = true;
	for (let i = 0; i < nonReductantRules.length; i++) {
		if (nonReductantRules[i][0] == FACT) { }
		else if (lastLineisChoice && nonReductantRules[i][0] != CHOICE) {
			lastLineisChoice = false;
		}
		if (nonReductantRules[i][0] == CHOICE && !lastLineisChoice) {
			const range = getRange(nonReductantRules[i][1]);
			rangesToUnderline.push(range);
			hoverMessages.push("Error, all choices must be between facts and rules.")
		}
	}

	//Shows error if rule is in the wrong place
	let lastLineisRule = true;
	for (let i = 0; i < nonReductantRules.length; i++) {
		if (nonReductantRules[i][0] == FACT) { }
		else if (nonReductantRules[i][0] == CHOICE) { }
		else if (lastLineisRule && nonReductantRules[i][0] != DEFINITION) {
			lastLineisRule = false;
		}
		if (nonReductantRules[i][0] == DEFINITION && !lastLineisRule) {
			const range = getRange(nonReductantRules[i][1]);
			rangesToUnderline.push(range);
			hoverMessages.push("Error, all rules must be between choices and constraints.")
		}
	}

	//Shows error if constraint is in the wrong place
	let lastLineisConstraint = true;
	for (let i = 0; i < nonReductantRules.length; i++) {
		if (nonReductantRules[i][0] == FACT) { }
		else if (nonReductantRules[i][0] == CHOICE) { }
		else if (nonReductantRules[i][0] == DEFINITION) { }
		else if (lastLineisConstraint && nonReductantRules[i][0] != CONSTRAINT) {
			lastLineisConstraint = false;
		}
		if (nonReductantRules[i][0] == CONSTRAINT && !lastLineisConstraint) {
			const range = getRange(nonReductantRules[i][1]);
			rangesToUnderline.push(range);
			hoverMessages.push("Error, all constraints must be between rules and views.")
		}
	}

	//Shows error if view is in the wrong place
	let lastLineisView = true;
	for (let i = 0; i < nonReductantRules.length; i++) {
		if (nonReductantRules[i][0] == FACT) { }
		else if (nonReductantRules[i][0] == CHOICE) { }
		else if (nonReductantRules[i][0] == DEFINITION) { }
		else if (nonReductantRules[i][0] == CONSTRAINT) { }
		else if (lastLineisView && nonReductantRules[i][0] != SHOW_STATEMEMENT) {
			lastLineisView = false;
		}
		if (nonReductantRules[i][0] == SHOW_STATEMEMENT && !lastLineisView) {
			const range = getRange(nonReductantRules[i][1]);
			rangesToUnderline.push(range);
			hoverMessages.push("Error, all views must be after constraints.")
		}
	}

	return [rangesToUnderline, hoverMessages];
}

/**
 * @param activeEditor
 */
function loadUnderline(activeEditor) {

	//Gets the document and splits it into an array of lines
	const text = activeEditor.document.getText().split('\n');

	//Creates an array of rule types, the the index of the array being the line of the document 
	let ruleTypes = [];

	for (let i = 0; i < text.length; i++) {
		ruleTypes[i] = getRuleType(text[i]);
	}

	/*
	Creates an array without comments and empty spaces, where in each position there is an array with 2 positons:
		position 0 -> the rule's type
		position 1 -> the rule's line in the document
	*/
	let nonReductantRules = [];
	for (let i = 0; i < ruleTypes.length; i++) {
		if (ruleTypes[i] == COMMENT || ruleTypes[i] == EMPTY) { }
		else
			nonReductantRules.push([ruleTypes[i], i]);
	}

	/*
		Underlines and provides error message to every rule in the ASP that violates the EZASP protocol
	*/
	let linesToUnderline = [];
	let hoverMessages = [];

	/*
	const startPosition = new vscode.Position(activeEditor.document.lineAt(0),1);
	const endPosition = new vscode.Position(activeEditor.document.lineAt(0), startPosition.character+9);
	const range = new vscode.Range(startPosition, endPosition);
	linesToUnderline.push(range);
	*/

	//Shows error if rules are invalid
	for(let i = 0; i < nonReductantRules.length; i++){
		if(nonReductantRules[i][0] == INVALID_RULE){
			const range = activeEditor.document.lineAt(nonReductantRules[i][1]).range;
			linesToUnderline.push(range);
			hoverMessages.push("Invalid Rule.")
		}
	}

	//Shows error if fact is in the wrong place
	let lastLineisFact = true;
	for(let i = 0; i < nonReductantRules.length; i++){
		if(lastLineisFact && nonReductantRules[i][0] != FACT){
			lastLineisFact = false;
		}
		if(nonReductantRules[i][0] == FACT && !lastLineisFact){
			const range = activeEditor.document.lineAt(nonReductantRules[i][1]).range;
			linesToUnderline.push(range);
			hoverMessages.push("Error, all facts must be before choices.")
		}
	}

	//Shows error if choice is in the wrong place
	let lastLineisChoice = true;
	for(let i = 0; i < nonReductantRules.length; i++){
		if(nonReductantRules[i][0] == FACT){}
		else if(lastLineisChoice && nonReductantRules[i][0] != CHOICE){
			lastLineisChoice = false;
		}
		if(nonReductantRules[i][0] == CHOICE && !lastLineisChoice){
			const range = activeEditor.document.lineAt(nonReductantRules[i][1]).range;
			linesToUnderline.push(range);
			hoverMessages.push("Error, all choices must be between facts and rules.")
		}
	}

	//Shows error if rule is in the wrong place
	let lastLineisRule = true;
	for(let i = 0; i < nonReductantRules.length; i++){
		if(nonReductantRules[i][0] == FACT){}
		else if(nonReductantRules[i][0] == CHOICE){}
		else if(lastLineisRule && nonReductantRules[i][0] != DEFINITION){
			lastLineisRule = false;
		}
		if(nonReductantRules[i][0] == DEFINITION && !lastLineisRule){
			const range = activeEditor.document.lineAt(nonReductantRules[i][1]).range;
			linesToUnderline.push(range);
			hoverMessages.push("Error, all rules must be between choices and constraints.")
		}
	}

	//Shows error if constraint is in the wrong place
	let lastLineisConstraint = true;
	for(let i = 0; i < nonReductantRules.length; i++){
		if(nonReductantRules[i][0] == FACT){}
		else if(nonReductantRules[i][0] == CHOICE){}
		else if(nonReductantRules[i][0] == DEFINITION){}
		else if(lastLineisConstraint && nonReductantRules[i][0] != CONSTRAINT){
			lastLineisConstraint = false;
		}
		if(nonReductantRules[i][0] == CONSTRAINT && !lastLineisConstraint){
			const range = activeEditor.document.lineAt(nonReductantRules[i][1]).range;
			linesToUnderline.push(range);
			hoverMessages.push("Error, all constraints must be between rules and views.")
		}
	}

	//Shows error if view is in the wrong place
	let lastLineisView = true;
	for(let i = 0; i < nonReductantRules.length; i++){
		if(nonReductantRules[i][0] == FACT){}
		else if(nonReductantRules[i][0] == CHOICE){}
		else if(nonReductantRules[i][0] == DEFINITION){}
		else if(nonReductantRules[i][0] == CONSTRAINT){}
		else if(lastLineisView && nonReductantRules[i][0] != SHOW_STATEMEMENT){
			lastLineisView = false;
		}
		if(nonReductantRules[i][0] == SHOW_STATEMEMENT && !lastLineisView){
			const range = activeEditor.document.lineAt(nonReductantRules[i][1]).range;
			linesToUnderline.push(range);
			hoverMessages.push("Error, all views must be after constraints.")
		}
	}



	return [linesToUnderline, hoverMessages];
}

module.exports = { loadUnderlineDummy, loadUnderline }