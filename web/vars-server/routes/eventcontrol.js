var express = require('express');
var router = express.Router();
var getEvent = require("../app/js/event/getEvent");

router.get('/', function(req, res) {
    if(req.session.user){
        if(req.query.eventid){
            var eventid=req.query.eventid;
            getEvent.getEvent(eventid).then(function (docs) {
                if(req.query.category){
                    var category = req.query.category;
                    switch(category){
                        case "event":
                            res.render('eventsetting.ejs');
                            break;
                        case "vote" :
                            res.render('votesetting.ejs');
                            break;
                        case "field" :
                            res.render('fieldsetting.ejs');
                            break;
                        case "announce" :
                            res.render('announcesetting.ejs');
                            break;
                        default:
                            res.render('eventcontrol.ejs', {eventdata: docs});
                            break;
                    }
                }else{
                    res.render('eventcontrol.ejs', {eventdata: docs});
                }
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

module.exports = router;