(function ($) {
    "use strict";

    $(window).load(function () {
        // will first fade out the loading animation 
        $("#loader").fadeOut("slow", function () {
            // will fade out the whole DIV that covers the website.
            $("#preloader").delay(300).fadeOut("slow");
        });
    });

    $('.scrollnav').on('click', function (e) {
        e.preventDefault();
        var target = e.target.attributes["href"].value;

        $([document.documentElement, document.body]).animate({
            scrollTop: $("#" + target).offset().top
        }, 800);
    });

})(jQuery);