exports.up = function (knex) {
	return knex.schema.createTable("user", (table) => {
		table.increments("id").primary();
		table.string("first_name").notNullable();
		table.string("last_name").notNullable();
		table.string("email").unique().notNullable();
		table.date("email_verified_at");
		table.string("password").notNullable();
		table.timestamps(false, true);
	});
};
exports.down = function (knex) {
	return knex.schema.dropTableIfExists("user");
};
