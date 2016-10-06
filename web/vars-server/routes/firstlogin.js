var express = require('express');
var router = express.Router();
var getAccount = require('../app/js/users/getAccount');
var getPassword = require('../app/js/users/getPassword');
var firstloginUpdate = require('../app/js/users/firstloginUpdate');
var validator = require('validator'); //validatorモジュール宣言

/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.session.user && req.session.passflag == false){
        res.redirect('/');
    }else{
        if( req.session.firstroute == "/login"){
            res.render('firstlogin.ejs' , {error:''});
        }else{
            res.redirect('/login');
        }

    }
});

router.post('/', function(req, res) {

    if(req.session.user) {

        var userid = req.session.user;
        var oldpassword = req.body.oldpassword;      //firstloginのフォームで入力した文字列を受け取り
        var newpassword = req.body.newpassword;  //新しいパスワードのほう

        var msg = "";     //メッセージ
        var url = "/firstlogin"; //戻り先のURL
        console.log("firstloginAAA:"+userid);

        oldpassword = validator.escape(oldpassword);  //エスケープ処理
        newpassword = validator.escape(newpassword);

        getPassword.getPassword(userid).then(function (docs){    //現在のパスワードの取り出し
            if (oldpassword === docs[0].Passwd) {
                firstloginUpdate.firstloginUpdate(userid, newpassword);
                getAccount.getAccount(userid,newpassword).then(function(docs){
                            req.session.passflag = docs[0].Pass_flag;
                            req.session.userid = docs[0].Userid;

                            msg = "初回パスワード変更を完了しました。";
                            url ="/";
                            res.render('confirmation.ejs', {msg: msg, url: url});
                });
            } else {
                msg = "パスワードが間違っています";
                res.render('confirmation.ejs', {msg: msg, url: url});
            }
        }).catch(function (err) {
                msg = "DB ERROR."
                res.render('confirmation.ejs', {msg: msg, url: url});
            });
    } else{
            res.redirect('/');
    }
    });


    //req.session.passflag = false;
    //res.redirect('/');

module.exports = router;
