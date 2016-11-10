/**
 * 分野リスト抽出クラス
 * @author 土田
 */

exports.getField = function(){
    return new Promise(function (resolve,reject) {
        const mongoose = require('mongoose');
        const db = mongoose.createConnection('mongodb://mongo/vars');
        const schema = require('../db/schema');
        const getField = db.model('fields', schema.fields);

        //team name 抽出
        getField.find({},{},function(err,docs){
            if(!err){
                if(docs.length>=1){
                    resolve(docs);
                }else{
                    console.log("getField:"+"データがありません");
                    reject("Date NotFound");
                }
            } else {
                console.log("getFiled:"+"DB Error.");
                reject("DB ERROR");
            }
        });
    });
}