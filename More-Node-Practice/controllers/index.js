var islandModel = require('../models/islands.js')

module.exports = {

	home: function(req, res) {
		res.render("index.jade", {
			islands: islandModel.getDemIslands()
		});
	},

	other: function(req, res) {
		res.render("other.jade", {
			islands: islandModel.getAIsland()
		})
	}



}