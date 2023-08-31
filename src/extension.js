const vscode = require('vscode');

const { loadErrors } = require('./engine/loadErrors');

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
function getRanges(text){
	const data = loadErrors(text);

	const results = [];

	data[0].forEach(range => {
		results.push(convertRange(range));
	})

	return [results,data[1]];
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
	let results = getRanges(activeEditor.document.getText());
	activeEditor.setDecorations(underlineRed, results[0]);
	console.log(results);

	vscode.workspace.onDidChangeTextDocument(() => {
		results = getRanges(activeEditor.document.getText());
		activeEditor.setDecorations(underlineRed, results[0]);
		console.log(results);
	});

	vscode.window.onDidChangeActiveTextEditor(editor => {
		activeEditor = editor;
		results = getRanges(editor.document.getText());
		editor.setDecorations(underlineRed, results[0]);
		console.log(results);
	});
	
	let disposable = vscode.languages.registerHoverProvider('*', {
        provideHover(document, position) {
            for (let i = 0; i<results[1].length; i++) {
                if (results[0][i].contains(position)) {
                    const hoverMessage = new vscode.Hover(results[1][i]);
                    return hoverMessage;
                }
            }
        }
    });

	context.subscriptions.push(disposable);
}

function deactivate() { }

module.exports = {
	activate,
	deactivate
}
