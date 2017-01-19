var express = require('express');
var router = express.Router();
var getUser = require("../app/js/users/getUser");

/* GET home page. */
router.get('/', function(req, res, next) {

    if(req.session.admin){
        getUser.getUser().then(function (docs1){
            res.render('adminlist.ejs', {adminuser: docs1});
        });

    }else{
        res.redirect('/adminlogin');
    }

});


module.exports = router;