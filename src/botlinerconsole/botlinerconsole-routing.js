const {router,chain,props,console} = require('bottender/router');
const HandleTextCons   = require('./HandleTextConsole');
//const HandlePropCons   = require('./HandlePropConsole')
async function BotlinerConsoleRouting(context) {
// 	return router([
// console.sendText('Hi,apa kabar?',HandleTextCons
// 	)
// 		]);
// await context.sendText('Hi,apa kabar?')
return HandleTextCons;
}

module.exports = BotlinerConsoleRouting ;