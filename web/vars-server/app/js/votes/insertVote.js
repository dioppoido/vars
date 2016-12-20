/**
 * voteInsertクラス
 * @author 多田涼太
 */
exports.insertVote = function(Votedata){
  const mongoose = require('mongoose');
  const db = mongoose.createConnection('mongodb://mongo/vars');
  const schema = require('../db/schema');
  const Votes = db.model('votes', schema.votes);
  const Vote = new Votes(Votedata);
  Vote.save();

};
