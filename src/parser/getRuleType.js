const EMPTY = 0;
const COMMENT = 1;
const FACT = 2;
const CHOICE = 3;
const DEFINITION = 4;
const CONSTRAINT = 5;
const SHOW_STATEMEMENT = 6;
const INVALID_RULE = -1;

/**
 * @param {string} rule
 */
function getRuleType(rule) {

	rule = rule.trim();

	rule = rule.replace(/_/g, 'a');
	if (rule.includes('..')) {
		let i = rule.indexOf('..');
		let a = rule.charAt(i - 1);
		let b = rule.charAt(i + 2);
		if (/^\d+$/.test(a) && /^\d+$/.test(b) && a < b)
			rule = rule.replace(/\.\./g, '0');
	}

	if (rule == '' || rule == '\r')
		return EMPTY;
	else if (rule[0] == '%')
		return COMMENT;
	else if (rule.includes('%'))
		rule = rule.split('%')[0].trim();
	if (rule.startsWith("#show"))
		return SHOW_STATEMEMENT;
	else if (!rule.includes(':-') && !rule.includes('{') && !rule.includes('}')) {
		if (/^[a-z][a-zA-Z0-9]*\((?:[a-zA-Z0-9]+(?:[,;][a-zA-Z0-9]+)*)\)[,;]?$/.test(rule.substring(0, rule.length - 1)))
			return FACT;
		else if (/^[a-z][a-zA-Z0-9]*$/.test(rule.substring(0, rule.length - 1)))
			return FACT;
		else
			return INVALID_RULE;
	}
	else if (rule.includes('{') && rule.includes('}')) {
		if (rule.includes(':-') && (!rule.split(':-')[0].includes('{') || !rule.split(':-')[0].includes('}')))
			return INVALID_RULE;
		else {
			const split1 = rule.split('{')[0];
			let char1 = '';
			if (split1 != '')
				char1 = split1[split1.length - 1];

			const split2 = rule.split('}')[1];
			let char2 = '';
			char2 = split2[0];

			const char3 = rule[rule.indexOf('{') + 1];
			const char4 = rule[rule.indexOf('}') - 1];

			if ((split1 == '' || /\d/.test(char1)) && (char2 == '.' || /\d/.test(char2)) && /[a-zA-Z]/.test(char3) && /^[a-zA-Z)]$/.test(char4)){
				if(!(/\d/.test(char1) && /\d/.test(char2)))
					return CHOICE;
				else if(char1<=char2) 
					return CHOICE;
				else 
					return INVALID_RULE;
			}
			else
				return INVALID_RULE;
		}
	}
	else if (rule.includes(':-') && rule.split(':-')[0] != ""
		&& /[a-zA-Z]/.test(rule.split(':-')[0])
		&& /[a-zA-Z]/.test(rule.split(':-')[1].substring(0, rule.split(':-')[1].length - 1)))
		return DEFINITION;
	else if (rule.includes(':-') && rule.split(':-')[0] == ""
		&& /[a-zA-Z]/.test(rule.split(':-')[1].substring(0, rule.split(':-')[1].length - 1)))
		return CONSTRAINT;
	else
		return INVALID_RULE;
}

module.exports = { getRuleType, EMPTY, COMMENT, FACT, CHOICE, DEFINITION, CONSTRAINT, SHOW_STATEMEMENT, INVALID_RULE };