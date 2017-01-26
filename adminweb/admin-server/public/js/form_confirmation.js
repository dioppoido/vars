/* Form Confirmation */

/* account.ejs */
function pass_confirm() {

    //Form上のパスワード取得
    var oldpass = document.forms.changepass.oldpassword;
    var newpass = document.forms.changepass.newpassword;
    var againpass = document.forms.changepass.againpassword;

  //  console.log(newpass.value.length);
  //  console.log(againpass.value.length);

    if( oldpass.value.length != 0){
        if( newpass.value.length >= 4 && againpass.value.length >= 4){
            if(newpass.value == againpass.value){
                return true;
            }else{
                alert("同じパスワードを入力してください。");
                return  false;
            }

        }else{
            alert("4文字以上で入力してください。");
            return  false;
        }

    }else{
        alert("現在のパスワードが入力されていません。");
        return  false;
    }

}

/* eventcreate.ejs */
function eventcreate_confirm(){


    //格納用
    var teambox;
    var votebox;
    var holdbox;


    //開催日
    var hold_start = document.forms.eventcreate.datesstart.value;
    var hold_end = document.forms.eventcreate.datesfinish.value;
    //開催日時間
    var hold_stime;
    var hold_etime;

    //参加チーム期限
    var team_start = document.forms.eventcreate.createstart.value;
    var team_end = document.forms.eventcreate.createfinish.value;
    //参加チーム時間
    var team_stime;
    var team_etime;
    //投票期限
    var vote_start = document.forms.eventcreate.votestart.value;
    var vote_end = document.forms.eventcreate.votefinish.value;
    //投票時間
    var vote_stime;
    var vote_etime;

    //開催日開始
    if( hold_start != ""){
        holdbox = hold_start.split(" ");
        hold_start = holdbox[0];
        hold_start = hold_start.split("/");
        hold_start = hold_start[0] + hold_start[1] + hold_start[2];
        hold_stime = holdbox[1];
        hold_stime = hold_stime.split(":");
        hold_stime = hold_stime[0] + hold_stime[1];
        console.log("開催開始日" + hold_start);
        console.log("開催開始時間" + hold_stime);
    }else{
        alert("開催日エラー : 開催日が入力されていません。");
        return false;
    }
    //開催日終了
    if( hold_end != ""){
        holdbox = hold_end.split(" ");
        hold_end = holdbox[0];
        hold_end = hold_end.split("/");
        hold_end = hold_end[0] + hold_end[1] + hold_end[2];
        hold_etime = holdbox[1];
        hold_etime = hold_etime.split(":");
        hold_etime = hold_etime[0] + hold_etime[1];
        console.log("開催終了日" + hold_end);
        console.log("開催終了時間" + hold_etime);
    }else{
        alert("開催日エラー : 開催終了日が入力されていません。");
        return false;
    }

    //参加チーム開始
    if( team_start != ""){
        teambox = team_start.split(" ");
        team_start = teambox[0];
        team_start = team_start.split("/");
        team_start = team_start[0] + team_start[1] + team_start[2];
        //    console.log(team_start);
        team_stime = teambox[1];
        team_stime = team_stime.split(":");
        team_stime = team_stime[0] + team_stime[1];
        //  console.log(team_stime);
    }else{
        alert("参加チーム開始日エラー : 参加チームの開始日が入力されていません。");
        return false;
    }

    //参加チーム終了
    if(team_end != ""){
        teambox = team_end.split(" ");
        team_end = teambox[0];
        team_end = team_end.split("/");
        team_end = team_end[0] + team_end[1] + team_end[2];
        //  console.log(team_end);
        team_etime = teambox[1];
        team_etime = team_etime.split(":");
        team_etime = team_etime[0] + team_etime[1];
        //    console.log(team_etime);
    }else{
        alert("参加チーム期限エラー : 参加チーム受付終了日が入力されていません。");
        return false;
    }

    //投票開始
    if(vote_start != ""){
        votebox = vote_start.split(" ");
        vote_start = votebox[0];
        vote_start = vote_start.split("/");
        vote_start = vote_start[0] + vote_start[1] + vote_start[2];
        //    console.log(vote_start);
        vote_stime = votebox[1];
        vote_stime = vote_stime.split(":");
        vote_stime = vote_stime[0] + vote_stime[1];
        //    console.log(vote_stime);
    }else{
        alert("投票日エラー : 投票の開始日が入力されていません。");
        return false;
    }

    //投票終了
    if(vote_end != ""){
        votebox = vote_end.split(" ");
        vote_end = votebox[0];
        vote_end = vote_end.split("/");
        vote_end = vote_end[0] + vote_end[1] + vote_end[2];
        //      console.log(vote_end);
        vote_etime = votebox[1];
        vote_etime = vote_etime.split(":");
        vote_etime = vote_etime[0] + vote_etime[1];
        //      console.log(vote_etime);
    }else{
        alert("投票日エラー : 投票の終了日が入力されていません。");
        return false;
    }

    //開始日・終了日
    if(hold_start > hold_end){
        alert("開催日エラー : 開催終了日時が開催日時より早いです。");
        return false;
    }
    if(hold_start == hold_end && hold_stime == hold_etime){
        alert("開催時間エラー : 開催開始、終了時間が同じです");
        return false;
    }
    if(hold_start == hold_end && hold_stime > hold_etime){
        alert("開催時間エラー : 開催終了時間が早いです。");
        return false;
    }

    //参加チーム
    if(team_start > team_end){
        alert("参加チーム登録受付日時エラー : 参加チーム終了受付日時のほうが早いです。");
        return false;
    }
    if(team_start == team_end && team_stime == team_etime){
        alert("参加チーム登録受付時間エラー : 参加チーム受付開始、受付終了時間が同じです。");
        return false;
    }
    if(team_start == team_end && team_stime > team_etime){
        alert("参加チーム登録受付時間エラー : 参加チーム登録受付時間より受付終了時間のほうが早いです。");
        return false;
    }

    //投票
    if(vote_start > vote_end){
        alert("投票開始日エラー : 投票終了日時のほうが早いです。");
        return false;
    }
    if( vote_start == vote_end && vote_stime == vote_etime){
        alert("投票時間エラー : 投票の開始時間、終了時間が同じです。");
        return false;
    }
    if(vote_start == vote_end && vote_stime > vote_etime){
        alert("投票日エラー : 投票終了日時のほうが早いです。");
        return false;
    }

    //開催日 - 投票日
    //if(hold_start < vote_start){
    if(hold_start > vote_end){
        alert("開催日エラー : イベント前に投票期間が終了しています");
        return false;
    }


    //開催日 - チーム作成期間
    if(hold_start < team_start){
        alert("参加チーム登録受付エラー : 開催前にチーム作成が出来ません。");
        return false;
    }
    if(hold_start < team_end){
        alert("チーム受付終了エラー : イベント開催前にチーム作成期間を終了してください");
        return false;
    }
    if(hold_end < team_start){
        alert("チーム受付終了エラー : イベント終了前にチーム作成期間を終了してください");
        return false;
    }

    //チーム受付期間 - 投票日
    if(team_start > vote_start){
        alert("投票開始日時エラー : チーム作成前に投票が可能です。");
        return false;
    }
    if(team_start > vote_end){
        alert("投票終了日時エラー : チーム作成前に投票期限が終了しています");
        return false;
    }
    if(team_end > vote_start){
        alert("投票開始日時エラー : 投票期間中はチーム受付を終了してください。");
        return false;
    }

    //パスワード入力制限
    var status  = document.forms.eventcreate.passarea;
    if(status != undefined){
        if(status.disabled === false){
            if(status.length<4 || status.length>12){
                alert("パスワードは4文字以上12文字以上で入力してください");
                return false;
            }
        }
    }

    //ファイル識別
    var filename = document.getElementById("thumbnail_file").value;
    var extension = filename.split(".");
    extension = extension[extension.length - 1];

    if( extension != ""){
      if( extension != "jpg" && extension != "png" && extension != "gif" && extension != "jpeg"){
          alert("jpg・jpegまたはpngまたはgifを選択してください。");
          return false;
      }
    }

    //先頭空白判別
    // console.log(document.forms.eventsetting.eventname.value.trim());
    var eventname=document.forms.eventcreate.eventname.value.trim();
    var venue=document.forms.eventcreate.venue.value.trim();

    if(eventname==""){
      alert("イベント名を入力してください");
      return false;
    }else{
      document.forms.eventcreate.eventname.value=eventname.trim();
    };

    if(venue==""){
      alert("会場名を入力してください");
      return false;
    }else{
      document.forms.eventcreate.venue.value=venue.trim();
    };

    return true;
}

