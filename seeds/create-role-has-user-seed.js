exports.seed = function (knex) {
	return knex("role_has_user")
		.del()
		.then(function () {
			return knex("role_has_user").insert([
				{
					user_id: 1,
					role_id: 1,
					group_id: 1,
				},
				{
					user_id: 2,
					role_id: 2,
					group_id: 1,
				},
			]);
		});
};
