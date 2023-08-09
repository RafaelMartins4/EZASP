
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
	for (let i = 0; i < text.length; i++) {
		if(text[i].includes('..'))
			text[i] = text[i].replace(/\.\./g,TEMP)
		if (text[i] == '' && !lastRuleNoDot) {
			formattedText.push(text[i]);
			lines.push(i);
		}
		else if (text[i].includes('%*')) {
				let line = text[i].split('%*', 2);
				let temp = line[0].trim();
				let comment = '%*'.concat(line[1]);
				if(line[1].includes('*%')){
					const split = comment.split('*%')
					formattedText.push(split[0].concat('*%').trim());
					lines.push(i);
					if(split[1].includes('%')){
						temp = temp.concat(split[1].trim().split('%')[0]).trim()
						formattedText.push(temp);
						lines.push(i);
						formattedText.push('%'.concat(split[1].split('%')[1]).trim());
						lines.push(i);
					}
					else if(split[1].trim() != ""){
						formattedText.push(temp.concat(split[1].trim()));
						lines.push(i);
					}
				}
				else{
					let end = false;
					for (let j = i + 1; j < text.length && !end; j++) {
						if (text[j].includes('*%')) {
							let tmp = text[j].split('*%', 2);
							comment = comment.concat(tmp[0]).concat('*%');
							formattedText.push(comment);
							lines.push(i);
							if (text[j + 1])
								text[j + 1] = tmp[1].concat(text[j + 1]);
							else
								text[j + 1] = tmp[1];
							end = true;
						}
						else {
							comment = comment.concat(text[j]);
						}
						if(end)
							i = j + 1;
					}
				}
			}
		else if (text[i].startsWith('%')){
			formattedText.push(text[i]);
			lines.push(i);
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
					formattedText.push(rules[j].trim().concat('.'))
					lines.push(i);
				}

				if(lastEndsWithDot){
					formattedText.push(rules[rules.length-a].trim().concat('.'))
					lines.push(i);
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
			formattedText.push('%'.concat(split[1]))
			lines.push(i);
		}
		else if (!text[i].includes('.') && text[i] != "") {
			let rule = text[i];
			for (let j = i + 1; j < text.length; j++) {
				if (text[j].includes('.')) {
					let tmp = text[j].split('.', 2);
					rule = rule.concat(tmp[0]).concat('.');
					formattedText.push(rule);
					lines.push(i);
				}
				else {
					rule = rule.concat(text[j]);
				}
				i = j + 1;
			}
			if(!rule.includes('.')){
				formattedText.push(rule);
				lines.push(i-1);
			}
		}
		else if (text[i] != "") {
			const split = text[i].split('.')
			if (split.length > 2)
				for (let j = 0; j < split.length - 1; j++){
					formattedText.push(split[j].concat('.').trim())
					lines.push(i);
				}
			else{
				formattedText.push(text[i]);
				lines.push(i);
			}
			lastRuleNoDot = false;
		}
	}

	for(let i = 0; i<formattedText.length; i++){
		if(formattedText[i].includes(TEMP))
			if(!originalText[lines[i]].includes(TEMP))
				formattedText[i] = formattedText[i].replace(regex,'..')
			else{
				let a = originalText[lines[i]].replace(/\s/g, '');
				let b = "";
				let l = lines[i];
				let j = i;
				for(;l == lines[j]; j++){
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
	return formattedText;
}

module.exports = { formatText };