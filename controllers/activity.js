const Activity = require("./../models/activity");

async function index(req, res, next) {
	const data = await Activity.query().orderBy("id", "asc");

	res.status(200).json(data);
}

async function create(req, res, next) {
	const request = req.body;
	const data = await Activity.query().insert({
		code: request.code,
		description: request.description,
	});

	res.status(201).json(data);
}

async function read(req, res, next) {}

async function update(req, res, next) {
	const id = req.params.id;
	const request = req.body;
	const data = await Activity.query().findById(id).patch({
		description: request.description,
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
