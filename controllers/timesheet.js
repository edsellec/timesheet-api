const Timesheet = require("./../models/timesheet");
const User = require("./../models/user");
const moment = require("moment");

async function index(req, res, next) {
	const data = await User.query()
		.withGraphFetched("[timesheet.activity, group]")
		.orderBy("id", "asc");

	res.status(200).json(data);
}

async function create(req, res, next) {
	const request = req.body;
	const data = await Timesheet.query().insert({
		user_id: req.authUser.id,
		activity_id: parseInt(request.activity_id),
		description: request.description,
		hours_worked:
			("00" + request.hours.toString()).substring(
				request.hours.toString().length
			) +
			":" +
			("00" + request.minutes.toString()).substring(
				request.minutes.toString().length
			),
	});

	res.status(201).json(data);
}

async function read(req, res, next) {
	const id = req.params.id;
	const { before, after } = req.query;

	const data = await Timesheet.query()
		.withGraphFetched("[activity]")
		.where("user_id", id)
		.where(
			"created_at",
			">=",
			moment(before)
				.set({
					hour: 0,
					minute: 0,
					second: 0,
				})
				.format("YYYY-MM-DD HH:mm:ss")
		)
		.where(
			"created_at",
			"<",
			moment(after)
				.set({
					hour: 23,
					minute: 59,
					second: 59,
				})
				.format("YYYY-MM-DD HH:mm:ss")
		)
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
