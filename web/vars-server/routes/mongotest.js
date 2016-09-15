/**
 * mongotest.js
 * writer:土居幸太郎
 */

var express = require('express');
var router = express.Router();
const model = require('../app/js/test/getSamsusers');

/* GET users listing. */
router.get('/', function(req, res, next) {
    model.getUser().then(function(userdata){
       res.send(userdata); 
    });
});

module.exports = router;

