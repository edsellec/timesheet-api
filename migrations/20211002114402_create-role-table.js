exports.up = function (knex) {
	return knex.schema.createTable("role", (table) => {
		table.increments("id").primary();
		table.string("name").notNullable();
		table.timestamps(false, true);
	});
};
exports.down = function (knex) {
	return knex.schema.dropTableIfExists("role");
};
