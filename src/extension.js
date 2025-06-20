const vscode = require('vscode');
const { loadErrors } = require('./engine/loadErrors.js');
const { readFileSync, existsSync, writeFileSync } = require('fs');
const path = require('path');
const { dirname } = require('path');
const { error } = require('console');

let disableFeatures;

const underlineRed = vscode.window.createTextEditorDecorationType({
	textDecoration: 'underline wavy red'
});

const underlineYellow = vscode.window.createTextEditorDecorationType({
	textDecoration: 'underline wavy rgba(255, 255, 0, 0.5)'
});

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
async function getResults(text, name, extraText) {
	const data = await loadErrors(text, name, extraText, disableFeatures);

	const errorRanges = [];
	const warningRanges = [];
	const predicateHoverRanges = [];

	const errorMessages = data[2];
	const warningMessages = data[3];
	const predicateHoverMessages = data[5];
	
	if(data[0])		// syntaxErrorRanges + stratificationErrorRanges
		data[0].forEach(range => {
			errorRanges.push(convertRange(range));
		})

	if(data[1]) 	// orderingWarningRanges + stratificationWarningRanges + noCommentWarningRanges
		data[1].forEach(range => {
			warningRanges.push(convertRange(range));
		})

	if(data[4])		// predicateHoverRanges
		data[4].forEach(range => {
			predicateHoverRanges.push(convertRange(range));
		})

	return [data, errorRanges, warningRanges, predicateHoverRanges, errorMessages, warningMessages, predicateHoverMessages];
}	

function getExtraFiles(activeEditor){
	const fileName = activeEditor.document.fileName;

	const dir = path.dirname(fileName);

	let files = [];

	let text = [];

	if(existsSync(dir+'/config.json')){
		const fileData = readFileSync(dir+'/config.json', 'utf-8');
        const json = JSON.parse(fileData);
		const addFiles = json.additionalFiles;
		
		let split;
		if(detectOS() == WINDOWS)
			split = fileName.split('\\');
		else
			split = fileName.split('/');

		if(json.disableFeatures)
			disableFeatures = json.disableFeatures;
		else
			disableFeatures = undefined;

		if(addFiles.includes(split[split.length])){
			for (const item of addFiles)
				if (item !== split[split.length]) 
					files.push(item);
		}

		else
			files = addFiles;
	}
	else
		disableFeatures = undefined;
  
	for(const file of files){
		if(existsSync(dir+'/'+file))
			text.push(readFileSync(dir+'/'+file, 'utf-8'));
		else
			vscode.window.showErrorMessage('File ' + file + ' does not exist in this folder, check config.json file.');
	}

	return [files,text];
}

let hoverDisposable;
async function loadThings(activeEditor, fileName) {
    let results = await getResults(activeEditor.document.getText(), fileName, getExtraFiles(activeEditor));
	activeEditor.setDecorations(underlineRed, results[1]);
    activeEditor.setDecorations(underlineYellow, results[2]);

    const errorObjects = results[0][0];
	const warningObjects = results[0][1];
    const predicateHoverObjects = results[0][4];

    const errorRanges = results[1];
	const warningRanges = results[2];
    const predicateHoverRanges = results[3];

    const errorMessages = results[4];
	const warningMessages = results[5];
    const predicateMessages = results[6];

	/* console.log('Error Objects:');
	console.log(errorObjects);

	console.log('Error Ranges:');
	console.log(errorRanges);

	console.log('Error Messages:');
	console.log(errorMessages);

	console.log('----------------------------------')

	console.log('Warning Objects:');
	console.log(warningObjects);

	console.log('Warning Ranges:');
	console.log(warningRanges);

	console.log('Warning Messages:');
	console.log(warningMessages);

	console.log('----------------------------------')

	console.log('Predicate Hover Objects:');
	console.log(predicateHoverObjects);

	console.log('Predicate Hover Ranges:');
	console.log(predicateHoverRanges);

	console.log('Predicate Messages:');
	console.log(predicateMessages); */

	

	

    
    // Dispose of the previous hover provider if it exists
    if (hoverDisposable) {
        hoverDisposable.dispose();
    }

    // Register a new hover provider
    hoverDisposable = vscode.languages.registerHoverProvider('*', {
        provideHover(document, position) {
            for (let i = 0; i < errorObjects.length; i++) {
                if (errorRanges[i].contains(position)) {
                    const hoverMessage = new vscode.Hover(errorMessages[i]);
                    return hoverMessage;
                }
            }

			for (let i = 0; i < warningObjects.length; i++) {
                if (warningRanges[i].contains(position)) {
                    const hoverMessage = new vscode.Hover(warningMessages[i]);
                    return hoverMessage;
                }
            }

            for (let i = 0; i < predicateHoverObjects.length; i++) {
                if (predicateHoverRanges[i].contains(position)) {
                    const hoverMessage = new vscode.Hover(predicateMessages[i]);
					return hoverMessage;
                }
            }            
        }
    });

    return hoverDisposable;
}

/**
 * @param {vscode.ExtensionContext} context
 */
async function activate(context) {
	let activeEditor = vscode.window.activeTextEditor;

	let fileName = activeEditor.document.fileName;

	if(fileName.includes('.lp') || fileName.includes('.cl') || fileName.includes('.clp') 
	|| fileName.includes('.iclp') || fileName.includes('.Clp') || fileName.includes('.iClp')
	|| fileName.includes('.blp') || fileName.includes('.iblp')) {

		let disposable = await loadThings(activeEditor, fileName);
		context.subscriptions.push(disposable);

		vscode.workspace.onDidChangeTextDocument(() => {
			(async () => {
				disposable.dispose(); // Dispose of the previous disposable
				activeEditor.setDecorations(underlineRed, []);
				activeEditor.setDecorations(underlineYellow, []);
		
				disposable = await loadThings(activeEditor, fileName); // Load new hover provider
				context.subscriptions.push(disposable); // Add to subscriptions
			})().catch(err => console.error(err));
		});

		vscode.window.onDidChangeActiveTextEditor(editor => {
			(async () => {
				fileName = editor.document.fileName;
		
				if (fileName.includes('.lp') || fileName.includes('.cl') || fileName.includes('.clp') ||
					fileName.includes('.iclp') || fileName.includes('.Clp') || fileName.includes('.iClp') ||
					fileName.includes('.blp') || fileName.includes('.iblp')) {
					
					activeEditor = editor;
					disposable.dispose(); // Dispose of the previous disposable
					activeEditor.setDecorations(underlineRed, []);
					activeEditor.setDecorations(underlineYellow, []);
		
					disposable = await loadThings(activeEditor, fileName); // Load new hover provider
					context.subscriptions.push(disposable); // Add to subscriptions
				}
			})().catch(err => console.error(err));
		});
	}

	const initClingoConfig = vscode.commands.registerCommand('createConfig', function () {

		const sampleConfig = readFileSync(`${context.asAbsolutePath("")}/src/sampleConfig.json`);
		writeFileSync(`${dirname(vscode.window.activeTextEditor.document.fileName)}/config.json`, sampleConfig);
	});

	context.subscriptions.push(initClingoConfig);

	vscode.window.showInformationMessage('EZASP Extension is now active!');
}

function deactivate() { }

module.exports = { activate, deactivate };
