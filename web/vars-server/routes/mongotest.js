/**
 * mongotest.js
 * writer:土居幸太郎
 */

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('mongotest');
});

module.exports = router;

