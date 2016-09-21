var express = require('express');
var router = express.Router();
var getAccount = require('../app/js/users/getAccount');
var validator = require('validator'); //validatorモジュール宣言

/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.session.user){
        res.redirect('/');
    }else{
        res.render('login.ejs' , {error:'', user:''});
    }
});

router.post('/', function(req, res) {

    var userid = req.body.userid;
    var password = req.body.password;

    userid = validator.escape(userid); //エスケープ処理
    password = validator.escape(password); //エスケープ処理
    
    getAccount.getAccount(userid,password).then(function(docs){
        if(docs.length === 0){
            res.render('login.ejs', {error: "ユーザーIDまたはパスワードが違います。", user:userid});
        }else{
            req.session.user = userid;
            res.redirect('/');
        }
    });
    
});

module.exports = router;
