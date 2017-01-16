/* show.js */
/* 表示の切り替え等をおこなう */

/* ファイル名を取得して表示 */
function showFilename(){

    var filename = document.getElementById("thumbnail_file").value;
    var view = document.getElementById("file_name");

    if(filename == ""){
        filename = "ファイルが選択されていません。";
    }

    view.innerHTML = filename;
}
function showPDFname(){

    var filenames = document.getElementById("pdf_file").value;
    var views = document.getElementById("pdf_name");
    console.log(views);
    if(filenames == ""){
        filenames = "ファイルが選択されていません。";
    }

    views.innerHTML = filenames;
}
