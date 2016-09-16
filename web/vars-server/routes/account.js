var express = require('express');
var router = express.Router();

//accountに遷移する処理のみ
//特に送り付ける値はなし
router.get('/', function(req, res) {
  res.render('account.ejs');
});

module.exports = router;
