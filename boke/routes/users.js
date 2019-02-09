var express = require('express');
var router = express.Router();

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/regist",(req,res)=>{
	var data = req.body;
	var name = data.username;
	console.log(name)
	MongoClient.connect(url,(err,db)=>{
		if(err) throw err
		var dbase = db.db("mydb");
		var cols = dbase.collection("users");
		cols.find({username:name}).toArray((err,result)=>{
			//console.log(result)
			if(result.length!=0){
				res.send("0")
			}else{
				cols.insertOne(data,(err,result)=>{
					res.send("1")
				})
			}
			db.close();
		})		
	})
});

router.post("/login",(req,res)=>{
	var data = req.body;	
	MongoClient.connect(url,(err,db)=>{
		if(err) throw err
		var dbase = db.db("mydb");
		var cols = dbase.collection("users");
		cols.find(data).toArray((err,result)=>{
			if(result.length!=0){
				req.session.username = data.username;
				req.session.isLogin = true;
				res.send("1")
			}else{
				res.send("0")
			}
			db.close();
		})		
	})
});
module.exports = router;
