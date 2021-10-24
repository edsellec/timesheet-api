const express = require("express");
const knex = require("./database.js");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3001;

const AuthRoutes = require("./routes/auth");
const UserRoutes = require("./routes/user");
const GroupRoutes = require("./routes/group");
const ActivityRoutes = require("./routes/activity");
const TimesheetRoutes = require("./routes/timesheet");

app.use(cors());
app.use(express.json());

app.use("/api", AuthRoutes);
app.use("/api/users", UserRoutes);
app.use("/api/groups", GroupRoutes);
app.use("/api/activities", ActivityRoutes);
app.use("/api/timesheets", TimesheetRoutes);

app.listen(port, () => {
	console.log("Server running on port " + port);
});
