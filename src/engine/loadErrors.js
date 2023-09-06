// @ts-ignore
const { FACT, CHOICE, DEFINITION, CONSTRAINT, SHOW_STATEMEMENT, INVALID_RULE } = require('../parser/getRuleType');

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



/**
 * @param {{ name: string; arguments: string[]; }} predicate


function formatPredicate(predicate){
	if(predicate.arguments.length == 0)
		return predicate.name;

	else{
		let args = "";
		for(const arg of predicate.arguments){
			if(arg != predicate.arguments[predicate.arguments.length-1])
				args = args.concat(arg+",");
			else
				args = args.concat(arg);
		}

		return predicate.name+"("+args+")";
	}
}
*/

/**
 * @param {string} textRaw
 */
function loadErrors(textRaw) {

	if (textRaw == '' || textRaw == '\r\n' || textRaw == '\n')
		return [[], []];

	const OS = detectOS();

	let SPLIT_CODE;

	if (OS == WINDOWS)
		SPLIT_CODE = '\r\n';
	else
		SPLIT_CODE = '\n';

	//Gets the document and splits it into an array of lines
	const text = textRaw.split(SPLIT_CODE);

	const result1 = formatText(text);
	const formattedText = result1.formattedText;
	const lines = result1.lines;

	const result2 = getPredicates(formattedText);
	const predicates = result2.predicates;	
	const nonReductantRules = result2.nonReductantRules;

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

	for (let i = 0; i < nonReductantRules.length; i++) {
		if (nonReductantRules[i][0] == INVALID_RULE) {
			nonReductantRules.splice(i,1);
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

	const definedPredicates = [];
	const undefinedPredicates = new Map();
	for(let i = 0; i<nonReductantRules.length; i++){
		for(const predicate of predicates[i].head){
			const tmp = formattedText[nonReductantRules[i][1]].split(':-')[0];
			if(nonReductantRules[i][0] != SHOW_STATEMEMENT){
				if(!tmp.includes(':'))
					definedPredicates.push(predicate)
				else if(!tmp.split(':')[1].includes(predicate.name))
					definedPredicates.push(predicate)
				else if(!arrayContainsObject(definedPredicates, predicate)){
					if(undefinedPredicates.has(lines[nonReductantRules[i][1]])){
						if(!undefinedPredicates.get(lines[nonReductantRules[i][1]]).includes(predicate))
							undefinedPredicates.get(lines[nonReductantRules[i][1]]).push(predicate);
					}
					else
						undefinedPredicates.set(lines[nonReductantRules[i][1]],[predicate]);
				}
			}
			else{
				if(!arrayContainsObject(definedPredicates, predicate))
					if(undefinedPredicates.has(lines[nonReductantRules[i][1]]))
						undefinedPredicates.get(lines[nonReductantRules[i][1]]).push(predicate);
					else
						undefinedPredicates.set(lines[nonReductantRules[i][1]],[predicate]);
			}
		}

		for(const predicate of predicates[i].tail){
			if(!arrayContainsObject(definedPredicates, predicate)){
				if(undefinedPredicates.get(lines[nonReductantRules[i][1]])){
					if(!arrayContainsObject(undefinedPredicates.get(lines[nonReductantRules[i][1]]),predicate))
						undefinedPredicates.get(lines[nonReductantRules[i][1]]).push(predicate);
				}
				else
					undefinedPredicates.set(lines[nonReductantRules[i][1]],[predicate]);
			}
		}
	}

	for(const key of undefinedPredicates.keys()){
		if(!rangesToUnderline.includes(key))
			rangesToUnderline.push(key)

		const predicates = undefinedPredicates.get(key);

		if(predicates.length == 1)
			hoverMessages.push("Error, predicate "+predicates[0].name + "/"+ predicates[0].arguments +" is not defined yet.")

		else{
			let names = "";
			for(let j = 0; j<predicates.length; j++)
				if(j == 0)
					names = names + " " + predicates[j].name + "/"+ predicates[j].arguments;

				else if(j == predicates.length-1)
					names = names + " and " + predicates[j].name + "/"+ predicates[j].arguments;
				else
					names = names + ", " + predicates[j].name + "/"+ predicates[j].arguments;

			hoverMessages.push("Error, predicates" + names + " are not defined yet.")
		}
	}

	return [rangesToUnderline, hoverMessages];
}

module.exports = { loadErrors }