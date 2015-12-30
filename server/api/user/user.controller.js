var User = require('./user.model');
var jwt  = require("jsonwebtoken");
var config  = require("../../config");

exports.login = function(req,res,next){
	var data = {username:req.body.username,password:req.body.password};
	User.findOne({username: data.username}, function(err, user) {
	    if (err) throw err;
	    
        
	    if (user===null){
	    	var newUser = new User({
			    username: data.username,
			    password: data.password
			});
			newUser.save(function(err,user){
				if (err) throw err
				var token = jwt.sign(user,'thespecialone', {
		        	expiresIn: 10 
		        });
				user.token=token;
				user.save(function(err,user){
					res.json({user:user,token:user.token})		
				});
				
			})
	    }else{
	    	var token = jwt.sign(user,'thespecialone', {
	        	expiresIn: 10 
	        });
	    	user.comparePassword(data.password, function(err,isMatch) {
		        if (err) throw err;
		        if(isMatch)
		        	res.json({user:user,token:token})
		    });
	    }
	});
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