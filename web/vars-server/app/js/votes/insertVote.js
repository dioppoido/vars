
exports.insertVote = function(){
  const mongoose = require('mongoose');
  const db = mongoose.createConnection('mongodb://mongo/vars');
  const schema = require('../db/schema');
  const Aggregates = db.model('aggregates', schema.aggregates);

Aggregates.insert({Aggregateid:1,Voteid:1,Userid:"aa",Teamid:1},function(err) {
    if (!err) {
      console.log("DB INSERT OK");ß
    } else {
        console.log("DB Error");
    }
});
};
