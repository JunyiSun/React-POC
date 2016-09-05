var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render("index",{ title : "ReactEMT" });
});

router.get('/init', function(req,res,next){
	var noteModel=global.dbHandle.getModel("Task");
	noteModel.find({},function(err,notes){
		if(err){
			return next(err);
		}else{
			res.json(notes);
		}
	})
});

router.post('/addNote', function(req,res,next){
	var newNote=req.body;
	var noteModel=global.dbHandle.getModel("Task");
	noteModel.create(newNote,function(err){
		if(err){
			return next(err);
		}else{
			console.log("Successfully write into database!!!");
			noteModel.find({},function(err,notes){
				if(err){
					console.log("error adding!!!");
				}else{
					res.json(notes);
				}
			});
		}
	});
});

 router.post('/deleteNote', function(req,res,next){
 	var  delete_date=req.body.date;
 	var noteModel=global.dbHandle.getModel("Task");
 	noteModel.remove({date : delete_date},function(err){
 		if(err){
 			return next(err);
 		}else{
 			console.log("Successfully delete from database!!!");
 			noteModel.find({},function(err,notes){
 				if(err){
 					console.log("error deleting");
 				}else{
 					res.json(notes);
 				}
 			});
 		}
 	});
 });
module.exports = router;
