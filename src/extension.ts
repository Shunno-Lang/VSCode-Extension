import * as vscode from 'vscode'


export function activate(context: vscode.ExtensionContext) {
	vscode.languages.registerHoverProvider('shunno', {
		provideHover(document, position, token) {
			return {
				contents: [ 'Hello, world!' ]
			}
		}
	})
}

export function deactivate() {
}
