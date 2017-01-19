/**
 * データベースのスキーマ
 * @author 多田
 */

const mongoose = require('mongoose');

/** -- vars ---------- */

/**
 * users
 * ユーザーテーブル
 */
exports.users = new mongoose.Schema({
    Address: String,          //E-Mailアドレス
    Admin_flag: Boolean,         //管理者フラグ
    Name: String,
    Password: String
});

/**
 * votes
 * 投票部門テーブル
 */
exports.votes = new mongoose.Schema({
    Voteid: String,          //投票ID
    Eventid: String,          //イベントID
    Votename: String          //投票カテゴリ
});

/**
 * events
 * イベントテーブル
 */
exports.events = new mongoose.Schema({
    Eventid: String,      //イベントID
    Eventname: String,
    Overview: String,
    Password: String,
    Address: String,
    displayName: String,
    Fieldid: String,
    Venue: String,
    Holdperiod: {                  //holding ... 開催
        Holdstart: Date,
        Holdfinish: Date
    },
    Createperiod: {
        Createstart: Date,
        Createfinish: Date
    },
    Voteperiod: {
        Votestart: Date,
        Votefinish: Date
    },
    Image: String,
    Order: Array

});
/**
 * teams
 * チームテーブル
 */
exports.teams = new mongoose.Schema({
    Teamid: String,
    Eventid: String,
    Teamname: String,
    Workname: String,
    Overview: String,
    displayName: String,
    Address: String,
    Image: String,
    Works: String,
    Department: Array,
    Order: Number
});

/**
 * aggregates
 * 投票テーブル
 */

exports.aggregates = new mongoose.Schema({
    Aggregateid: String,
    Eventid: String,
    Voteid: String,
    Address: String,
    Teamid: String
});

/**
 * field
 * 分野テーブル
 */
exports.fields = new mongoose.Schema({
    Fieldid: String,
    Fieldname: String
});
