var express = require('express');
var router = express.Router();
var getTeam = require('../app/js/team/getTeam');
var validator = require('validator'); //validatorモジュール宣言
//
router.get("/",function(req, res) {
  if(req.session.user){
    getTeam.getTeam("1");  //Eventidよりチームの取り出し
    res.render('getTeam.ejs');
  } else{
      res.redirect('/');
  }
});

router.post('/', function(req, res) {

});

module.exports = router;
