var express = require('express');
var router = express.Router();
var getAccount = require('../app/js/users/getAccount');
var validator = require('validator'); //validatorモジュール宣言

/* GET home page. */
router.get('/', function(req, res, next) {
    
    if(req.session.user){
        res.redirect('/');
    }else{
        res.render('login.ejs');
    }
});


module.exports = router;
