exports.seed = function (knex) {
	return knex("attendance")
		.del()
		.then(function () {
			return knex("attendance").insert([
				{
					user_id: 1,
					started_at: knex.fn.now(),
					ended_at: knex.fn.now(),
				},
				{
					user_id: 2,
					started_at: knex.fn.now(),
					ended_at: knex.fn.now(),
				},
			]);
		});
};
