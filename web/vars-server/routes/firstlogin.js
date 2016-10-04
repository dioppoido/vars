var express = require('express');
var router = express.Router();
var getAccount = require('../app/js/users/getAccount');
var validator = require('validator'); //validatorモジュール宣言

/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.session.user && req.session.passflag == false){
        res.redirect('/');
    }else{
        if(req.session.firstroute == "/login"){
            res.render('firstlogin.ejs' , {error:''});
        }else{
            res.redirect('/login');
        }
    }
});

router.post('/', function(req, res) {

    /* 長谷川君が行う処理 */


    /* 仮処理 */
    req.session.passflag = false;
    res.redirect('/');


});

module.exports = router;