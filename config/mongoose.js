var config = require('./config'),
    mongoose = require('mongoose');


module.exports = function(){
	var db = mongoose.connect(config.db, function(err){
		if(!err) console.log('db connected');
	});

	require('../app/models/user.server.model');
	require('../app/models/article.server.model');

	return db;
}