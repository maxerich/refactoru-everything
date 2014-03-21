
/*
 * User Controller
 */

var UserModel = require('../models/usermodel')

var UserController = {

	list: function(req, res){
		var users = UserModel.findAll();

  		res.render('users/list', {users: users});
	},

	detail: function(req, res) {
		res.render()
	},

	create: function(req, res) {},

	update: function(req, res) {},

	delete: function(req, res) {}

};


//expose User to the rest of our application
module.exports = UserController;