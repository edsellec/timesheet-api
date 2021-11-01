exports.seed = function (knex) {
	return knex("user")
		.del()
		.then(function () {
			return knex("user").insert([
				{
					first_name: "Edselle",
					last_name: "Cadenas",
					email: "edsellec@gmail.com",
				},
				{
					first_name: "Edwin",
					last_name: "Caldwell",
					email: "iksellebusiness@gmail.com",
				},
			]);
		});
};
