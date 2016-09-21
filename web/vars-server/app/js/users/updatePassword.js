/**
 * パスワード抽出クラス
 * @author 土居幸太郎
 * @param userid : ユーザーID
 * @returns {Promise}
 */
exports.updatePassword = function(userid,newpass){
    const mongoose = require('mongoose');
    const db = mongoose.createConnection('mongodb://mongo/vars');
    const schema = require('../db/schema');
    const users = db.model('users', schema.users);
    var msg="";   //返り値（メッセージ）

    //パスワード変更処理
    users.update({Userid:userid}, {Passwd:newpass},function(err) {
        if (!err) {
            console.log("DB UPDATE完了");
        } else {
            console.log("getPassword:" + "DB Error.");
        }
    });

};