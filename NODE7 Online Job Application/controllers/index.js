var jobModel = require("../models/jobsModel.js")

module.exports = {

	submit: function(req,res) {
		res.render('success.jade');
	},

	add: function(req, res) {
		console.log(req.body)
		var formData= req.body
		var job = new jobModel(formData)
		job.save(function(err,docs) {
			res.redirect("/applicants")
		});
	},

	list: function(req, res) {
		jobModel.find({}, function(err,docs) {
			res.render('applicants', {
				jobs: docs
			});
		});
	},

	remove: function(req, res) {
		var jobID = req.params.id
		console.log(jobID)
		jobModel.remove({_id: jobID}, function(err, doc) {
			res.redirect("/applicants");
		})
	}

}







// console.log(req.body)
// 	var formData= req.body
// 	res.redirect('/applicant')