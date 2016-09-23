jQuery(document).ready(function($) {
    /**
     * クリックによる開閉
     */
    // 基本的にページ内のどこをクリックしても全てのサブメニューを閉じるようにしておく。
    $(document).click(function() { $('#event-menu > li > ul').slideUp() });

    $('#event-menu > li').click(function(ev) {
        var sub = $(this).children('ul');
        if ($(sub).is(':hidden')) {
            // 今回はこれからサブメニューを開きたい項目をクリックしているので、
            // 上記の全てのサブメニューを閉じるイベントを発火させてはならない。
            // よって、イベントのバブリングを中止する。
            ev.stopPropagation();

            // 他に開いているサブメニューを閉じる。
            // 開いたままでもよければ、下の1行は必要ない。
            $('#event-menu > li > ul:visible').slideUp();

            $(sub).slideDown();
        }
    });
    // クリックによる開閉の場合、親メニューの<a>要素の機能は必要ないので無効にする。
    $('#event-menu > li > a').click(function(ev) { ev.preventDefault() });

    /**
     * マウスホバーによる開閉
     */
    // $('#menu > li').hover(
    // 	function(){ $(this).children('ul').slideDown() },
    // 	function(){ $(this).children('ul').slideUp() }
    // );
});