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
  Voteid      :String,          //投票ID
  Eventid      :String,          //イベントID
  Votename  :String          //投票カテゴリ
});

/**
 * events
 */
exports.events = new mongoose.Schema({
  Eventid         :String,      //イベントID
  Eventname       :String,
  Overview        :String,
  Password        :String,
  Address         :String,
  displayName     :String,
  Fieldid          :String,
  Venue            :String,
  Holdperiod:{                  //holding ... 開催
    Holdstart      :Date,
    Holdfinish     :Date
 },
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
  Teamid        :String,
  Eventid       :String,
  Teamname      :String,
  Workname      :String,
  Overview      :String,
  displayName   :String,
  Address       :String,
  Image         :String,
  Works         :String
});

exports.aggregates =new mongoose.Schema({
  Aggregateid    :String,
  Eventid         :String,
  Voteid          :String,
  Address          :String,
  Teamid          :String
});

/**
 * field
 */
exports.fields =new mongoose.Schema({
  Fieldid    :String,
  Fieldname          :String
});
