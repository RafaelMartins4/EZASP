const vscode = require('vscode');

const { loadUnderline } = require('../src/engine/loadUnderline');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	const underlineRed = vscode.window.createTextEditorDecorationType({
		textDecoration: 'underline wavy red'
	});
	
	//Loads the underlines in the editor, and reloads on every change on the document
	const activeEditor = vscode.window.activeTextEditor;
	let results = loadUnderline(activeEditor);
	activeEditor.setDecorations(underlineRed, results[0]);
	console.log(results);

	vscode.workspace.onDidChangeTextDocument(() => {
		results = loadUnderline(activeEditor);
		activeEditor.setDecorations(underlineRed, results[0]);
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
