var express = require('express');
var router = express.Router();
var validator = require('validator'); //validatorモジュール宣言
var getEvent = require("../app/js/event/getEvent");
//特に送り付ける値はなし

router.get('/', function(req, res) {
    if(req.session.user){
      if(req.query.eventid){
        var eventid=req.query.eventid;
        console.log("eventid:"+eventid);
        getEvent.getEvent(eventid).then(function (docs) {
          res.render('eventtop.ejs',{eventdata:docs});
          }).catch(function(){
              res.render('confirmation.ejs',{msg:'イベントIDが存在しません',url:'/eventlist'});
          });
      }else{
        res.redirect('/eventlist');
      }
    } else{
        res.redirect('/');
    }

});


router.post('/', function(req, res) {

});

module.exports = router;
