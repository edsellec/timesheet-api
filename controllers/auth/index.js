const bcrypt = require("bcrypt");
const User = require("./../../models/user");

async function login(req, res, next) {
	const request = req.body;
	const user = await User.query().findOne({
		email: request.email,
	});

	if (user) {
		const result = await bcrypt.compareSync(
			request.password,
			user.password
		);

		if (result) {
			res.status(200).json(user);
		} else {
			res.status(401).json({ error: "Wrong email or password." });
		}
	} else {
		res.status(404).json({ error: "Account doesn't exist." });
	}
}

async function register(req, res, next) {
	const request = req.body;

	const user = User.query().where("email", request.email);

	if (!user) {
		request.password = await bcrypt.hashSync(request.password, 10);
		const data = await User.query().insert({
			first_name: request.firstName,
			last_name: request.lastName,
			email: request.email,
			password: request.password,
		});

		res.status(200).json(data);
	} else {
		res.status(405).json({ error: "Account already exists." });
	}
}

module.exports = { login, register };
