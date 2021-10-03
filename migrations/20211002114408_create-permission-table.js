exports.up = function (knex) {
	return knex.schema.createTable("permission", (table) => {
		table.increments("id").primary();
		table.string("name").notNullable();
		table.timestamps(false, true);
	});
};
exports.down = function (knex) {
	return knex.schema.dropTableIfExists("permission");
};
