/**
 * 投票部門削除
 * @author 土居
 * @param json
 * @returns {Promise}
 */

exports.deleteVote = function(find){
    const mongoose = require('mongoose');
    const db = mongoose.createConnection('mongodb://mongo/vars');
    const schema = require('../db/schema');
    const votes = db.model('votes', schema.votes);
    var msg="";   //返り値（メッセージ）
    //投票部門削除
    votes.remove(find,function(err) {
        if (!err) {
            console.log("投票部門:"+find.Voteid+"を削除しましたよ");
        } else {
            console.log("deleteVote:" + "DB Error.");
        }
    });
};