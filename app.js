var express = require('express');
var app 	= express();
var http 	= require('http');
var router 	= express.Router();
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(expressSession({secret:'somesecrettokenhere'}));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

var user = require('./server/controllers/userController');

app.get('/',function(req,res){
	console.log("req.session:",req.session);
	res.sendfile('./public/index.html');
})

app.post('/api/user',user.login);
//require('./route')(app);


// router.get('/',function(req,res){
// 	res.json("first route is ok");
// })
var server 	= http.createServer(app).listen(3000,function(){
	// console.log("server:",server.address().address);
	// console.log("server:",server.address().port);
	console.log("Server running on:",server.address().address,":",server.address().port);
});