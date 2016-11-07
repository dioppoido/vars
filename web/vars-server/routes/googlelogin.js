var express = require('express');
var router = express.Router();
var getPassword = require('../app/js/users/getPassword');
var updatePassword = require('../app/js/users/updatePassword');
var passport = require('passport');

//ログインチェック
const loginCheck = function(req, res, next) {
    if(!(req.session.user)){
        next();
    }else{
        console.log('index='+req.session.user);
        res.redirect('/');
    }
};

//accountに遷移する処理のみ
//特に送り付ける値はなし
router.get('/', loginCheck, passport.authenticate('google',{ scope: ['openid email profile'] }), function (req, res, next) {
});


// /google/returnにアクセスした時（Googleログイン後）
router.get('/return',passport.authenticate('google', {failureRedirect: '/login' }), function(req, res) {
    req.session.user=req.user;
    req.session.user.domain=(req.session.user.emails[0].value).substr((req.session.user.emails[0].value).lastIndexOf("@")+1);
    req.session.user.address=req.session.user.emails[0].value;
    console.log("domain:"+req.session.user.domain);
    res.redirect('/');//indexへリダイレクトさせる
});

module.exports = router;
