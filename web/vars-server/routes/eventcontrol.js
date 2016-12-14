var express = require('express');
var router = express.Router();
var getEvent = require("../app/js/event/getEvent");
var deleteEvent= require("../app/js/event/deleteEvent");
var deleteTeam= require("../app/js/team/deleteTeam");
var getVote = require("../app/js/votes/getVote");
var getTeam = require("../app/js/team/getTeam");
router.get('/', function(req, res) {
    if(req.session.user){
        if(req.query.eventid){
            var eventid=req.query.eventid;
            getEvent.getEvent(eventid).then(function (docs) {
                res.render('eventcontrol.ejs',{eventdata: docs,id:eventid});
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
      if(req.session.user){
        var eventdelete=req.body.eventdelete;
        var eventid=req.body.eventid;
        //イベント削除のテスト
        const EVENTS={'Eventid':eventid};
        deleteEvent.deleteEvent(EVENTS);
        //チーム削除のテスト
        const TEAMS={'Teamid':1,
                      'Eventid':eventid};
        deleteTeam.deleteTeam(TEAMS);
        res.render('confirmation.ejs',{msg:'イベントを削除しました',url:'/eventlist'});
      }else{
        res.redirect('/eventlist');
      }
});


router.get('/eventsetting', function(req, res) {
    if(req.session.user){
          var eventid=req.query.eventid;
          getEvent.getEvent(eventid).then(function (docs){
              console.log(docs);
              res.render('eventsetting.ejs',{eventdata:docs});

          }).catch(function(){

            res.render('confirmation.ejs',{msg:'イベントIDが存在しません',url:'/eventlist'});

        });
    } else {
        res.redirect('/eventlist');
    }
});

router.get('/votesetting', function(req, res) {
    if(req.session.user){
      var eventid=req.query.eventid;
      getVote.getVotejson({Eventid:eventid}).then(function (vote){
        res.render('votesetting.ejs',{vote:vote});
      }).catch(function(){

        res.render('confirmation.ejs',{msg:'イベントIDが存在しません',url:'/eventlist'});

    });
    } else{
        res.redirect('/');
    }
});

router.get('/fieldsetting', function(req, res) {
    if(req.session.user){
      var eventid=req.query.eventid;
      getTeam.getTeamjson({Eventid:eventid}).then(function (team){
        getVote.getVotejson({Eventid:eventid}).then(function (vote){
        res.render('fieldsetting.ejs',{team:team,vote:vote});
      });
      }).catch(function(){

        res.render('confirmation.ejs',{msg:'イベントIDが存在しません',url:'/eventlist'});

    });
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



module.exports = router;
