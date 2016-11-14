var express = require('express');
var router = express.Router();
var getPassword = require('../app/js/users/getPassword');
var validator = require('validator'); //validatorモジュール宣言


router.get('/', function(req, res) {
  if(req.session.user){
      res.render('password.ejs');
  } else{
      res.redirect('/');
  }

});


router.post('/', function(req, res) {

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
    }
});

module.exports = router;
