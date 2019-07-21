var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Tuto = require('../models/tuto.js');

/* GET ALL BOOKS */
router.get('/', function(req, res, next) {
Tuto.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  }).limit(2);
});


module.exports = router;
