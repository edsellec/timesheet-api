exports.seed = function (knex) {
	return knex("permission")
		.del()
		.then(function () {
			return knex("permission").insert([
				{
					name: "Delete",
				},
				{
					name: "Update",
				},
				{
					name: "Create",
				},
				{
					name: "Read",
				},
			]);
		});
};
