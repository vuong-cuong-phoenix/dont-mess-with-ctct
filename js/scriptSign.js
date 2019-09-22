$(document).ready(function() {
    $(".input--grd-running input").val("");

    $(".input--grd-running input").on("focus", function() {
        $(this).addClass("focused");
    });

    $(".input--grd-running input").on("blur", function() {
        if ($(this).val() == "") {
            $(this).removeClass("focused");
        }
    });
});
