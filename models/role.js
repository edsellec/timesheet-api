const { Model } = require("objection");
const knex = require("./../database.js");

Model.knex(knex);

class Role extends Model {
	static get tableName() {
		return "role";
	}

	static get relationMappings() {
		const User = require("./user");
		const Group = require("./group");

		return {
			user: {
				relation: Model.ManyToManyRelation,
				modelClass: User,
				join: {
					from: "role.id",
					through: {
						from: "role_has_user.role_id",
						to: "role_has_user.user_id",
					},
					to: "user.id",
				},
			},
			group: {
				relation: Model.ManyToManyRelation,
				modelClass: Group,
				join: {
					from: "role.id",
					through: {
						from: "role_has_user.role_id",
						to: "role_has_user.group_id",
					},
					to: "group.id",
				},
			},
		};
	}
}

module.exports = Role;
