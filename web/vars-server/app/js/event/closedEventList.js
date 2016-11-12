/**
 * 閉鎖済イベント抽出クラス
 * @author 山口
 * @param date : 現在日
 * @param json : json形式の変数(getEventList.jsで作成したもの)
 */
 exports.closedEventList = function(date,json){
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
                  closeNo++;
              }
        }
        for(var cnt=0;cnt<length-closeNo;cnt++){
            close.pop();
        }
        return close;
};
