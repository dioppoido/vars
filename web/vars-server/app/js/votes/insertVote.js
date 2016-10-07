/**
 * voteInsertクラス
 * @author 多田涼太
 */
exports.insertVote = function(AGGREGATES){
  const mongoose = require('mongoose');
  const db = mongoose.createConnection('mongodb://mongo/vars');
  const schema = require('../db/schema');
  const Aggregates = db.model('aggregates', schema.aggregates);
 for(i=0; i<AGGREGATES.length; i++){
  const Aggregates2 = new Aggregates({'Voteid':AGGREGATES[i].voteid,'Userid':AGGREGATES[i].userid,'Teamid':AGGREGATES[i].teamid});
  Aggregates2.save();
};

};
