const { Model } = require("objection");
const knex = require("../config/database.js");

Model.knex(knex);

class Timesheet extends Model {
	static get tableName() {
		return "timesheet";
	}

	static get relationMappings() {
		const User = require("./user");
		const Activity = require("./activity");

		return {
			user: {
				relation: Model.BelongsToOneRelation,
				modelClass: User,
				join: {
					from: "timesheet.user_id",
					to: "user.id",
				},
			},
			activity: {
				relation: Model.BelongsToOneRelation,
				modelClass: Activity,
				join: {
					from: "timesheet.activity_id",
					to: "activity.id",
				},
			},
		};
	}
}

module.exports = Timesheet;
