const { withProps } = require('bottender');
let Person = {
		name : 'yodha',
		kelas :"2"
	};

async function SayHi(context, props) {
  await context.sendText(`Hi, ${Person.props.name}.` 'di kelas'`${Person.props.kelas}`);
}

async function HandlePropCons(context) {
	
	 return withProps(SayHi, Person);
}

module.exports = HandlePropCons ;