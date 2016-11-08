var express = require('express');
var router = express.Router();
var validator = require('validator'); //validatorモジュール宣言
var createEvent = require("../app/js/event/createEvent");
var randomByte = require("../app/js/db/randomByte");
var insertEvent = require("../app/js/event/insertEvent");

//特に送り付ける値はなし
router.get('/', function(req, res) {
    if(req.session.user){
        res.render('eventcreate.ejs');
    } else{
        res.redirect('/');
    }

});


router.post('/', function(req, res) {
    //DBに入れ込む処理を呼び出す
    if(req.session.user){
        //var EVENTS = [];
        var eventid = 4/*req.body.eventid*/;//変更必要あり
        var eventname = req.body.eventname;
        var overview = req.body.overview;
        var address = req.body.address;
        var displayname = req.body.displayname;
        var course = req.body.course;
        var venue = req.body.venue;
        var date = req.body.date;
        const EVENTS = {
            'Eventid':eventid,
            'Eventname':eventname,
            'Overview':overview,
            'Address':address,
            'displayName':displayname,
            'Course':course,
            'Venue':venue,
            'Date':date,
            'Createperiod':{
                'Createstart':req.body.createstart,
                'Createfinish':req.body.createfinish
            },
            'Voteperiod':{
                'Votestart':req.body.votestart,
                'Votefinish':req.body.votefinish
            },
            'Image':req.body.image
        };

        console.log(EVENTS);

        insertEvent.insertEvent(EVENTS);
        res.redirect('/');  //行き先不明
    }else{
        res.redirect('/');
    }

});

module.exports = router;
