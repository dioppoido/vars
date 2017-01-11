/***
 * updateTeam.js
 * チームテーブルを更新処理するために使用。
 * 作成者：土居幸太郎
 */

/**
 * updateTeam関数
 * チームテーブル更新処理関数
 * 作成者：土居幸太郎
 * 作成日：2017/1/11
 * 最終更新者：土居幸太郎
 * 最終更新日：2017/1/11
 * @param FIND
 * @param CONTENTS
 */

exports.updateTeam = function(FIND,CONTENTS){
    const mongoose = require('mongoose');
    const db = mongoose.createConnection('mongodb://mongo/vars');
    const schema = require('../db/schema');
    const teams = db.model('teams', schema.teams);
    var msg="";   //返り値（メッセージ）

    teams.update(FIND,CONTENTS,function(err) {
        if (!err) {
            console.log("updateTeam"+"アップデート完了");
        } else {
            console.log("updateTeam:" + "DB Error.");
        }
    });

};