var express = require('express');
var multer  = require('multer')
var router = express.Router();
var rename = require('../app/js/image/rename');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('multer.ejs');
});
var upload = multer({ dest: 'images/' });
router.post('/', upload.single('datafile'), function (req, res) {
  var extension = req.file.originalname;   //拡張子を取得したいデータを入れる
  var imageExtension =rename.rename(extension);　
  require('fs').rename(req.file.path, 'images/' + req.file.filename + imageExtension); //ここでファイル名を変更
    console.log('ポスト');
  console.log(req.file);
  console.log('テキスト');
  console.log(req.body.test);
});




module.exports = router;
