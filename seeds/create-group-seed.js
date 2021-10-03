exports.seed = function (knex) {
	return knex("group")
		.del()
		.then(function () {
			return knex("group").insert([
				{
					code: "TLE",
					description: "TLE major teachers",
				},
				{
					code: "ENGLISH",
					description: "English major teachers",
				},
			]);
		});
};
