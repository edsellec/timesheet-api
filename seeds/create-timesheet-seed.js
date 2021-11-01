exports.seed = function (knex) {
	return knex("timesheet")
		.del()
		.then(function () {
			return knex("timesheet").insert([
				{
					user_id: 1,
					activity_id: 2,
					description: "Meet with students",
					hours_worked: 8,
				},
				{
					user_id: 2,
					activity_id: 2,
					description: "Meet with students",
					hours_worked: 8,
				},
			]);
		});
};
