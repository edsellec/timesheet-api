const User = require("./../models/user");
const RoleHasUser = require("./../models/roleHasUser");

async function index(req, res, next) {
	const data = await User.query().withGraphFetched("[attendance, group]");

	res.status(200).json(data);
}

async function create(req, res, next) {
	const request = req.body;
	const data = await User.query().insert({
		first_name: request.firstName,
		last_name: request.lastName,
		email: request.email,
	});
	const role = await RoleHasUser.query().insert({
		user_id: data.id,
		role_id: 2,
		group_id: null,
	});

	res.status(201).json(data);
}

async function read(req, res, next) {
	const id = req.params.id;
	const data = await User.query().findById(id);

	res.status(200).json(data);
}

async function update(req, res, next) {
	const request = req.body;
	const id = req.params.id;
	const data = await User.query().findById(id).patch({
		first_name: request.firstName,
		last_name: request.lastName,
		email: request.email,
		password: request.password,
	});

	res.status(200).json(data);
}

async function destroy(req, res, next) {
	const id = req.params.id;
	const data = await User.query().deleteById(id);

	res.status(200).json(data);
}

module.exports = {
	index,
	create,
	read,
	update,
	destroy,
};
