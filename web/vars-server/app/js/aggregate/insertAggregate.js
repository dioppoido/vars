/**
 * insertAggregateクラス
 * @author 多田涼太
 */
exports.insertAggregate = function(AGGREGATES){
    const mongoose = require('mongoose');
    const db = mongoose.createConnection('mongodb://mongo/vars');
    const schema = require('../db/schema');
    const Aggregates = db.model('aggregates', schema.aggregates);
    for(i=0; i<AGGREGATES.length; i++){
        const Aggregates2 = new Aggregates({
            'Aggregateid':AGGREGATES[i].aggregateid,
            'Eventid':AGGREGATES[i].eventid,
            'Voteid':AGGREGATES[i].voteid,
            'Address':AGGREGATES[i].address,
            'Teamid':AGGREGATES[i].teamid
        });
        Aggregates2.save();
    };

};
