var express = require('express');
var router = express.Router();
var validator = require('validator'); //validatorモジュール宣言
//特に送り付ける値はなし
router.get('/', function(req, res) {
    if(req.session.user && req.session.passflag == false){
        res.render('eventcreate.ejs');
    } else{
        res.redirect('/');
    }

});


router.post('/', function(req, res) {

});

module.exports = router;