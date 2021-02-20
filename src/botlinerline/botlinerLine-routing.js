const { router, line } = require('bottender/router');
const HandleFollow     = require('./HandleFollowLine');
const HandleMessage    = require('./HandleMessageLine');
const HandleUnfollow   = require('./HandleUnfollowLine')
async function BotlinerLineRouting() {
  return router([
    line.message(HandleMessage),
    line.follow(HandleFollow),
    line.unfollow(HandleUnfollow),
    line.join(HandleJoin),
    line.leave(HandleLeave),
    line.memberJoined(HandleMemberJoined),
    line.memberLeft(HandleMemberLeft),
    line.postback(HandlePostback),
    line.beacon.enter(HandleBeaconEnter),
    line.beacon.banner(HandleBeaconBanner),
    line.beacon.stay(HandleBeaconStay),
    line.accountLink(HandleAccountLink),
    line.things.link(HandleThingsLink),
    line.things.unlink(HandleThingsUnlink),
    line.things.scenarioResult(HandleThingsScenarioResult),
    line.any(HandleLine),
  ]);
}

/* Note: You need to implement those functions
async function HandleFollow(context) {}
async function HandleMessage(context) {}
async function HandleUnfollow(context) {}
async function HandleJoin(context) {}
async function HandleLeave(context) {}
async function HandleMemberJoined(context) {}
async function HandleMemberLeft(context) {}
async function HandlePostback(context) {}
async function HandleBeaconEnter(context) {}
async function HandleBeaconBanner(context) {}
async function HandleBeaconStay(context) {}
async function HandleAccountLink(context) {}
async function HandleThingsLink(context) {}
async function HandleThingsUnlink(context) {}
async function HandleThingsScenarioResult(context) {}
async function HandleLine(context) {}
 */
module.exports = BotlinerLineRouting;