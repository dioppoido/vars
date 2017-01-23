var express = require('express');
var router = express.Router();
var validator = require('validator'); //validatorモジュール宣言
var getEvent = require("../app/js/event/getEvent");
var getField = require("../app/js/field/getField");
var getVote = require("../app/js/votes/getVote");
var todate = require("../app/js/moment/moment.js");
var nl2br = require("../app/js/nl2br/nl2br.js");
//特に送り付ける値はなし

router.get('/', function (req, res) {
    if (req.session.user) {
        if (req.query.eventid) {
            var eventid = req.query.eventid;
            console.log("eventid:" + eventid);
            getEvent.getEvent(eventid).then(function (docs) {
                getField.getSingleField(docs[0].Fieldid).then(function (docs1) {
                    getVote.getVotejson({Eventid: eventid}).then(function (votedata) {
                        var Holdfinish = todate.parsedate(docs[0].Holdperiod.Holdfinish, "YYYY/M/D(dddd) HH時mm分");
                        var Holdstart = todate.parsedate(docs[0].Holdperiod.Holdstart, "YYYY/M/D(dddd) HH時mm分");
                        var Createstart = todate.parsedate(docs[0].Createperiod.Createstart, "YYYY/M/D(dddd) HH時mm分");
                        var Createfinish = todate.parsedate(docs[0].Createperiod.Createfinish, "YYYY/M/D(dddd) HH時mm分");
                        var Votestart = todate.parsedate(docs[0].Voteperiod.Votestart, "YYYY/M/D(dddd) HH時mm分");
                        var Votefinish = todate.parsedate(docs[0].Voteperiod.Votefinish, "YYYY/M/D(dddd) HH時mm分");
                        var overview = nl2br.textarea(docs[0].Overview);
                        console.log(docs1[0].Fieldid);
                        res.render('eventtop.ejs', {
                            eventdata: docs, fieldname: docs1[0].Fieldname,
                            holdfinish: Holdfinish, holdstart: Holdstart,
                            createstart: Createstart, createfinish: Createfinish,
                            votestart: Votestart, votefinish: Votefinish,
                            overview: overview, votedata: votedata
                        });
                    });
                }).catch(function (msg) {
                    res.render('errorconfirmation.ejs', {msg: msg, url: '/eventlist'});
                })
            }).catch(function () {
                res.render('errorconfirmation.ejs', {msg: 'イベントIDが存在しません', url: '/eventlist'});
            });
        } else {
            res.redirect('/eventlist');
        }
    } else {
        res.redirect('/');
    }

});


router.post('/', function (req, res) {

});

module.exports = router;
