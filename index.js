const express = require("express");
const knex = require("./database.js");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3001;

const routes = require("./routes/index");

app.use(cors());
app.use(express.json());
app.use("/api", routes);

app.listen(port, () => {
	console.log("Server running on port " + port);
});
