
async function HandleTextCons(context) {
	await context.sendText('Hi,apa kabar?');
	console.log(context.session.user);
}

module.exports = HandleTextCons ;