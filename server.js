var express=require("express");
var bp=require("body-parser");
var mongo = require("mongojs");

var db = mongo("isgs",["register"]);

var app=express();
	app.use(express.static(__dirname));
	app.use(bp.json());
	
app.get("/",function(req,res){
	res.send();
});

app.post("/",function(req,res){
	console.log(req.body);
 db.register.insert(req.body,function(e,docs){
  console.log(docs);
  res.json(docs);
 });
});
/*
app.get("/alaska_ohio",function(req,res){
 db.alaska_ohio.find(function(e,docs){
  console.log(docs);
  res.json(docs);
 });
});
*/
app.listen(1111);
console.log("server is running on 1111");