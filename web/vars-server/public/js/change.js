/* eventcreate eventsetting ejs*/
function change_pass(obj){

    var status = obj.checked;
    var formname = obj.parentNode.parentNode.parentNode.parentNode.name;
    var passarea = document.forms[formname].passarea;

    if(status === true){
        $("#passarea").prop('disabled', false);
    }else if(status === false){
        $("#passarea").prop('disabled', true);
    }

}

/* fieldsetting.ejs */
function show_field(obj,teams){

    var idx = obj.selectedIndex;
    var value = obj.options[idx].value; // 値
    var text  = obj.options[idx].text;  // 表示テキスト
    console.log("値:" + value);
    console.log("テキスト:" + text);


    //参加チーム表示
    var teamnum = document.getElementById("teamnum");
    teamnum.innerHTML = "参加チーム数 : " + teams[value].length;

    //変更部門表示
    var teamname = document.getElementById("teamname");

    teamname.innerHTML = "";
    for(var i = 0; i < teams[value].length; i++){
        teamname.innerHTML += "<div class='team-line text-left'>"+ teams[value][i].Teamname + "  -  " + teams[value][i].Workname + "</div>";
    }


}
function change_field(obj, votes,allteams){

    var idx = obj.selectedIndex;
    console.log(obj.selectedIndex)
    var value = obj.options[idx].value; // 値
    var text  = obj.options[idx].text;  // 表示テキスト

    var field = document.getElementById("field-area");
    var check = document.getElementsByName("voteid");

    for( var i= 0; i < votes.length ; i++){
        if( allteams[idx].Department.indexOf(votes[i].Voteid) >= 0){ // checkon
            check[i].checked = true;
            $('#field' + i).bootstrapToggle('on');
        }else {
            check[i].checked = false;
            $('#field' + i).bootstrapToggle('off');
        }
    }

}
