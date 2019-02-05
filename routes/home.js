var express = require('express');
var router = express.Router();
var fs = require('fs');
var json = JSON.parse(fs.readFileSync('./public/data/birds.json').toString());
console.log(json.birds[1].name);

/* Routes */
router.get('/', function(req, res, next) {
  res.render('home', {title: "Home"});
});
router.get('/birds', function(req, res, next) {
  res.render('birds', {title: "Birds", json});
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
