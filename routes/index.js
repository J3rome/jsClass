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
	if(req.query.number1 && req.query.number2){
		var number1 = req.query.number1;
		var number2 = req.query.number2;
		res.send(200, number1+number2);
	}else{
		res.send("You need number1 and number2 paramaters");
	}
});

module.exports = router;
