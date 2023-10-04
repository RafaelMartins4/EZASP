const vscode = require('vscode');

const { loadErrors } = require('./engine/loadErrors');

const { readFileSync, existsSync } = require('fs');

const path = require('path');

/**
 * @param {{ lineStart: number; indexStart: number; lineEnd: number; indexEnd: number; }} range
 */
function convertRange(range){
	const startPosition = new vscode.Position(range.lineStart, range.indexStart);
	const endPosition = new vscode.Position(range.lineEnd, range.indexEnd);
	const rangeFinal = new vscode.Range(startPosition, endPosition);
	return rangeFinal;
}

/**
 * @param {string} text
 */
function getRanges(text, extraText){
	const data = loadErrors(text, extraText);

	const results = [];

	data[0].forEach(range => {
		results.push(convertRange(range));
	})

	return [results,data];
}	

function getExtraFiles(activeEditor){
	const fileName = activeEditor.document.fileName;

	const dir = path.dirname(fileName);

	let files = [];

	let text = "";

	if(existsSync(dir+'/config.json')){
		const fileData = readFileSync(dir+'/config.json', 'utf-8');
        const json = JSON.parse(fileData);
		const addFiles = json.additionalFiles;
		const split = fileName.split('\\');

		if(addFiles.includes(split[split.length])){
			for (const item of addFiles)
				if (item !== split[split.length]) 
					files.push(item);
		}
		else
			files = addFiles;
	}
  
	for(const file of files){
		if(existsSync(dir+'/'+file))
			text = text + readFileSync(dir+'/'+file, 'utf-8');
		else
			vscode.window.showErrorMessage('File ' +file+ ' does not exist in this folder, check config.json file.');
	}

	return text;
}

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	const underlineRed = vscode.window.createTextEditorDecorationType({
		textDecoration: 'underline wavy red'
	});
	
	//Loads the underlines in the editor, and reloads on every change on the document
	let activeEditor = vscode.window.activeTextEditor;

	const fileName = activeEditor.document.fileName;
	console.log(fileName)

	if(fileName.includes('.lp')){

		let results = getRanges(activeEditor.document.getText(), getExtraFiles(activeEditor));
		activeEditor.setDecorations(underlineRed, results[0]);
		console.log(results);

		vscode.workspace.onDidChangeTextDocument(() => {
			results = getRanges(activeEditor.document.getText(), getExtraFiles(activeEditor));
			activeEditor.setDecorations(underlineRed, results[0]);
			console.log(results);
		});

		vscode.window.onDidChangeActiveTextEditor(editor => {
			const fileName = editor.document.fileName;
			console.log(fileName)

			if(fileName.includes('.lp')){
				activeEditor = editor;
				results = getRanges(editor.document.getText(), getExtraFiles(activeEditor));
				editor.setDecorations(underlineRed, results[0]);
				console.log(results);
			}
		});	
		
		let disposable = vscode.languages.registerHoverProvider('*', {
			provideHover(document, position) {
				for (let i = 0; i<results[1][1].length; i++) {	
					if (results[0][i].contains(position)) {
						const hoverMessage = new vscode.Hover(results[1][1][i]);
						return hoverMessage;
					}
				}
			}
		});

		context.subscriptions.push(disposable);
		
		const keys = [...results[1][3].keys()];
		const ranges = [];

		for(const range of keys)
			ranges.push(convertRange(range))
		
		/*
		// Create a decoration type for the clickable range
		const decorationType = vscode.window.createTextEditorDecorationType({
			cursor: 'pointer',
		});

		// Apply the decoration to the range
		vscode.window.activeTextEditor.setDecorations(decorationType, ranges);

		context.subscriptions.push(disposable);
		*/
	}
}

function deactivate() { }

module.exports = {
	activate,
	deactivate
}
