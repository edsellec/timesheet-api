const Attendance = require("./../models/attendance");
const moment = require("moment");

async function index(req, res, next) {
	const data = await Attendance.query().orderBy("id", "desc");

	res.status(200).json(data);
}

async function create(req, res, next) {
	const request = req.body;
	const data = await Attendance.query().insert({
		user_id: request.user_id,
		started_at: new Date().toISOString(),
		ended_at: null,
	});

	res.status(201).json(data);
}

async function read(req, res, next) {
	const id = req.params.id;
	const data = await Attendance.query()
		.orderBy("id", "desc")
		.where(
			"started_at",
			">=",
			moment(new Date())
				.set({
					hour: process.env.ATTENDANCE_TIME_IN_HOUR,
					minute: process.env.ATTENDANCE_TIME_IN_MINUTE,
					second: process.env.ATTENDANCE_TIME_IN_SECOND,
				})
				.format("YYYY-MM-DD HH:mm:ss")
		)
		.where(
			"started_at",
			"<",
			moment(new Date())
				.set({
					hour: process.env.ATTENDANCE_TIME_OUT_HOUR,
					minute: process.env.ATTENDANCE_TIME_OUT_MINUTE,
					second: process.env.ATTENDANCE_TIME_OUT_SECOND,
				})
				.format("YYYY-MM-DD HH:mm:ss")
		)
		.findOne({
			user_id: id,
		});

	res.status(200).json(data);
}

async function update(req, res, next) {
	const id = req.params.id;
	const request = req.body;
	const data = await Attendance.query()
		.where("user_id", id)
		.findById(request.id)
		.patch({
			ended_at: new Date().toISOString(),
		});

	res.status(200).json(data);
}

async function destroy(req, res, next) {}

module.exports = {
	index,
	create,
	read,
	update,
	destroy,
};
