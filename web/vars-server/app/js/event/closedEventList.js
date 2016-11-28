/**
 * 閉鎖済イベント抽出クラス
 * @author 山口
 * @param date : 現在日
 * @param json : json形式の変数(getEventList.jsで作成したもの)
 * @param sort :1又はnull->昇順 2->降順
 */
 exports.closedEventList = function(date,json,sort){
        var todate = require("../moment/moment.js");
        var close=JSON.parse(JSON.stringify(json));
        var closeNo=0;
        var length=json.length;
        for(var cnt=0;cnt<json.length;cnt++){
              //開催始まり
              var holdstart=todate.parsedate(json[cnt].Holdperiod.Holdstart,"YYYY-MM-DD HH:mm:ss");
              //開催終わり
              var holdfinish=todate.parsedate(json[cnt].Holdperiod.Holdfinish,"YYYY-MM-DD HH:mm:ss");
              //開催中
              if(holdfinish<date){
                  close[closeNo].Eventid=json[cnt].Eventid;
                  close[closeNo].Eventname=json[cnt].Eventname;
                  close[closeNo].Fieldid=json[cnt].Fieldid;
                  close[closeNo].Holdperiod.Holdstart=todate.parsedate(json[cnt].Holdperiod.Holdstart,"YYYY年MM月D日(dddd) HH時mm分");
                  close[closeNo].Holdperiod.Holdfinish=todate.parsedate(json[cnt].Holdperiod.Holdfinish,"YYYY年MM月D日(dddd) HH時mm分");
                  close[closeNo].Venue=json[cnt].Venue;
                  close[closeNo].Image=json[cnt].Image;
                  close[closeNo].Overview=json[cnt].Overview;
                  //ソート用日付
                  close[closeNo].sortstart=todate.parsedate(json[cnt].Holdperiod.Holdstart,"YYYYMMDDHHmm");
                  close[closeNo].sortfinish=todate.parsedate(json[cnt].Holdperiod.Holdfinish,"YYYYMMDDHHmm");
                  //ここまで
                  closeNo++;

              }
        }
        for(var cnt=0;cnt<length-closeNo;cnt++){
            // console.log(length+"-"+closeNo);
            close.pop();
            // console.log(close[cnt].Eventname);
        }
        // 昇順
        if(sort==1|| sort!=null){
          // 降順
          close.sort(function(a,b){
            if(a.sortfinish<b.sortfinish) return 1;
            if(a.sortfinish>b.sortfinish) return -1;
            return 0;
          });
        }
          // 昇順
        if(sort==2){
          close.sort(function(a,b){
            if(a.sortfinish>b.sortfinish) return 1;
            if(a.sortfinish<b.sortfinish) return -1;
            return 0;
          });
        }
        // console.log(close.Eventid);
return close;
};
