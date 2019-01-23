var express = require('express');
var router = express.Router();

/* Routes */
router.get('/', function(req, res, next) {
  res.render('home', {title: "Home"});
});
router.get('/birds', function(req, res, next) {
  res.render('birds', {title: "Birds"});
});
router.get('/services', function(req, res, next) {
  res.render('services', {title: "Services"});
});
router.get('/products', function(req, res, next) {
  res.render('products', {title: "Products"});
});
router.get('/contact-us', function(req, res, next) {
  res.render('contact', {title: "Contact Us"});
});

module.exports = router;
