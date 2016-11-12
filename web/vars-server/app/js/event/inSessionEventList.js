/**
 * 開催中イベント抽出クラス
 * @author 山口
 * @param date : 現在日
 * @param json : json形式の変数(getEventList.jsで作成したもの)
 */

exports.inSessionEventList = function(date,json){
        var open=JSON.parse(JSON.stringify(json));
        var openNo=0;
        var length=json.length;
        for(var cnt=0;cnt<json.length;cnt++){
              //開催中
              if(json[cnt].Date>=date){
                  open[openNo].Eventid=json[cnt].Eventid;
                  open[openNo].Eventname=json[cnt].Eventname;
                  open[openNo].Date=json[cnt].Date;
                  open[openNo].Venue=json[cnt].Venue;
                  open[openNo].Image=json[cnt].Image;
                  openNo++;
              }
        }
        for(var cnt=0;cnt<length-openNo;cnt++){
            open.pop();
        }
        return open;
};
