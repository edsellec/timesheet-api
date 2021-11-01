const { Model } = require("objection");
const knex = require("./../database.js");

Model.knex(knex);

class RoleHasUser extends Model {
	static get tableName() {
		return "role_has_user";
	}

	static get idColumn() {
		return ["user_id", "role_id", "group_id"];
	}

	static get relationMappings() {
		const User = require("./user");
		const Group = require("./group");
		const Role = require("./role");

		return {
			user: {
				relation: Model.BelongsToOneRelation,
				modelClass: User,
				join: {
					from: "role_has_user.user_id",
					to: "user.id",
				},
			},
			group: {
				relation: Model.BelongsToOneRelation,
				modelClass: Group,
				join: {
					from: "role_has_user.group_id",
					to: "group.id",
				},
			},
			role: {
				relation: Model.BelongsToOneRelation,
				modelClass: Role,
				join: {
					from: "role_has_user.role_id",
					to: "role.id",
				},
			},
		};
	}
}

module.exports = RoleHasUser;
