var express = require('express');
var router = express.Router();
var fs = require('fs');
var birdData = JSON.parse(fs.readFileSync('./public/data/birds.json').toString());
var products = JSON.parse(fs.readFileSync('./public/data/products.json').toString());
var services = JSON.parse(fs.readFileSync('./public/data/services.json').toString());
console.log(birdData.name);

/* Routes */
router.get('/', function(req, res, next) {
  res.render('home', {title: "Home"});
});
router.get('/birds', function(req, res, next) {
  res.render('birds', {title: "Birds", birdData});
});
router.get('/services', function(req, res, next) {
  res.render('services', {title: "Services", services});
});
router.get('/products', function(req, res, next) {
  res.render('products', {title: "Products", products});
});
router.get('/contact-us', function(req, res, next) {
  res.render('contact', {title: "Contact Us"});
});

module.exports = router;
