var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    req.session.destroy();
    console.log('deleted session');
    res.redirect('/');
});

module.exports = router;