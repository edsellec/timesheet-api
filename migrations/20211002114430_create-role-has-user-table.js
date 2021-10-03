exports.up = function (knex) {
	return knex.schema.createTable("role_has_user", (table) => {
		table.increments("id").primary();
		table
			.integer("user_id")
			.unsigned()
			.references("id")
			.inTable("user")
			.onDelete("CASCADE");
		table
			.integer("role_id")
			.unsigned()
			.references("id")
			.inTable("role")
			.onDelete("CASCADE");
		table.timestamps(false, true);
	});
};
exports.down = function (knex) {
	return knex.schema.dropTableIfExists("role_has_user");
};
