var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    if(req.session.user){
      res.render('teamtop.ejs');
    }else{
        res.render('/login');
    }
});


module.exports = router;
