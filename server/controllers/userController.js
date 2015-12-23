var mysql      = require('mysql');
/*var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'test'
});
connection.connect();*/

exports.login = function(req,res,next){
	console.log("connection:",connection);
	var user = { username:req.body.username,password:req.body.password,role:req.body.role};
	
	connection.query('INSERT INTO users SET ?', user, function(err,res){
		if(err) throw err;
		console.log('Last insert ID:', res.insertId);
	});
	//res.send(user);
	//console.log(user);
	//console.log("here its from controller");
}

exports.get = function(req,res,next){
	User.find({}, function (err, docs) {
		if(err)
			console.log(err);
		else
			console.log(docs);
        res.json(docs);
    });
}