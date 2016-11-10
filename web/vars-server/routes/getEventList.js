var express = require('express');
var router = express.Router();
var validator = require('validator'); //validatorモジュール宣言
var getField = require("../app/js/field/getField");
var getEventList = require("../app/js/event/getEventList.js");
//特に送り付ける値はなし
router.get('/', function(req, res) {
    if(req.session.user){
        getField.getField().then(function (docs) {    //分野取得
            getEventList.getEventList(req.query.fieldid).then(function (docs1){
            res.render('getEventList.ejs',{field:docs,eventlist:docs1});
          });
        });
    } else{
        res.redirect('/');
    }

});


router.post('/', function(req, res) {

});

module.exports = router;
