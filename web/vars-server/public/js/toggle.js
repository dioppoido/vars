/* Slide Toggle */

function synthesisToggle(){

    var show = document.getElementById("show-btn");
    if( show.innerHTML == "もっと見る"){
        show.innerHTML = "閉じる";
    }else if( show.innerHTML == "閉じる"){
        show.innerHTML = "もっと見る";
    }
    $('.hide-rank').slideToggle('fast');

}
