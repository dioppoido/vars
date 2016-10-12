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