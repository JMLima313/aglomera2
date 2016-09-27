var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hola node', saludo: 'manuel' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Hola node', saludo: 'manuel' });
});

router.get('/news', function(req, res, next) {
  res.render('news', { title: 'Hola node', saludo: 'manuel' });
});


module.exports = router;