/* eventsetting.ejs */
function eventsetting_confirm(){


    //格納用
    var teambox;
    var votebox;
    var holdbox;


    //開催日
    var hold_start = document.forms.eventsetting.datesstart.value;
    var hold_end = document.forms.eventsetting.datesfinish.value;
    //開催日時間
    var hold_stime;
    var hold_etime;

    //参加チーム期限
    var team_start = document.forms.eventsetting.createstart.value;
    var team_end = document.forms.eventsetting.createfinish.value;
    //参加チーム時間
    var team_stime;
    var team_etime;
    //投票期限
    var vote_start = document.forms.eventsetting.votestart.value;
    var vote_end = document.forms.eventsetting.votefinish.value;
    //投票時間
    var vote_stime;
    var vote_etime;

    //開催日開始
    if( hold_start != ""){
        holdbox = hold_start.split(" ");
        hold_start = holdbox[0];
        hold_start = hold_start.split("/");
        hold_start = hold_start[0] + hold_start[1] + hold_start[2];
        hold_stime = holdbox[1];
        hold_stime = hold_stime.split(":");
        hold_stime = hold_stime[0] + hold_stime[1];
        console.log("開催開始日" + hold_start);
        console.log("開催開始時間" + hold_stime);
    }else{
        alert("開催日エラー : 開催日が入力されていません。");
        return false;
    }
    //開催日終了
    if( hold_end != ""){
        holdbox = hold_end.split(" ");
        hold_end = holdbox[0];
        hold_end = hold_end.split("/");
        hold_end = hold_end[0] + hold_end[1] + hold_end[2];
        hold_etime = holdbox[1];
        hold_etime = hold_etime.split(":");
        hold_etime = hold_etime[0] + hold_etime[1];
        console.log("開催終了日" + hold_end);
        console.log("開催終了時間" + hold_etime);
    }else{
        alert("開催日エラー : 開催終了日が入力されていません。");
        return false;
    }

    //参加チーム開始
    if( team_start != ""){
        teambox = team_start.split(" ");
        team_start = teambox[0];
        team_start = team_start.split("/");
        team_start = team_start[0] + team_start[1] + team_start[2];
        //    console.log(team_start);
        team_stime = teambox[1];
        team_stime = team_stime.split(":");
        team_stime = team_stime[0] + team_stime[1];
        //  console.log(team_stime);
    }else{
        alert("参加チーム開始日エラー : 参加チームの開始日が入力されていません。");
        return false;
    }

    //参加チーム終了
    if(team_end != ""){
        teambox = team_end.split(" ");
        team_end = teambox[0];
        team_end = team_end.split("/");
        team_end = team_end[0] + team_end[1] + team_end[2];
        //  console.log(team_end);
        team_etime = teambox[1];
        team_etime = team_etime.split(":");
        team_etime = team_etime[0] + team_etime[1];
        //    console.log(team_etime);
    }else{
        alert("参加チーム期限エラー : 参加チーム受付終了日が入力されていません。");
        return false;
    }

    //投票開始
    if(vote_start != ""){
        votebox = vote_start.split(" ");
        vote_start = votebox[0];
        vote_start = vote_start.split("/");
        vote_start = vote_start[0] + vote_start[1] + vote_start[2];
        //    console.log(vote_start);
        vote_stime = votebox[1];
        vote_stime = vote_stime.split(":");
        vote_stime = vote_stime[0] + vote_stime[1];
        //    console.log(vote_stime);
    }else{
        alert("投票日エラー : 投票の開始日が入力されていません。");
        return false;
    }

    //投票終了
    if(vote_end != ""){
        votebox = vote_end.split(" ");
        vote_end = votebox[0];
        vote_end = vote_end.split("/");
        vote_end = vote_end[0] + vote_end[1] + vote_end[2];
        //      console.log(vote_end);
        vote_etime = votebox[1];
        vote_etime = vote_etime.split(":");
        vote_etime = vote_etime[0] + vote_etime[1];
        //      console.log(vote_etime);
    }else{
        alert("投票日エラー : 投票の終了日が入力されていません。");
        return false;
    }

    //開始日・終了日
    if(hold_start > hold_end){
        alert("開催日エラー : 開催終了日時が開催日時より早いです。");
        return false;
    }
    if(hold_start == hold_end && hold_stime == hold_etime){
        alert("開催時間エラー : 開催開始、終了時間が同じです");
        return false;
    }
    if(hold_start == hold_end && hold_stime > hold_etime){
        alert("開催時間エラー : 開催終了時間が早いです。");
        return false;
    }

    //参加チーム
    if(team_start < team_end){
        alert("参加チーム登録受付日時エラー : 参加チーム終了受付日時のほうが早いです。");
        return false;
    }
    if(team_start == team_end && team_stime == team_etime){
        alert("参加チーム登録受付時間エラー : 参加チーム受付開始、受付終了時間が同じです。");
        return false;
    }
    if(team_start == team_end && team_stime > team_etime){
        alert("参加チーム登録受付時間エラー : 参加チーム登録受付時間より受付終了時間のほうが早いです。");
        return false;
    }

    //投票
    if(vote_start > vote_end){
        alert("投票開始日エラー : 投票終了日時のほうが早いです。");
        return false;
    }
    if( vote_start == vote_end && vote_stime == vote_etime){
        alert("投票時間エラー : 投票の開始時間、終了時間が同じです。");
        return false;
    }
    if(vote_start == vote_end && vote_stime > vote_etime){
        alert("投票日エラー : 投票終了日時のほうが早いです。");
        return false;
    }

    //開催日 - 投票日
    //if(hold_start < vote_start){
    if(hold_start > vote_end){
        alert("開催日エラー : イベント前に投票期間が終了しています");
        return false;
    }


    //開催日 - チーム作成期間
    if(hold_start > team_start){
        alert("参加チーム登録受付エラー : 開催前にチーム作成が出来ません。");
        return false;
    }
    if(hold_start < team_end){
        alert("チーム受付終了エラー : イベント開催前にチーム作成期間を終了してください");
        return false;
    }
    if(hold_end < team_start){
        alert("チーム受付終了エラー : イベント終了前にチーム作成期間を終了してください");
        return false;
    }

    //チーム受付期間 - 投票日
    if(team_start < vote_start){
        alert("投票開始日時エラー : チーム作成前に投票が可能です。");
        return false;
    }
    if(team_start > vote_end){
        alert("投票終了日時エラー : チーム作成前に投票期限が終了しています");
        return false;
    }
    if(team_end > vote_start){
        alert("投票開始日時エラー : 投票期間中はチーム受付を終了してください。");
        return false;
    }

    //パスワード入力制限
    var status  = document.forms.eventsetting.passarea;
    if(status != undefined){
        if(status.disabled === false){
            if(status.length<4 || status.length>12){
                alert("パスワードは4文字以上12文字以上で入力してください");
                return false;
            }
        }
    }

    //ファイル識別
    var filename = document.getElementById("thumbnail_file").value;
    var extension = filename.split(".");
    extension = extension[extension.length - 1];

    if( extension != ""){
      if( extension != "jpg" && extension != "png" && extension != "gif" && extension != "jpeg"){
          alert("jpg・jpegまたはpngまたはgifを選択してください。");
          return false;
      }
    }

    //先頭空白判別
    // console.log(document.forms.eventsetting.eventname.value.trim());
    var eventname=document.forms.eventsetting.eventname.value.trim();
    var venue=document.forms.eventsetting.venue.value.trim();
    var displayname=document.forms.eventsetting.displayname.value.trim();
    var address=document.forms.eventsetting.address.value.trim();


    if(eventname==""){
      alert("イベント名を入力してください");
      return false;
    }else{
      document.forms.eventsetting.eventname.value=eventname.trim();
    };
    if(venue==""){
      alert("会場を入力してください");
      return false;
    }else{
      document.forms.eventsetting.venue.value=venue.trim();
    };
    if(displayname==""){
      alert("代表者名（作成者）を入力してください");
      return false;
    }else{
      document.forms.eventsetting.displayname.value=displayname.trim();
    };
    if(address==""){
      alert("メールアドレスを入力してください");
      return false;
    }else{
      document.forms.eventsetting.address.value=address.trim();
    };

    return true;

}

