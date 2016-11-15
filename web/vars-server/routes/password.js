var express = require('express');
var router = express.Router();
var getPassword = require('../app/js/users/getPassword');
var getEvent = require('../app/js/event/getEvent');
var validator = require('validator'); //validatorモジュール宣言




router.post('/', function(req, res) {
    if(req.session.user){
        var inputPassword=req.body.inputpassword;
        getEvent.getEvent(req.session.user.eventid).then(function (eventdata) {
           if(eventdata[0].Password===inputPassword){
               req.session.user.success=req.session.user.eventid;
               res.redirect(req.session.user.get);
           }else{
               res.render('password.ejs');
           }
        });
    }
    //旧パスワード変更処理
    /*
    if(req.session.user) {

        var msg = "";     //メッセージ
        var url = "/account"; //戻り先のURL

        var userid = req.session.user;    //取得
        var oldpassword = req.body.oldpassword;
        var newpassword = req.body.newpassword;


        oldpassword = validator.escape(oldpassword);  //エスケープ処理
        newpassword = validator.escape(newpassword);


        getPassword.getPassword(userid).then(function (docs) {    //現在のパスワードの取り出し
            if (oldpassword === docs[0].Passwd) {
                updatePassword.updatePassword(userid, newpassword);
                msg = "パスワードを変更しました。";
                res.render('confirmation.ejs', {msg: msg, url: url});
            } else {
                msg = "現在のパスワードが間違っています";
                res.render('confirmation.ejs', {msg: msg, url: url});
            }
        }).catch(function (err) {
            msg = "DB ERROR."
            res.render('confirmation.ejs', {msg: msg, url: url});
        });
    } else{
        res.redirect('/');
    }*/
});

module.exports = router;
