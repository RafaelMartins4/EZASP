
const TEMP = '~~';
const regex = new RegExp(TEMP,"g");

/**
 * @param {string[]} text
 */
function formatText(text){

	const originalText = text.slice();
	const lines = [];

	let formattedText = [];
	let lastRuleNoDot = false;

	let i = 0;

	if(text[0] == "")
		i = 1;

	for (i; i < text.length; i++) {
		if(text[i].includes('..'))
			text[i] = text[i].replace(/\.\./g,TEMP)
		if (text[i].trim() == '' && !lastRuleNoDot) {
			formattedText.push(text[i].trim());
			lines.push({lineStart: i, lineEnd:i, indexStart:0, indexEnd:0});
		}
		else if (text[i].includes('%*')) {
				let line = text[i].split('%*', 2);
				let temp = line[0].trim();
				let comment = '%*'.concat(line[1]);
				if(line[1].includes('*%')){
					const split = comment.split('*%')
					formattedText.push(split[0].concat('*%').trim());
					lines.push({lineStart: i, lineEnd:i, indexStart:text[i].indexOf(split[0].concat('*%').trim()), indexEnd:split[0].concat('*%').trim().length});
					if(split[1].includes('%')){
						temp = temp.concat(split[1].trim().split('%')[0]).trim()
						formattedText.push(temp);
						lines.push({lineStart: i, lineEnd:i, indexStart:text[i].indexOf(temp), indexEnd:text[i].indexOf(temp)+temp.length});
						formattedText.push('%'.concat(split[1].split('%')[1]).trim());
						lines.push({lineStart: i, lineEnd:i, indexStart:text[i].indexOf('%'.concat(split[1].split('%')[1]).trim()), indexEnd:text[i].length});
					}
					else if(split[1].trim() != ""){
						const a = temp.concat(split[1].trim());
						formattedText.push(a);
						lines.push({lineStart: i, lineEnd:i, indexStart:0, indexEnd:text[i].length});
					}
				}
				else{
					let end = false;
					for (let j = i + 1; j < text.length && !end; j++) {
						if (text[j].includes('*%')) {
							let tmp = text[j].split('*%', 2);
							comment = comment.concat(tmp[0]).concat('*%');
							formattedText.push(comment.trim());
							lines.push({lineStart: i, lineEnd:j, indexStart:0, indexEnd:text[j].length});
							if (text[j + 1])
								text[j + 1] = tmp[1].concat(text[j + 1]);
							else
								text[j + 1] = tmp[1];
							end = true;
						}
						else {
							comment = comment.concat(text[j]);
						}
						if(end){
							if(text[j+1].trim() == "")
								i = j + 1;
							else
								i = j;
						}
						if(!text[j].includes('*%') && j == text.length - 1){
							end = true;
							i = j;
							formattedText.push(comment.trim());
						}
					}
				}
			}
		else if (text[i].startsWith('%')){
			formattedText.push(text[i].trim());
			lines.push({lineStart: i, lineEnd:i, indexStart:0, indexEnd:text[i].length});
		}
		else if (text[i].includes('%')){
			const split = text[i].split('%',2);

			const dot = new RegExp('.', 'g');
			const matches = split[0].match(dot);

			const hasMoreThanOneDot = matches && matches.length > 1;
			
			if(hasMoreThanOneDot){
				const rules = split[0].split('.');
				let a = 1;
				const lastEndsWithDot = split[0].trim().endsWith('.');

				if(lastEndsWithDot){
					a = a+1;
				}

				for(let j = 0; j<rules.length-a; j++){
					const b = rules[j].trim().concat('.')
					formattedText.push(b)
					lines.push({lineStart: i, lineEnd:i, indexStart:text[i].indexOf(b), indexEnd:text[i].indexOf(b)+b.length});
				}

				if(lastEndsWithDot){
					const b = rules[rules.length-a].trim().concat('.');
					formattedText.push(b)
					lines.push({lineStart: i, lineEnd:i, indexStart:text[i].indexOf(b), indexEnd:text[i].indexOf(b)+b.length});
				}
				if(!lastEndsWithDot){
					if(text.length == i+1){
						text[i+1] = rules[rules.length-a].trim();
					}
					else
						for(let j = i; text[j+1] == '' && j<text.length-1; j++){
							if(text[j+2] != ''){
								text[j+2] = rules[rules.length-a].trim().concat(text[j+2]);
								lastRuleNoDot = true;
							}
						}
				}
			}
			const c = '%'.concat(split[1]).trim()
			formattedText.push(c)
			lines.push({lineStart: i, lineEnd:i, indexStart:text[i].indexOf(c), indexEnd:text[i].indexOf(c)+c.length});
		}
		else if (!text[i].includes('.') && text[i].trim() != "") {
			let start = i;
			if(text[start-1] && text[start-1].includes("O"))
				start=start-1;
			let rule = text[i];
			let dotFound = false;
			for (let j = i + 1; j < text.length && !dotFound; j++) {
				if (text[j].includes('.')) {
					let tmp = text[j].split('.', 2);
					rule = rule.concat(tmp[0]).concat('.');
					formattedText.push(rule.trim());
					lines.push({lineStart: start, lineEnd:j, indexStart:text[start].indexOf(rule[0]), indexEnd:text[j].length});
					dotFound = true;
				}
				else {
					rule = rule.concat(text[j]);
				}
				i = j + 1;
			}
			if(!rule.includes('.')){
				start = start-1;
				formattedText.push(rule.trim());
				let isNextLineEmpty = true;
				while(isNextLineEmpty){
					if(text[start] == "")
						start++;
					else
						isNextLineEmpty = false;
				}
				if(text[i-1].includes('%'))
					lines.push({lineStart: start, lineEnd:i-1, indexStart:text[start].lastIndexOf(rule[0]+rule[1]), indexEnd:text[i-1].lastIndexOf(rule[0]+rule[1]) + rule.length});
				else
					lines.push({lineStart: start, lineEnd:i-1, indexStart:text[start].indexOf(rule[0]+rule[1]), indexEnd:text[i-1].length});
				}
		}
		else if (text[i] != "") {
			const split = text[i].split('.')
			if(!text[i].endsWith('.'))
				text[i+1] = split[split.length-1].concat(text[i+1]);
			if (split.length > 2)
				for (let j = 0; j < split.length - 1; j++){
					const b = split[j].concat('.').trim();
					formattedText.push(b)
					lines.push({lineStart: i, lineEnd:i, indexStart:text[i].indexOf(b), indexEnd:text[i].indexOf(b)+b.length});
					const c = "O".repeat(text[i].lastIndexOf("O") + b.length + 1);
					text[i] = c + text[i].slice(text[i].lastIndexOf("O") + b.length + 1);
				}
			else{
				formattedText.push(text[i].trim());
				lines.push({lineStart: i, lineEnd:i, indexStart:0, indexEnd:originalText[i].length});
			}
			lastRuleNoDot = false;
		}
	}

	for(let i = 0; i<formattedText.length; i++){
		if(formattedText[i].includes(TEMP))
			if(!originalText[lines[i].lineEnd].includes(TEMP))
				formattedText[i] = formattedText[i].replace(regex,'..')
			else{
				let a = originalText[lines[i].lineEnd].replace(/\s/g, '');
				let b = "";
				let l = lines[i].lineEnd;
				let j = i;
				for(;l == lines[j].lineEnd; j++){
					b = b.concat(formattedText[j])
				}

				b = b.replace(/\s/g, '');
				
				if(a != b){
					let counter = 0;
					for (let k = 0; k < a.length; k++) {
						if(b[k] == '.')
							counter++;
						if (a[k] != b[k]) {
							if(b[k] == TEMP[0]) {
								formattedText[i+counter] = formattedText[i+counter].replace(TEMP,'..');
								k=k+1;
							}
						}
					}
					}
				i = j - 1;
			}
	}

	for (let j = formattedText.length-1; j != -1; j--) {
		if (formattedText[j] == "") {
			formattedText.splice(j, 1);
			lines.splice(j, 1);
		}
		else break;
	  }

	return {formattedText: formattedText, lines: lines};
}

module.exports = { formatText };
