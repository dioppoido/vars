var express = require('express');
var router = express.Router();

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

    console.log("UserID : " + userid);
    console.log("PassWord : " + password);
    req.session.user = userid;
    req.session.pass = password;
    res.redirect('/');

});

module.exports = router;