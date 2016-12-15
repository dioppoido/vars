var express = require('express');
var router = express.Router();
var getEvent = require("../app/js/event/getEvent");

router.get('/', function(req, res) {
    if(req.session.user){
        if(req.query.eventid){
            var eventid=req.query.eventid;
            getEvent.getEvent(eventid).then(function (docs) {
                res.render('eventcontrol.ejs',{eventdata: docs});
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

router.get('/eventsetting', function(req, res) {
    if(req.session.user){
        res.render('eventsetting.ejs');
    } else{
        res.redirect('/');
    }
});

router.get('/votesetting', function(req, res) {
    if(req.session.user){
        res.render('votesetting.ejs');
    } else{
        res.redirect('/');
    }
});

router.post('/votesetting', function(req, res) {

    var field = req.body.fieldname;

    console.log(field);

    res.render('votesetting.ejs');
});

router.get('/fieldsetting', function(req, res) {
    if(req.session.user){
        res.render('fieldsetting.ejs');
    } else{
        res.redirect('/');
    }
});

router.get('/announcesetting', function(req, res) {
    if(req.session.user){
        res.render('announcesetting.ejs');
    } else{
        res.redirect('/');
    }
});

router.post('/announcesetting', function(req, res) {

    var announce = req.body.announce;

    console.log(announce);

    res.render('announcesetting.ejs');
});


module.exports = router;