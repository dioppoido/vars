var express = require('express');
var router = express.Router();
var validator = require('validator'); //validatorモジュール宣言

//accountに遷移する処理のみ
//特に送り付ける値はなし
router.get('/', function(req, res) {
  res.render('confirmation.ejs');
});

module.exports = router;
