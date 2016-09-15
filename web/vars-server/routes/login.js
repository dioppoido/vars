var express = require('express');
var router = express.Router();
var getAccount = require('../app/js/users/getAccount');

/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.session.user){
        res.redirect('/');
    }else{
        res.render('login.ejs');
    }
});

router.post('/', function(req, res) {
    
    const userid = req.body.userid;
    const password = req.body.password;
    getAccount.getAccount(userid,password).then(function (docs) {
        console.log("DB側ID : " + docs[0].Userid);
        console.log("DB側PASS : " + docs[0].Passwd);
    });
    req.session.user = userid;
    req.session.pass = password;
    res.redirect('/');

});

module.exports = router;