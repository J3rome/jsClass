var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
	res.send("<h1>YoYo</h1>");
});

router.get('/sum', function(req, res, next) {
  res.render('sum', { 
  	title: 'Matin is awesome',
  	whatever: " and Pick a card" 
  });
});

router.post('/sum', function(req, res, next) {
	if(req.body.number1 && req.body.number2){
		var number1 = parseInt(req.body.number1);
		var number2 = parseInt(req.body.number2);
		res.send(200, {
			"status": "success",
			"message":"The sum was completed sucessfully",
			"result" : number1 + number2
		});
	}else{
		res.send("You need number1 and number2 paramaters");
	}
});

module.exports = router;
