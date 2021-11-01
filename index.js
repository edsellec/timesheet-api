const express = require("express");
const knex = require("./database.js");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3001;

const { checkIfAuthenticated } = require("./middleware/auth.js");

const AuthRoutes = require("./routes/auth");
const UserRoutes = require("./routes/user");
const GroupRoutes = require("./routes/group");
const ActivityRoutes = require("./routes/activity");
const TimesheetRoutes = require("./routes/timesheet");
const AttendanceRoutes = require("./routes/attendance");

app.use(cors());
app.use(express.json());

app.use("/api", AuthRoutes);
app.use("/api/users", checkIfAuthenticated, UserRoutes);
app.use("/api/groups", checkIfAuthenticated, GroupRoutes);
app.use("/api/activities", checkIfAuthenticated, ActivityRoutes);
app.use("/api/timesheets", checkIfAuthenticated, TimesheetRoutes);
app.use("/api/attendance", checkIfAuthenticated, AttendanceRoutes);

app.listen(port, () => {
	console.log("Server running on port " + port);
});
