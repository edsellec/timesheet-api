const moment = require("moment");

function checkIfPermitted(...permittedRoles) {
	return (req, res, next) => {
		if (req.authRole && permittedRoles.includes(req.authRole.name)) {
			next();
		} else {
			console.log(
				"You are not permitted to make this request (Time: " +
					moment(new Date()).format("MMM D YYYY, h:mm:ss a") +
					")"
			);
			res.status(403).json({
				message:
					"You are not permitted to make this request (Time: " +
					moment(new Date()).format("MMM D YYYY, h:mm:ss a") +
					")",
			});
		}
	};
}

module.exports = { checkIfPermitted };
