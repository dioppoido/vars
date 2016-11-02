var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  if(req.session.user){
    res.render('confirmation.ejs' , {msg:'', url:''});
  }else{
    res.redirect('/');
  }
  
});

module.exports = router;
