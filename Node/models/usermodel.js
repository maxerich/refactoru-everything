var users = [
	{id:0, name:"bob"},
	{id:1, name:"joe"},
	{id:2, name:"john"}
];


var UserModel = module.exports = {
	findAll: function() {
		return users.slice(0);
	}
};