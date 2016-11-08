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
        var EVENTS = [];
        var eventid = 4/*req.body.eventid*/;//変更必要あり
        var eventname = req.body.eventname;
        var overview = req.body.overview;
        var address = req.body.address;
        var displayname = req.body.displayname;
        var course = req.body.course;
        var venue = req.body.venue;
        var date = req.body.date;
        const WORK_JSON = {
            'eventid':eventid,
            'eventname':eventname,
            'overview':overview,
            'address':address,
            'displayName':displayname,
            'course':course,
            'venue':venue,
            'date':date
        }
        const CREATE_JSON = {
            'createstart':req.body.createstart,
            'createfinish':req.body.createfinish
        }
        const VOTE_JSON = {
            'votestart':req.body.votestart,
            'votefinish':req.body.votefinish
        }
        var image = req.body.image;

        EVENTS.push(WORK_JSON);
        EVENTS.push(CREATE_JSON);
        EVENTS.push(VOTE_JSON);

        console.log(EVENTS);

        insertEvent.insertEvent(EVENTS);
        res.redirect('/');  //行き先不明
    }else{
        res.redirect('/');
    }

});

module.exports = router;
