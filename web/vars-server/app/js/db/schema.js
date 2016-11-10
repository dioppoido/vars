/**
 * データベースのスキーマ
 * @author 多田
 */

const mongoose = require('mongoose');

/** -- vars ---------- */

/**
 * users
 */
exports.users = new mongoose.Schema({
  Address     :String,          //E-Mailアドレス
  Admin_flag  :Boolean,         //管理者フラグ
});

/**
 * votes
 */
exports.votes = new mongoose.Schema({
  Voteid      :Number,          //投票ID
  Eventid      :Number,          //イベントID
  Votename  :String          //投票カテゴリ
});

/**
 * events
 */
exports.events = new mongoose.Schema({
  Eventid         :String,      //イベントID
  Eventname       :String,
  Overview        :String,
  Address         :String,
  displayName     :String,
  Course          :String,
  Venue            :String,
  Date             :String,
  Createperiod:{
    Createstart   :Date,
    Createfinish  :Date
  },
  Voteperiod:{
    Votestart     :Date,
    Votefinish    :Date
  },
  Image            :String

});

exports.teams =new mongoose.Schema({
  Teamid        :Number,
  Eventid       :Number,
  Teamname      :String,
  Workname      :String
});

exports.aggregates =new mongoose.Schema({
  Aggregateid    :Number,
  Voteid          :Number,
  Address          :String,
  Teamid          :Number
});
