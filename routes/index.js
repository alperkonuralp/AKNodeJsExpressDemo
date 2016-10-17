var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("Cookies: ", req.cookies)
    res.render('index', { title: 'Ana Sayfa', activePage: "home" });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
    res.render('about', { title: 'Hakkımızda', activePage: "about" });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Bize Ulaşın', activePage: "contact" });
});


/* POST contact page. */
router.post('/contact', function(req, res, next) {
    res.render('contact', { title: 'Bize Ulaşın', activePage: "contact" });
});

module.exports = router;