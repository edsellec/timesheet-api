const { Model } = require("objection");
const knex = require("../config/database.js");

Model.knex(knex);

class Attendance extends Model {
	static get tableName() {
		return "attendance";
	}

	static get relationMappings() {
		const User = require("./user");

		return {
			user: {
				relation: Model.BelongsToOneRelation,
				modelClass: User,
				join: {
					from: "attendance.user_id",
					to: "user.id",
				},
			},
		};
	}
}

module.exports = Attendance;
