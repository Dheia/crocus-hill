
+function ($) {
    var Plugins = {
        init: function () {
            $.FE.DefineIcon('add_bootstrap_columns', {NAME: 'columns', SVG_KEY: 'columns'});
            $.FE.RegisterCommand('add_bootstrap_columns', {
                title: 'Dodaj kolumny',
                type: 'dropdown',
                focus: false,
                undo: false,
                refreshAfterCallback: true,
                options: {
                    'v1': 'Dwie kolumny',
                    'v2': 'Cztery kolumny'
                },
                callback: function (cmd, val) {
                    if(val === 'v1') {
                        this.html.insert(
                            '<div class="row no-gutters">' +
                            '<div class="col-lg-6 col-md-12 col-left">' +
                            '<p><br /></p>' +
                            '</div>' +
                            '<div class="col-lg-6 col-md-12 col-right">' +
                            '<p><br /></p>' +
                            '</div>' +
                            '</div>'
                        );
                    }
                    else if (val === 'v2') {
                        this.html.insert(
                            '<div class="row">' +
                            '<div class="col-lg-3 col-md-12 col-left">' +
                            '<p></p>' +
                            '</div>' +
                            '<div class="col-lg-3 col-md-12 col-inside">' +
                            '<p></p>' +
                            '</div>' +
                            '<div class="col-lg-3 col-md-12 col-inside">' +
                            '<p></p>' +
                            '</div>' +
                            '<div class="col-lg-3 col-md-12 col-right">' +
                            '<p></p>' +
                            '</div>' +
                            '</div>'
                        );
                    }
                },
                // Callback on refresh.
                refresh: function ($btn) {
                    var isRow = this.selection.element().closest('.row');
                    if(isRow){
                        document.addEventListener('keydown', function(e){
                            e.stopImmediatePropagation();
                            if(e.ctrlKey && e.shiftKey && e.key=='Backspace'){
                                var selection = window.getSelection();
                                if (selection.rangeCount > 0) {
                                    var selObj = selection.getRangeAt(0).startContainer.parentNode;
                                }
                                var row = selObj.closest(".row");
                                row.remove();
                            }
                        });
                    }
                },
                // Callback on dropdown show.
                refreshOnShow: function ($btn, $dropdown) {
                    // console.log ('do refresh when show');
                }
            });

            $.oc.richEditorButtons.push('add_bootstrap_columns');
        }
    };

    $(document).on('render', function () {
        Plugins.init()
    })
}(jQuery);



