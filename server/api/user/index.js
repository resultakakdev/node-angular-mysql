var express = require('express');
var router 	= express.Router();
var controller = require('./user.controller')

/*router.get('/',function(req,res){
	res.json("first user route is ok");
})*/

router.post('/',controller.login)

module.exports = router;