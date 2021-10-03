exports.seed = function (knex) {
	return knex("timesheet")
		.del()
		.then(function () {
			return knex("timesheet").insert([
				{
					user_id: 1,
					activity_id: 1,
					description: "Meet with students",
					started_at: knex.fn.now(),
					ended_at: knex.fn.now(),
				},
				{
					user_id: 2,
					activity_id: 1,
					description: "Meet with students",
					started_at: knex.fn.now(),
					ended_at: knex.fn.now(),
				},
			]);
		});
};
