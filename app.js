var express = require('express');
var app 	= express();
var http 	= require('http');
var router 	= express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var port = process.env.PORT || 3000;
var config = require('./server/config');


mongoose.connect(config.database);
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.set('superSecret', config.secret);

app.get('/',function(req,res){
	res.sendfile('./public/index.html');
})
require('./server/route')(app);

var server 	= http.createServer(app).listen(port,function(){
	console.log("Server running on:",server.address().address,":",server.address().port);
});