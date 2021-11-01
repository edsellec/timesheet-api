const { Model } = require("objection");
const knex = require("./../database.js");

Model.knex(knex);

class Activity extends Model {
	static get tableName() {
		return "activity";
	}

	static get relationMappings() {
		const Timesheet = require("./timesheet");

		return {
			timesheet: {
				relation: Model.HasManyRelation,
				modelClass: Timesheet,
				join: {
					from: "activity.id",
					to: "timesheet.activity_id",
				},
			},
		};
	}
}

module.exports = Activity;
