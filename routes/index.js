var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', null);
});

router.get('/lang/:language', function (req, res) {
  if (req.params.language === 'en') {
    res.render('english', { title: 'English page'});
  } else if (req.params.language === 'de') {
    res.render('german', { title: 'Deutsche Seite'});
  } else if (req.params.language === 'es') {
    res.render('spain', { title: 'Página en español'});
  } else {
    res.render('korean', { title: '한국어 페이지'});
  }
});
module.exports = router;
