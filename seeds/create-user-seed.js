const bcrypt = require("bcrypt");

exports.seed = function (knex) {
	const hashed_password = bcrypt.hashSync(
		process.env.SEEDER_USER_PASSWORD,
		10
	);

	return knex("user")
		.del()
		.then(function () {
			return knex("user").insert([
				{
					first_name: "John",
					last_name: "Doe",
					email: "john.doe@sample.com",
					password: hashed_password,
				},
				{
					first_name: "Sample",
					last_name: "User",
					email: "user@sample.com",
					password: hashed_password,
				},
			]);
		});
};
