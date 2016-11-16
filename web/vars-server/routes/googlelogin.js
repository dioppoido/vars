var express = require('express');
var router = express.Router();
var getAdmin = require('../app/js/users/getAdmin');
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
    var address = req.session.user.address;
    console.log("domain:"+req.session.user.domain);
    console.log("address:"+req.session.user.address);
    //ドメインがst.kobedenshi.ac.jpか確認
    if ( req.session.user.domain =="st.kobedenshi.ac.jp"){ //if文　ユーザテーブル検索 req.session.user.adomin
        console.log(address);
        getAdmin.getAdmin(address).then(function (docs){
            if(address === docs[0].Address){
                console.log("adminフラグ照合成功");
                req.session.user.admin=true;
                console.log(req.session.user.admin);
                res.redirect('/');
            }else{
            console.log("kdアカウントでログイン成功！");
            req.session.user.admin=false;
            res.redirect('/');
            }
        }).catch(function(msg){
            console.log(msg);
        });
    } else {    //違う時はログアウト処理させる
        req.session.destroy();
        console.log('deleted session:kd以外でログインしたので強制ログアウト');
        res.redirect('/');
    }

    //res.redirect('/');//indexへリダイレクトさせる
});

module.exports = router;
