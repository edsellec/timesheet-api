exports.up = function (knex) {
	return knex.schema.createTable("timesheet", (table) => {
		table.increments("id").primary();
		table
			.integer("user_id")
			.unsigned()
			.references("id")
			.inTable("user")
			.onDelete("CASCADE");
		table
			.integer("activity_id")
			.unsigned()
			.references("id")
			.inTable("activity")
			.onDelete("CASCADE");
		table.string("description").notNullable();
		table.timestamp("started_at").notNullable();
		table.timestamp("ended_at").notNullable();
		table.timestamps(false, true);
	});
};
exports.down = function (knex) {
	return knex.schema.dropTableIfExists("timesheet");
};
