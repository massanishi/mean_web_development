// app.use wraps the middleare used in Connect
// res.send() is an epxress wrapper that sets the Content-Type header according to the response object type. 
// It can be octet-stream when passing buffer. if it's object or an array, it will be json, and string will be set to text/html

// The default is set here becasue NODE_ENV variable is not properly set often.
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose'),
	express = require('./config/express'),
	passport = require('./config/passport');

var db = mongoose();
var app = express(db);
var passport = passport();

app.listen(3000);
module.exports = app;
console.log('Server running at http://localhost:3000/');