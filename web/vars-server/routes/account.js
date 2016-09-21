var express = require('express');
var router = express.Router();
var getPassword = require('../app/js/users/getPassword');
var updatePassword = require('../app/js/users/updatePassword');
var validator = require('validator'); //validatorモジュール宣言
//accountに遷移する処理のみ
//特に送り付ける値はなし
router.get('/', function(req, res) {
  res.render('account.ejs');
});


router.post('/', function(req, res) {

    var msg="";

    var userid = req.session.userid;    //取得
    var oldpassword=req.body.oldpassword;
    var newpassword=req.body.newpassword;


    userid = validator.escape(userid); //エスケープ処理
    oldpassword=validator.escape(oldpassword);
    newpassword=validator.escape(newpassword);

    console.log("userid:"+userid);

    getPassword.getPassword(userid).then(function(docs){    //現在のパスワードの取り出し
        console.log("Passwordは"+docs[0].Passwd+"です");
        if(oldpassword===docs[0].Passwd){
            updatePassword.updatePassword(userid,newpassword);
            msg="パスワードを変更しました。";
        }else{
            msg="現在のパスワードが間違っています";
        }
        res.render('confirmation.ejs',{msg:msg});
    }).catch(function(err){
        console.log(err);
        res.render('account.ejs');
    });
});

module.exports = router;
