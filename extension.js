const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
// 此函数在扩展被激活时被调用
function activate(context) {
  // 此行代码使用console输出诊断信息（console.log）和错误（console.error）
  // 此行代码只会在第一次激活扩展时执行一次，用于输出调试信息和错误。
	console.log('Congratulations, your extension "plugindemo" is now active!');

  // 注册命令，命令ID必须与package.json中的command字段匹配
	let disposable = vscode.commands.registerCommand('plugindemo.helloWorld', function () { 
    // 你可以在这里放置你的代码，当你的命令被执行时，这些代码将被执行。
    // 此行代码显示了一个消息框，提示用户“Hello World from plugInDemo!”。
		vscode.window.showInformationMessage('Hello World from plugInDemo!');
	});
  // 此行代码将此命令注册到上下文中。
	context.subscriptions.push(disposable);
}

// 此函数在扩展被释放时被调用
function deactivate() {}

// 此行代码导出了activate和deactivate函数，以便在扩展被激活或释放时被调用。
module.exports = {
	activate,
	deactivate
}
