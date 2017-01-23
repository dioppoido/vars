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

function getMemo(teams){

    var contents = JSON.parse(localStorage.getItem("memolist"));
    for(var i = 0; i < teams.length; i++){
        var text = document.getElementById("memo" + (i + 1));
        text.value = contents[i];
    }
}

function setMemo(teams){

    console.log(teams);
    var memolist = {};
    for(var i = 0; i < teams.length; i++){
        var text = document.getElementById("memo" + (i + 1)).value;
        memolist[i] = text;
        localStorage.setItem("memolist", JSON.stringify(memolist));
    }

    alert("メモの内容を保存しました。");

}