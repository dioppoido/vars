
exports.updateVote = function(FIND,CONTENTS){
    const mongoose = require('mongoose');
    const db = mongoose.createConnection('mongodb://mongo/vars');
    const schema = require('../db/schema');
    const votes = db.model('votes', schema.votes);
    var msg="";   //返り値（メッセージ）

    //
    votes.update(FIND,CONTENTS,function(err) {
        if (!err) {
            console.log("updateVote"+"アップデート完了");

        } else {
            console.log("updateVote:" + "DB Error.");
        }
    });

};
