var express = require('express');
var router = express.Router();
var getPassword = require('../app/js/users/getPassword');
var validator = require('validator'); //validatorモジュール宣言
//accountに遷移する処理のみ
//特に送り付ける値はなし
router.get('/', function(req, res) {
  res.render('account.ejs');
});


router.post('/', function(req, res) {

    var userid = req.body.userid;

    userid = validator.escape(userid); //エスケープ処理

    getPassword.getPassword(userid).then(function(docs){
      console.log("Passwordは"+docs[0].Passwd+"です");
      res.render('account.ejs');
    });

});

module.exports = router;
