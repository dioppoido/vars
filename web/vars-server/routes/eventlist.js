var express = require('express');
var router = express.Router();
var validator = require('validator'); //validatorモジュール宣言
var getField = require("../app/js/field/getField");
//特に送り付ける値はなし
router.get('/', function(req, res) {
    if(req.session.user){
        getField.getField().then(function (docs) {    //分野取得
            res.render('eventlist.ejs',{field:docs});
        });
    } else{
        res.redirect('/');
    }

});


router.post('/', function(req, res) {
    
});

module.exports = router;