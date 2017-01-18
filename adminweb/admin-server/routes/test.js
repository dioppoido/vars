var express = require('express');
var getUsers = require('../app/js/users/getUser');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    getUsers.getUserjson({}).then(function (userdata) {
        res.render('test.ejs',{msg:userdata});
    }).catch(function (msg) {
        res.render('test.ejs',{msg:msg});
    })
});

module.exports = router;
