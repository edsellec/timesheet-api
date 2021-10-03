exports.up = function (knex) {
	return knex.schema.createTable("attendance", (table) => {
		table.increments("id").primary();
		table
			.integer("user_id")
			.unsigned()
			.references("id")
			.inTable("user")
			.onDelete("CASCADE");
		table.timestamp("started_at");
		table.timestamp("ended_at");
		table.timestamps(false, true);
	});
};
exports.down = function (knex) {
	return knex.schema.dropTableIfExists("group_has_user");
};
