const db = require("../database.js");
const bcrypt = require("bcrypt");

const GroupHasUser = require("../models/group-has-user");

async function index(req, res, next) {
	const data = await GroupHasUser.query().withGraphFetched("[user, group]");

	res.status(200).json(data);
}

async function create(req, res, next) {}

async function read(req, res, next) {}

async function update(req, res, next) {}

async function destroy(req, res, next) {}

module.exports = {
	index,
	create,
	read,
	update,
	destroy,
};
