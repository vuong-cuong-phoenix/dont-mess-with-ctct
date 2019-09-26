$(document).ready(function() {
    $(window).scroll(function() {
        /*-- Back to top --*/
        if ($(this).scrollTop() > 20) {
            $("#btnToTop").fadeIn();
        } else {
            $("#btnToTop").fadeOut();
        }

        /*-- NavBar scroll --*/
        if ($(this).scrollTop() <= 100) {
            $(".navbar").attr("style", "background: transparent");
        } else {
            $(".navbar").attr("style", "background: #343A40");
        }
    });

    if ($(this).scrollTop() <= 100) {
        $(".navbar").attr("style", "background: transparent");
    } else {
        $(".navbar").attr("style", "background: #343A40");
    }

    $("#btnToTop").click(function() {
        $("html, body").animate({ scrollTop: 0 }, 500);
        return false;
    });

    /*-- Side Bar --*/
    $(".sidebar-custom").mCustomScrollbar({
        theme: "minimal"
    });

    $("#sidebar-custom_collapse").on("click", function() {
        $(".sidebar-custom, .content-main, .navbar").toggleClass("active");
    });

    $(".cCard-header").photoZoom();

    // /*--- Equal-height Column ---*/
    // $(window).resize(function() {
    //     var lectureVideo_height = $("#lecture-video").height();
    //     var lectureTabsHeader_height = $("#lecture-tabs").height();
    //     $("#lecture-tabs-content").css({
    //         height: lectureVideo_height - lectureTabsHeader_height
    //     });
    // });
});
