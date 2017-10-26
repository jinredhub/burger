var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req,res){
	burger.all(function(data){
		var handlebObj = {
			burgers : data
		};
		// console.log(handlebObj);
		res.render("index", handlebObj);
	});
});

router.post("/api/burgers", function(req,res){
	burger.create(req.body.burger_name, function(){
		// console.log("added a burger: ", req.body.burger_name);
		// test comment
		res.status(200).end();
	});
});

router.put("/api/:id", function(req,res){
	burger.update(req.params.id, function(){
		// console.log("devoured a burger");
		res.status(200).end();
	});
});

module.exports = router;