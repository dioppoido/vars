var express = require('express');
var router = express.Router();
var validator = require('validator'); //validatorモジュール宣言
var getEvent = require("../app/js/event/getEvent");//イベント抽出
var getTeam = require("../app/js/team/getTeam");//イベント抽出
//特に送り付ける値はなし
router.get('/', function(req, res) {
    if(req.session.user){
        if(req.query.eventid) {
            var eventid = req.query.eventid;
            getEvent.getEvent(eventid).then(function (eventdata) {
                getTeam.getTeam(eventid).then(function (teamdata) {
                    res.render('teamlist.ejs',{eventdata:eventdata,teamdata:teamdata});
                }).catch(function (msg) {
                    res.render('confirmation.ejs', {msg: msg, url: '/eventtop?eventid=' + eventid});
                    //res.render('teamlist.ejs',{eventdata:eventdata,teamdata:teamdata});
                                    })
            }).catch(function (msg) {
                res.render('confirmation.ejs', {msg: msg, url: '/eventlist'});
            })
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
