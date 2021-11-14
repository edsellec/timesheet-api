const admin = require("../config/firebase.js");
const User = require("./../models/user");
const moment = require("moment");

function getAuthToken(req, res, next) {
	if (
		req.headers.authorization &&
		req.headers.authorization.split(" ")[0] === "Bearer"
	) {
		req.authToken = req.headers.authorization.split(" ")[1];
	} else {
		req.authToken = null;
	}
	next();
}

function checkIfAuthenticated(req, res, next) {
	getAuthToken(req, res, async () => {
		try {
			const userInfo = await admin.auth().verifyIdToken(req.authToken);
			const data = await User.query().withGraphFetched("[role]").findOne({
				email: userInfo.email,
			});

			req.authId = userInfo.uid;
			req.authUser = data;
			if (data) {
				req.authRole = data.role;
			} else {
				req.authRole = null;
			}

			return next();
		} catch (e) {
			console.log(
				"You are not authorized to make this request (Time: " +
					moment(new Date()).format("MMM D YYYY, h:mm:ss a") +
					")"
			);
			return res
				.status(200)
				.send({
					error:
						"You are not authorized to make this request (Time: " +
						moment(new Date()).format("MMM D YYYY, h:mm:ss a") +
						")",
				});
		}
	});
}

module.exports = { checkIfAuthenticated };
