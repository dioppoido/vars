var express = require('express');
var router = express.Router();
var getPassword = require('../app/js/users/getPassword');
var updatePassword = require('../app/js/users/updatePassword');
var passport = require('passport');
//accountに遷移する処理のみ
//特に送り付ける値はなし
router.get('/', passport.authenticate('google',{ scope: ['openid email profile'] }), function (req, res, next) {
    console.log(req, res, next);
});


// /oauth/callbackにアクセスした時（Twitterログイン後）
router.get('/return',passport.authenticate('google', {failureRedirect: '/login' }), function(req, res) {
    console.log("req.user="+req.user.emails[0].value);
    res.render('googleresult.ejs',{
        username:req.user.displayName,
        email:req.user.emails
    
    }); //indexへリダイレクトさせる
});

module.exports = router;