/* teamcreate.ejs */
function teamcreate_confirm(){


    //ファイル識別
    var filename = document.getElementById("thumbnail_file").value;
    var extension = filename.split(".");
    extension = extension[extension.length - 1];

    if( extension != ""){
      if( extension != "jpg" && extension != "png" && extension != "gif" && extension != "jpeg"){
          alert("jpg・jpegまたはpngまたはgifを選択してください。");
          return false;
      }
    }
    var teamname=document.teamcreate.teamname.value;
    if(teamname.trim()==""){
          alert("チーム名を入力してください");
          return false;
    }else{
        document.teamcreate.teamname.value=teamname.trim();

    }


    return true;

}



/* teamcontrol.ejs */
function teamcontrol_confirm(){


    //ファイル識別
    var filename = document.getElementById("thumbnail_file").value;
    var extension = filename.split(".");
    extension = extension[extension.length - 1];

    if( extension != ""){
      if( extension != "jpg" && extension != "png" && extension != "gif" && extension != "jpeg"){
          alert("jpg・jpegまたはpngまたはgifを選択してください。");
          return false;
      }
    }

    var teamname=document.teamchange.teamname.value;
    if(teamname.trim()==""){
          alert("チーム名を入力してください");
          return false;
    }else{
        document.teamchange.teamname.value=teamname.trim();

    }


    return true;

}


function pdf_check(){

    var pdf = document.forms.teampdf.pdf_files.value;

    var extension = pdf.split(".");
    extension = extension[extension.length - 1];
    console.log(extension);

    if( extension != ""){
        if( extension != "pdf"){
            alert("pdfを選択してください。");
            return false;
        }
    }

    return true;
}
