require("dotenv").config();

module.exports = {
	development: {
		client: "pg",
		connection: {
			host: process.env.DATABASE_HOST,
			port: process.env.DATABASE_PORT,
			user: process.env.DATABASE_USERNAME,
			password: process.env.DATABASE_PASSWORD,
			database: process.env.DATABASE_NAME,
		},
		migrations: {
			directory: "./migrations",
		},
		seeds: { directory: "./seeds" },
	},

	staging: {
		client: "pg",
		connection: {
			host: process.env.DATABASE_HOST,
			port: process.env.DATABASE_PORT,
			user: process.env.DATABASE_USERNAME,
			password: process.env.DATABASE_PASSWORD,
			database: process.env.DATABASE_NAME,
		},
		migrations: {
			directory: "./migrations",
		},
		seeds: { directory: "./seeds" },
	},

	production: {
		client: "pg",
		connection: {
			host: process.env.DATABASE_HOST,
			port: process.env.DATABASE_PORT,
			user: process.env.DATABASE_USERNAME,
			password: process.env.DATABASE_PASSWORD,
			database: process.env.DATABASE_NAME,
		},
		migrations: {
			directory: "./migrations",
		},
		seeds: { directory: "./seeds" },
	},
};
