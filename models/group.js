const { Model } = require("objection");
const knex = require("./../database.js");

Model.knex(knex);

class Group extends Model {
	static get tableName() {
		return "group";
	}

	static get relationMappings() {
		const User = require("./user");
		const Role = require("./role");

		return {
			user: {
				relation: Model.ManyToManyRelation,
				modelClass: User,
				join: {
					from: "group.id",
					through: {
						from: "role_has_user.group_id",
						to: "role_has_user.user_id",
					},
					to: "user.id",
				},
			},
			role: {
				relation: Model.ManyToManyRelation,
				modelClass: Role,
				join: {
					from: "group.id",
					through: {
						from: "role_has_user.group_id",
						to: "role_has_user.role_id",
					},
					to: "role.id",
				},
			},
		};
	}
}

module.exports = Group;
