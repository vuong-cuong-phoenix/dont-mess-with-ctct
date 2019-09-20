$.event.special.widthChanged = {
    remove: function() {
        $(this)
            .children("iframe.width-changed")
            .remove();
    },
    add: function() {
        var elm = $(this);
        var iframe = elm.children("iframe.width-changed");
        if (!iframe.length) {
            iframe = $("<iframe/>")
                .addClass("width-changed")
                .prependTo(this);
        }
        var oldWidth = elm.width();
        function elmResized() {
            var width = elm.width();
            if (oldWidth != width) {
                elm.trigger("widthChanged", [width, oldWidth]);
                oldWidth = width;
            }
        }

        var timer = 0;
        var ielm = iframe[0];
        (ielm.contentWindow || ielm).onresize = function() {
            clearTimeout(timer);
            timer = setTimeout(elmResized, 20);
        };
    }
};
