const { platform, router } = require('bottender/router');
const BotlinerLineRouting  = require('./botlinerline/botlinerLine-routing');
const BotlinerMessengerRouting   = require('./botlinermessenger/botlinerMessenger-routing')
const BotlinerConsoleRouting	 = require('./botlinerconsole/botlinerconsole-routing')
module.exports = async function App(context) {
  return router([
  	platform('console',BotlinerConsoleRouting),
    platform('line', BotlinerLineRouting),
    platform('messenger', BotlinerMessengerRouting)
    
  ]);
};