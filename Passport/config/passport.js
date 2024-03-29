var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var UserModel = require('../models/userModel');

passport.serializeUser(function(user, done) {
	done(null, user._id);
});

passport.deserializeUser(function(userid, done) {
	UserModel.findOne({_id: userid}, function(err, user) {
		done(err, user);
	});
});

var facebookStrategy = new FacebookStrategy({
	clientID: '663201540407757',
	clientSecret: 'be64115f93b30ed22ab8d7fa53e81752',
	callbackURL: 'http://localhost:3000/facebook/callback'
}, function(accessToken, refreshToken, profile, done) {
	console.log(accessToken, refreshToken, profile);

	UserModel.findOne({userid: profile.id}, function(err, user) {
		if(user) {
			return done(err, user);
		}

		var newUser = new UserModel({
			userid: profile.id,
			username: profile.username,
			profile: profile
		});
		newUser.save(function(err, doc) {
			return done(err, doc)
		});
	});

});
passport.use(facebookStrategy);