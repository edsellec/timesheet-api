exports.seed = function (knex) {
	return knex("role")
		.del()
		.then(function () {
			return knex("role").insert([
				{
					name: "Admin",
				},
				{
					name: "User",
				},
			]);
		});
};
