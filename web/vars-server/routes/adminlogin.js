var express = require('express');
var router = express.Router();
var getAccount = require("../app/js/users/getAccount");

/* GET home page. */
router.get('/', function(req, res, next) {

    if(req.session.admin){
        res.redirect('/admin');
    }else{
        res.render('adminlogin.ejs', {error: ""});
    }
});

router.post('/', function(req, res) {

    var userid = req.body.userid;
    var password = req.body.password;

    if(req.session.admin){
        res.redirect('/admin');
    }else{
        getAccount.getAccount(userid,password).then(function (docs1){
            if(docs1){
                if( docs1[0].Admin_flag === true){
                    req.session.admin = docs1[0].Address;
                    res.redirect('/admin');
                }else{
                    res.render('adminlogin.ejs', {error: "このアカウントには権限がありません。"});
                }
            }else{
                res.render('adminlogin.ejs', {error: "アドレスまたはパスワードが違います。"});
            }
        });
    }

});


module.exports = router;
