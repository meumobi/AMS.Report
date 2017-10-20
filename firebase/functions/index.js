const functions = require('firebase-functions');

const setLatestUnpluggedImportModule = require('./setLatestUnpluggedImport');
const removeUserModule = require('./removeUser');
const createUserModule = require('./createUser');
const updateUserModule = require('./updateUser');
const sendWelcomeEmailModule = require('./sendWelcomeEmail');

exports.setLatestUnpluggedImport = functions.https.onRequest(setLatestUnpluggedImportModule.handler);
exports.removeUser = functions.database.ref('/users/{pushId}/email').onDelete(removeUserModule.handler);
exports.createUser = functions.database.ref('/users/{id}').onCreate(createUserModule.handler);
exports.updateUser = functions.database.ref('/users/{id}').onWrite(updateUserModule.handler);
exports.sendWelcomeEmail = functions.auth.user().onCreate(sendWelcomeEmailModule.handler);