const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

module.exports = admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL:
		"https://timesheet-1115e-default-rtdb.asia-southeast1.firebasedatabase.app",
});
