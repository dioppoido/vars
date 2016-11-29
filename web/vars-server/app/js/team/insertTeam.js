/**
 * insertTeamクラス
 * @author Daiky Yamaguchi
 * 格納するイベントデータをあらかじめJSON形式で入れておく必要があります
 * @param TEAMS :
    * @param TEAMS.Teamname : チーム名
     * @param TEAMS.Teamid : チームID
     * @param TEAMS.Eventid : イベントID
     * @param TEAMS.Systemname : システム名
     * @param TEAMS.teammember : チームメンバー//まだいらない
     * @param TEAMS.Overview : 概要
     * @param TEAMS.displayName : 代表者
     * @param TEAMS.Address : メールアドレス
     * @param TEAMS.Image : サムネイル
 */

exports.insertTeam = function(TEAMS){
    const mongoose = require('mongoose');
    const db = mongoose.createConnection('mongodb://mongo/vars');
    const schema = require('../db/schema');
    const TEAM = db.model('teams', schema.teams);
    //insert処理
    const insertteam=new TEAM(TEAMS);
    insertteam.save();
};
