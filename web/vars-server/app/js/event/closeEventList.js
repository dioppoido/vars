/**
 * 閉鎖済イベント抽出クラス
 * @author 山口
 * @param date : 現在日
 * @param json : json形式の変数(getEventList.jsで作成したもの)
 * @param sort :1又はnull->昇順 2->降順
 */
 exports.closedEventList = function(date,json,sort){
        var close=JSON.parse(JSON.stringify(json));
        var closeNo=0;
        var length=json.length;
        for(var cnt=0;cnt<json.length;cnt++){
              //開催中
              if(json[cnt].Date<date){
                  close[closeNo].Eventid=json[cnt].Eventid;
                  close[closeNo].Eventname=json[cnt].Eventname;
                  close[closeNo].Date=json[cnt].Date;
                  close[closeNo].Venue=json[cnt].Venue;
                  close[closeNo].Image=json[cnt].Image;
                  close[closeNo].Overview=json[cnt].Overview;
                  closeNo++;
              }
        }
        for(var cnt=0;cnt<length-closeNo;cnt++){
            close.pop();
        }
        // 上記の段階で昇順済み
        if(sort==1 || sort!=null);
        if(sort==2){
          close.sort(function(a,b){
            if(a.Date<b.Date) return 1;
            if(a.Date>b.Date) return -1;
            return 0;
          });
        }
return close;
};
