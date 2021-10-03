const { Model } = require("objection");
const knex = require("../database.js");

Model.knex(knex);

class Group extends Model {
	static get tableName() {
		return "group";
	}

	static get relationMappings() {
		const User = require("./user");

		return {
			user: {
				relation: Model.ManyToManyRelation,
				modelClass: User,
				join: {
					from: "group.id",
					through: {
						from: "group_has_user.group_id",
						to: "group_has_user.user_id",
					},
					to: "user.id",
				},
			},
		};
	}
}

module.exports = Group;
