/**
 * 開催中イベント抽出クラス
 * @author 山口
 * @param date : 現在日
 * @param json : json形式の変数(getEventList.jsで作成したもの)
 * @param sort :1又はnull->昇順 2->降順
 */

exports.inSessionEventList = function(date,json,sort){
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
                  open[openNo].Overview=json[cnt].Overview;
                  openNo++;
              }
        }
        // 開催中イベント以外を削除
        for(var cnt=0;cnt<length-openNo;cnt++){
            open.pop();
        }
        //昇順降順処理 上記の段階で昇順済み
        if(sort==1|| sort!=null);
        if(sort==2){
          open.sort(function(a,b){
            if(a.Date<b.Date) return 1;
            if(a.Date>b.Date) return -1;
            return 0;
          });
        }
return open;
};
