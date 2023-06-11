var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/x', function(req, res, next) {
  // res.writeHead(200, {
  //   'Content-Type': 'text/plain'
  // });
  res.send('<h2>index</h2>xxxindex');
});

module.exports = router;
