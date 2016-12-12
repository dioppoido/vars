

exports.updateEvent = function(FIND,CONTENTS){
    const mongoose = require('mongoose');
    const db = mongoose.createConnection('mongodb://mongo/vars');
    const schema = require('../db/schema');
    const events = db.model('events', schema.events);
    var msg="";   //返り値（メッセージ）

    //
    events.update(FIND,CONTENTS,function(err) {
        if (!err) {


        } else {
            console.log("updateEvent:" + "DB Error.");
        }
    });

};