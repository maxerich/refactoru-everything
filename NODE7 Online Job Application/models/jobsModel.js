var mongoose = require("mongoose")

var jobSchema = new mongoose.Schema({
	name: String,
	bio: String,
	skills: String,
	years: Number,
	why: String
});

var JobModel = module.exports = mongoose.model("job", jobSchema);