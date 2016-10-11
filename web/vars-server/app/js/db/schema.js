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
  Userid      :String,          //ユーザID
  Passwd      :String,          //パスワード
  Admin_flag  :Boolean,         //管理者フラグ
  Address     :String,          //E-Mailアドレス
  Pass_flag   :Boolean,         //パスワード変更フラグ
  Username    :String           //名前
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
  Createperiod:{
    Createstart   :Date,
    Createfinish  :Date
  },
  Voteperiod:{
    Votestart     :Date,
    Votefinish    :Date
  }

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
  Userid          :String,
  Teamid          :Number
});
