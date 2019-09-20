$(document).ready(function() {
    $(".form-area .textbox-area").val("");

    $(".form-area .textbox-area").on("focus", function() {
        $(this).addClass("focusCustom");
    });

    $(".form-area .textbox-area").on("blur", function() {
        if ($(this).val() == "") {
            $(this).removeClass("focusCustom");
        }
    });
});
