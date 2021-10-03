const { Model } = require("objection");
const knex = require("../database.js");

Model.knex(knex);

class GroupHasUser extends Model {
	static get tableName() {
		return "group_has_user";
	}

	static get idColumn() {
		return ["user_id", "group_id"];
	}

	static get relationMappings() {
		const User = require("./user");
		const Group = require("./group");

		return {
			user: {
				relation: Model.BelongsToOneRelation,
				modelClass: User,
				join: {
					from: "group_has_user.user_id",
					to: "user.id",
				},
			},

			group: {
				relation: Model.BelongsToOneRelation,
				modelClass: Group,
				join: {
					from: "group_has_user.group_id",
					to: "group.id",
				},
			},
		};
	}
}

module.exports = GroupHasUser;
