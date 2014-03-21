var island = function(name, location, hotness) {
	this.name = name;
	this.location = location;
	this.hotness = hotness;
}

var island1 = new island("guam", "pacific ocean", 8)
var island2 = new island("madagascar", "atlantic ocean", 9)
var island3 = new island("new zealand", "pacific ocean", 5)

var islandGroup = [island1, island2, island3]


module.exports = {

	getDemIslands: function() {
		return islandGroup.slice();
	},

	getAIsland: function() {
		
	}

}