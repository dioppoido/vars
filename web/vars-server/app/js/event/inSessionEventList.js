/**
 * 開催中イベント抽出クラス
 * @author 山口
 * @param date : 現在日
 * @param json : json形式の変数(getEventList.jsで作成したもの)
 * @param sort :1又はnull->昇順 2->降順
 */
exports.inSessionEventList = function(date,json,sort){
        var todate = require("../moment/moment.js");
        var open=JSON.parse(JSON.stringify(json));
        var openNo=0;
        var length=json.length;
        for(var cnt=0;cnt<json.length;cnt++){
              //開催始まり
              var holdstart=todate.parsedate(json[cnt].Holdperiod.Holdstart,"YYYY-MM-DD HH:mm:ss");
              //開催終わり
              var holdfinish=todate.parsedate(json[cnt].Holdperiod.Holdfinish,"YYYY-MM-DD HH:mm:ss");
              // console.log(todate.parsedate(json[cnt].Holdperiod.Holdstart,"YYYY-MM-DD HH:mm:ss")+">="+date);
              //開催中
              if(holdfinish>=date){
                  open[openNo].Eventid=json[cnt].Eventid;
                  open[openNo].Eventname=json[cnt].Eventname;
                  open[openNo].Fieldid=json[cnt].Fieldid;
                  open[openNo].Holdperiod.Holdstart=todate.parsedate(json[cnt].Holdperiod.Holdstart,"YYYY年MM月D日(dddd) HH時mm分");
                  open[openNo].Holdperiod.Holdfinish=todate.parsedate(json[cnt].Holdperiod.Holdfinish,"YYYY年MM月D日(dddd) HH時mm分");
                  open[openNo].Venue=json[cnt].Venue;
                  open[openNo].Image=json[cnt].Image;
                  open[openNo].Overview=json[cnt].Overview;
                  // ソート用日付
                  open[openNo].sortstart=todate.parsedate(json[cnt].Holdperiod.Holdstart,"YYYYMMDDHHmm");
                  open[openNo].sortfinish=todate.parsedate(json[cnt].Holdperiod.Holdfinish,"YYYYMMDDHHmm");
                  // ここまで
                  openNo++;
              }
              // console.log("現在時間" + date);
              // console.log("開催日" + json[cnt].Holdperiod.Holdstart);
              // console.log(open);
        }
        // console.log("配列の数"+length+"openNoは"+openNo);
        // 開催中イベント以外を削除
        for(var cnt=0;cnt<length-openNo;cnt++){
            open.pop();
        }
        //昇順降順処理 上記の段階で昇順済み
        // 昇順
        if(sort==1|| sort!=null){
          // 降順
          open.sort(function(a,b){
            if(a.sortstart<b.sortstart) return 1;
            if(a.sortstart>b.sortstart) return -1;
            return 0;
          });
        }
          // 昇順
        if(sort==2){
          open.sort(function(a,b){
            if(a.sortstart>b.sortstart) return 1;
            if(a.sortstart<b.sortstart) return -1;
            return 0;
          });
        }
        // console.log(open);
return open;
};
