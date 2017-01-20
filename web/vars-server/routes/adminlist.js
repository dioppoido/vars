var express = require('express');
var router = express.Router();
var getExternal = require("../app/js/users/getExternal");

/* GET home page. */
router.get('/', function(req, res, next) {

    if(req.session.admin){
        getExternal.getExternal({Admin_flag: true},{sort:{Address:1}}).then(function (docs1){
            getExternal.getExternal({Admin_flag: false},{sort:{Address:1}}).then(function (docs2) {
                res.render('adminlist.ejs', {adminuser: docs1, externaluser: docs2});
            });

        });
    }else{
        res.redirect('/adminlogin');
    }

});


module.exports = router;
