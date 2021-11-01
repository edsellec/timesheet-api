function checkIfPermitted(...permittedRoles) {
	return (req, res, next) => {
		if (req.authRole && permittedRoles.includes(req.authRole.name)) {
			next();
		} else {
			res.status(403).json({ message: "Forbidden" });
		}
	};
}

module.exports = { checkIfPermitted };
