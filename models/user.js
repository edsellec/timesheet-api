const { Model } = require("objection");
const knex = require("./../database.js");

Model.knex(knex);

class User extends Model {
	static get tableName() {
		return "user";
	}

	static get relationMappings() {
		const Group = require("./group");
		const Role = require("./role");
		const Attendance = require("./attendance");
		const Timesheet = require("./timesheet");

		return {
			group: {
				relation: Model.ManyToManyRelation,
				modelClass: Group,
				join: {
					from: "user.id",
					through: {
						from: "role_has_user.user_id",
						to: "role_has_user.group_id",
					},
					to: "group.id",
				},
			},
			role: {
				relation: Model.ManyToManyRelation,
				modelClass: Role,
				join: {
					from: "user.id",
					through: {
						from: "role_has_user.user_id",
						to: "role_has_user.role_id",
					},
					to: "role.id",
				},
			},
			attendance: {
				relation: Model.HasManyRelation,
				modelClass: Attendance,
				join: {
					from: "user.id",
					to: "attendance.user_id",
				},
			},
			timesheet: {
				relation: Model.HasManyRelation,
				modelClass: Timesheet,
				join: {
					from: "user.id",
					to: "timesheet.user_id",
				},
			},
		};
	}
}

module.exports = User;
