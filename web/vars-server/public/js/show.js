/* show.js */
/* 表示の切り替え等をおこなう */

/* ファイル名を取得して表示 */
function showFilename(){

    var filename = document.getElementById("thumbnail_file").value;
    var view = document.getElementById("file_name");

    if(filename == ""){
        filename = "ファイルが選択されていません。";
    }
    else{
      if(document.teamcreate || document.eventsetting || document.eventcreate){
        filename =  $("#thumbnail_file")[0].files[0].name;
      }else{
        filename="";
      }
    }
    view.innerHTML = filename;
}

function showPDFname(){

    var filename = document.getElementById("pdf_file").value;
    var views = document.getElementById("pdf_name");

    if(filename == ""){
      filename = "ファイルが選択されていません。";
    }
    else{
      filename = "";

    }

    views.innerHTML = filename;
}



function fileview(name,view){
  document.getElementById( "thumbnail_file" ).addEventListener( "change", function() {
	// フォームで選択された全ファイルを取得
	var fileList = this.files ;
  var filename = $("#thumbnail_file")[0].files[0].name;

	// 個数分の画像を表示する
	for( var i=0,l=fileList.length; l>i; i++ ) {
		// [FileReader]クラスを起動
		var fileReader = new FileReader() ;

		// 読み込み後の処理を決めておく
		fileReader.onload = function() {
			// データURIを取得
			var dataUri = this.result ;
      console.log(dataUri);
			// HTMLに書き出し (src属性にデータURIを指定)
			// document.getElementById( "file_view" ).innerHTML += '<img src="' + dataUri + '">' ;
      document.getElementById( "file_view" ).innerHTML = "<a href="+dataUri +"  "+"target='_blank'>"+filename+"</a>" ;

		}

		// ファイルをデータURIとして読み込む
		fileReader.readAsDataURL( fileList[i] ) ;
	}
  });
}
function pdfview(name,view){
  document.getElementById( "pdf_file" ).addEventListener( "change", function() {
	// フォームで選択された全ファイルを取得
	var fileList = this.files ;
  var filename = $("#pdf_file")[0].files[0].name;

	// 個数分の画像を表示する
	for( var i=0,l=fileList.length; l>i; i++ ) {
		// [FileReader]クラスを起動
		var fileReader = new FileReader() ;

		// 読み込み後の処理を決めておく
		fileReader.onload = function() {
			// データURIを取得
			var dataUri = this.result ;
      console.log(dataUri);
			// HTMLに書き出し (src属性にデータURIを指定)
			// document.getElementById( "file_view" ).innerHTML += '<img src="' + dataUri + '">' ;
      document.getElementById( "pdf_view" ).innerHTML = "<a href="+dataUri +"  "+"target='_blank'>"+filename+"</a>" ;

		}

		// ファイルをデータURIとして読み込む
		fileReader.readAsDataURL( fileList[i] ) ;
	}
  });
}
