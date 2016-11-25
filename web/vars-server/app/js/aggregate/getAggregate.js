exports.getAggregate = function(Aggregate_JSON){
    return new Promise(function (resolve,reject) {
        const mongoose = require('mongoose');
        const db = mongoose.createConnection('mongodb://mongo/vars');
        const schema = require('../db/schema');
        const Aggregates = db.model('aggregates', schema.aggregates);

        //team name 抽出
        Aggregates.find(Aggregate_JSON,{},function(err,docs){
            if(!err){
                if(docs.length>=1){
                    //console.log("getAggregate:"+"データがあります");
                    //console.log("Eventid" + docs[0].Eventid + "は" + docs.length+"件見つかりました");
                    /*for(var i=0; i<docs.length;i++){
                        console.log(docs[i]);
                    }*/
                    resolve(docs);
                }else{
                    //console.log("getAggregate:"+"データがありません");
                    resolve(docs);
                }
            } else {
                console.log("getAggregate:"+"DB Error.");
                reject("DB ERROR");
            }
        });
    });
}