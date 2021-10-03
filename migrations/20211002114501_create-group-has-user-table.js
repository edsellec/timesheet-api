exports.up = function (knex) {
	return knex.schema.createTable("group_has_user", (table) => {
		table.increments("id").primary();
		table
			.integer("user_id")
			.unsigned()
			.references("id")
			.inTable("user")
			.onDelete("CASCADE");
		table
			.integer("group_id")
			.unsigned()
			.references("id")
			.inTable("group")
			.onDelete("CASCADE");
		table.timestamps(false, true);
	});
};
exports.down = function (knex) {
	return knex.schema.dropTableIfExists("group_has_user");
};
