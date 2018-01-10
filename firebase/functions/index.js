const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const setLatestSafeCompiledDateModule = require('./setLatestSafeCompiledDate');
const removeUserModule = require('./removeUser');
const createUserModule = require('./createUser');
const updateUserModule = require('./updateUser');
const sendWelcomeEmailModule = require('./sendWelcomeEmail');

exports.setLatestSafeCompiledDate = functions.https.onRequest(
	(req,res) => {
		setLatestSafeCompiledDateModule.handler(req,res,admin)
	}
);
exports.removeUser = functions.database.ref('/users/{pushId}/email').onDelete(
	(event) => {
		removeUserModule.handler(event,admin);
	}
);
exports.createUser = functions.database.ref('/users/{id}').onCreate(
	(event) => {
		createUserModule.handler(event,admin);
	}
);
exports.updateUser = functions.database.ref('/users/{id}').onWrite(
	(event) => {
		updateUserModule.handler(event,admin)
	}
);
exports.sendWelcomeEmail = functions.auth.user().onCreate(
	(event) => {
		sendWelcomeEmailModule.handler(event,functions);
	}
);