var contestModel = require("../models/contest.js")



module.exports = {

	home: function(req, res) {
		res.render("index.jade")
	}
}