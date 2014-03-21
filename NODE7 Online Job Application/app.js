
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var indexController = require('./controllers/index.js')
var mongoose = require('mongoose') 
var app = express();

// all environments
app.set('port', process.env.PORT || 3001);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


// app.configure(function() {
mongoose.connect('mongodb://localhost/jobapps');
// });


//renders the index page
app.get('/', function(req, res){
	res.render('index')
});

// displays a list of applicants
app.get('/applicants', indexController.list)


// creates and applicant
app.post('/applicant', indexController.add)
	// Here is where you need to get the data
	// from the post body and store it

app.get("/applicants/remove/:id", indexController.remove)

app.get('/applicant', indexController.submit)


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});



