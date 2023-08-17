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
function loadUnderline(textRaw) {

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
			const range = lines[nonReductantRules[i][1]];
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
			const range = lines[nonReductantRules[i][1]];
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
			const range = lines[nonReductantRules[i][1]];
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
			const range = lines[nonReductantRules[i][1]];
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
			const range = lines[nonReductantRules[i][1]];		
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
			const range = lines[nonReductantRules[i][1]];			
			rangesToUnderline.push(range);
			hoverMessages.push("Error, all views must be after constraints.")
		}
	}

	return [rangesToUnderline, hoverMessages];
}

module.exports = { loadUnderline }