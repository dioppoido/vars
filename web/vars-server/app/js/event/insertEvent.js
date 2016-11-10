/**
 * eventInsertクラス
 * @author 長谷川遼
 */

 exports.insertEvent = function(EVENTS){
   const mongoose = require('mongoose');
   const db = mongoose.createConnection('mongodb://mongo/vars');
   const schema = require('../db/schema');
   const Events = db.model('events', schema.events);


   //insert処理
   /*const insertevents = new Events({
       'Eventid':EVENTS.eventid,
       'Eventname':EVENTS.eventname,
       'Overciew':EVENTS.overview,
       'Address':EVENTS.address,
       'displayName':EVENTS.displayName,
       'Course':EVENTS.course,
       'Venue':EVENTS.venue,
       'Date':EVENTS.date,
       'Createperiod':{
           'Createstart':EVENTS.createperiod.createstart,
           'Createfinish':EVENTS.createperiod.createfinish
       },
       'Voteperiod':{
           'Votestart':EVENTS.voteperiod.votestart,
           'Votefinish':EVENTS.voteperiod.votefinish
       },
       'Image':EVENTS.image


   });*/
     const insertevents=new Events(EVENTS);

    insertevents.save();

 };
