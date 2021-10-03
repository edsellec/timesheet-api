exports.up = function (knex) {
	return knex.schema.createTable("role_has_permission", (table) => {
		table.increments("id").primary();
		table
			.integer("role_id")
			.unsigned()
			.references("id")
			.inTable("role")
			.onDelete("CASCADE");
		table
			.integer("permission_id")
			.unsigned()
			.references("id")
			.inTable("permission")
			.onDelete("CASCADE");
		table.timestamps(false, true);
	});
};
exports.down = function (knex) {
	return knex.schema.dropTableIfExists("role_has_permission");
};
