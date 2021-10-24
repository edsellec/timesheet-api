exports.up = function (knex) {
	return knex.schema.createTable("group", (table) => {
		table.increments("id").primary();
		table.string("code").unique().notNullable();
		table.string("description").notNullable();
		table.timestamps(false, true);
	});
};
exports.down = function (knex) {
	return knex.schema.dropTableIfExists("group");
};
