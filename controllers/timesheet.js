const Timesheet = require("./../models/timesheet");
const RoleHasUser = require("./../models/roleHasUser");
const User = require("./../models/user");

async function index(req, res, next) {
	const data = await User.query()
		.withGraphFetched("[timesheet.activity, group]")
		.orderBy("id", "asc");

	res.status(200).json(data);
}

async function create(req, res, next) {}

async function read(req, res, next) {
	const id = req.params.id;
	const data = await Timesheet.query()
		.withGraphFetched("[activity]")
		.where("user_id", id)
		.orderBy("id", "asc");

	res.status(200).json(data);
}

async function update(req, res, next) {}

async function destroy(req, res, next) {}

module.exports = {
	index,
	create,
	read,
	update,
	destroy,
};
