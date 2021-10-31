const bcrypt = require("bcrypt");
const admin = require("./../../config/firebase.js");
const User = require("./../../models/user");

async function login(req, res, next) {
	const request = req.body;
	const user = await User.query().findOne({
		email: request.email,
	});

	res.status(200).json(user);
}

async function fetch(req, res, next) {
	try {
		const token = req.body.token;
		const user = await admin.auth().verifyIdToken(token);
		const data = await User.query().withGraphFetched("[role]").findOne({
			email: user.email,
		});

		res.status(200).json(data);
	} catch (e) {
		res.status(200).json(null);
	}
}

module.exports = { login, fetch };
