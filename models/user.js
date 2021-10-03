const { Model } = require("objection");
const knex = require("./../database.js");

Model.knex(knex);

class User extends Model {
	static get tableName() {
		return "user";
	}

	static get relationMappings() {
		const Attendance = require("./attendance");
		const Group = require("./group");

		return {
			group: {
				relation: Model.ManyToManyRelation,
				modelClass: Group,
				join: {
					from: "user.id",
					through: {
						from: "group_has_user.user_id",
						to: "group_has_user.group_id",
					},
					to: "group.id",
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
		};
	}
}

module.exports = User;
