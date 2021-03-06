const admin = require('firebase-admin');
const serviceAccount = require('../keys/admin.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://socialape-cac58.firebaseio.com",
    storageBucket: "socialape-cac58.appspot.com"
});

const db = admin.firestore();

module.exports = { admin, db };