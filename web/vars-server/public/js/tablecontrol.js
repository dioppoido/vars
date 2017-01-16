/* tablecontrol.js */
/* 部門の編集を行う */

//グローバル変数 追加のボタンを押した時の処理と空白チェックで使用
    fieldcount =1;

/*
 * appendRow: テーブルに行を追加
 */
function appendRow()
{
    var objTBL = document.getElementById("field-tbl");
    if (!objTBL){
        return false;
    }

    fieldcount++;
    var count = objTBL.rows.length;

    // 最終行に新しい行を追加
    var row = objTBL.insertRow(count);

    // 列の追加
    var c1 = row.insertCell(0);
    var c2 = row.insertCell(1);
    var c3 = row.insertCell(2);
    var c4 = row.insertCell(3);
    var c5 = row.insertCell(4);
    /*
    // 各列にスタイルを設定
    c1.style.cssText = "text-align:right; width:40px;";
    c2.style.cssText = "";
    c3.style.cssText = "background-color: green; width:40px;";
    c4.style.cssText = "background-color: red; width:40px;";
    */
    // 各列に表示内容を設定
    c1.innerHTML = '<div class="text-center"><span class="fieldnumber">' + count + '</span></div>';
    c2.innerHTML = '<input type="text" id="field' + count + '" name="fieldname"  class="inputfield form-control" value="" >';
    c3.innerHTML = '<div class="text-center"><input class="btn btn-primary edit-btn" type="button" id="editbtn-' + count + '" value="確定" onclick="editRow(this)"></div>';
    c4.innerHTML = '<div class="text-center"><input type="button" class="btn btn-success append-btn" value="追加" onclick="appendRow()"></div>';
    c5.innerHTML = '<div class="text-center"><input class="btn btn-warning delete-btn" type="button" id="deletebtn-' + count + '" value="削除" onclick="deleteRow(this)"></div>';

    // 追加した行の入力フィールドへフォーカスを設定
    var objInp = document.getElementById("field" + count);
    if (objInp){
        objInp.focus();
    }

    return false;
}

/*
 * deleteRow: 削除ボタン該当行を削除
 */
function deleteRow(obj) {

    // 確認
    if (!confirm("この行を削除しますか？")){
        return;
    }

    if (!obj){
        return;
    }

    var objtr = obj.parentNode.parentNode.parentNode;
    var objtbl = objtr.parentNode.parentNode;
    var cnt = document.getElementById("field-tbl").rows.length;
    console.log(objtr);
    console.log(objtbl);
    console.log(cnt);
    if(objtbl){
        if(cnt < 3){
            alert("ERROR:　部門数が0になります。");
            return false;
        }else{
            objtbl.deleteRow(objtr.sectionRowIndex + 1);
        }

    }


    // <span> 行番号ふり直し
    var tagElements = document.getElementsByTagName("span");
    if (!tagElements){
        return false;
    }


    var seq = 1;
    for (var i = 0; i < tagElements.length; i++) {
        if (tagElements[i].className.match("fieldnumber")){
            tagElements[i].innerHTML = seq++;
        }

    }

    // id/name ふり直し
    var tagElements = document.getElementsByTagName("input");
    if (!tagElements){
        return false;
    }

    // <input type="text" id="txtN">
    var seq = 1;
    for (var i = 0; i < tagElements.length; i++) {
        if (tagElements[i].className.match("inputfield")) {
            tagElements[i].setAttribute("id", "field" + seq);
            tagElements[i].setAttribute("name", "fieldname");
            ++seq;
        }
    }

    // <input type="button" id="edtBtnN">
    seq = 1;
    for (var i = 0; i < tagElements.length; i++)
    {
        if (tagElements[i].className.match("edit-btn"))
        {
            tagElements[i].setAttribute("id", "editbtn-" + seq);
            ++seq;
        }
    }

    // <input type="button" id="delBtnN">
    seq = 1;
    for (var i = 0; i < tagElements.length; i++) {
        if (tagElements[i].className.match("delete-btn")) {
            tagElements[i].setAttribute("id", "deletebtn-" + seq);
            ++seq;
        }
    }
}

/*
 * editRow: 編集ボタン該当行の内容を入力・編集またモード切り替え
 */
function editRow(obj) {

    var objindex = obj.id.split("-");
    objindex = objindex[1];
    var objInp = document.getElementById("field" + objindex);
    var objBtn = document.getElementById(obj.id);
    if (!objInp || !objBtn){
        return;
    }

    // モードの切り替えはボタンの値で判定
    if (objBtn.value == "編集")
    {
        objInp.readOnly = false;
        objInp.focus();
        objBtn.value = "確定";
    }
    else if(objBtn.value == "確定"){
        objInp.readOnly = true;
        objBtn.value = "編集";
    }

}

/*
 * changeRow 部門変更で切り替え
 */

function changeRow(obj) {

    var objindex = obj.id.split("-");
    objindex = objindex[1];
    var objInp = document.getElementById("change" + objindex);
    var objBtn = document.getElementById(obj.id);
    if (!objInp || !objBtn){
        return;
    }

    // モードの切り替えはボタンの値で判定
    if (objBtn.value == "編集")
    {
        objInp.readOnly = false;
        objInp.focus();
        objBtn.value = "確定";
    }
    else if(objBtn.value == "確定"){
        objInp.readOnly = true;
        objBtn.value = "編集";
    }
}

//部門追加時に使用　空白チェック
function insertspaceCheck(){
    var flg = 0;
    for(var i = 1; i <= fieldcount; i++){
        var num = i;
        num.toString();
        if(document.getElementById("field" + num).value ==""){     //空白文字がないかチェック
            flg =1;
        }
    }
    if(flg){
        alert("部門追加で未入力項目があります");
        return false;
    }else{
        return true;
    }
}
//部門変更時に使用　空白チェック
function fixspaceCheck(votenum){
    console.log(votenum);
    var flg = 0;
    for(var i = 1; i <= votenum; i++){
        var num = i;
        num.toString();
        if(document.getElementById("change" + num).value ==""){     //空白文字がないかチェック
            flg =1;
        }
    }
    if(flg){
        alert("部門変更で未入力項目があります");
        return false;
    }else{
        return true;
    }
}
