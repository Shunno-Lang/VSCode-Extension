"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    vscode.languages.registerHoverProvider('shunno', {
        provideHover(document, position, token) {
            return {
                contents: ['Hello, world!']
            };
        }
    });
}
exports.activate = activate;
function deactivate() {
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map