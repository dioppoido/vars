$(document).ready(function(){
    //開いた状態にする
    $(".memo_active").show();
    $(".toggle_faq").hide();
    $("div.switch").on("click" ,function(){
        $(this).toggleClass("active").next().slideToggle("normal");
        return false;
    });
});