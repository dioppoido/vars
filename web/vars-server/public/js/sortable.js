/* sortable.js */
/* 発表順番の送信 */
    jQuery( function() {
        jQuery( '#jquery-ui-sortable' ) . sortable();
        jQuery( '#jquery-ui-sortable' ) . disableSelection();
        jQuery( '#submitSortable' ) . click( function() {
            var itemNames = '';
            var itemIDs = '';
            var items = new Array();
            jQuery( '#jquery-ui-sortable li' ) . map( function() {
                itemNames += jQuery( this ) . text() + '\n';
                itemIDs += jQuery( this ) .children( 'span' ) . text() + ',';
                items.push(jQuery( this ) .children( 'span' ) . text());
            } );
            document.forms.announceform.announce.value= items;
        } );
    } );
