exports.seed = function (knex) {
	return knex("activity")
		.del()
		.then(function () {
			return knex("activity").insert([
				{
					code: "TEACH",
					description: "Teaching related activities",
				},
				{
					code: "MEET",
					description: "Meeting related activities",
				},
			]);
		});
};
