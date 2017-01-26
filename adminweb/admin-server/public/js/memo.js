$(document).ready(function(){

    //開いた状態にする
    $(".memo_active").show();
    $(".toggle_faq").hide();

});

function switch_memo(teamnumber){
    var teamname = document.getElementById( "teamname" + teamnumber);
    var teamsprit = teamname.innerHTML.split(" ");
    if( teamsprit[1] == "▲"){
        teamname.innerHTML = teamsprit[0] + " ▼";
    }else if( teamsprit[1] == "▼"){
        teamname.innerHTML = teamsprit[0] + " ▲";
    }
    $("#teamname" + teamnumber).toggleClass("active").next().slideToggle("normal");
    return false;
}


var localStorage = sessionStorage;

function getMemo(teams, id){

    var listname = "memolist" + id;
    var contents = JSON.parse(localStorage.getItem(listname));
    if( contents != null){
        for(var i = 0; i < teams.length; i++){
            var text = document.getElementById("memo" + (i + 1));
            text.value = contents[i];
        }
    }
}

function setMemo(teams, id){
    
    var memolist = {};
    for(var i = 0; i < teams.length; i++){
        var text = document.getElementById("memo" + (i + 1)).value;
        memolist[i] = text;
        var listname = "memolist" + id;
        localStorage.setItem(listname, JSON.stringify(memolist));
    }

    alert("メモの内容を保存しました。");

}