/**
 * Created by Meritto on 16.05.2018.
 */


// window.onscroll = function () {
//
//     var scrolled = window.pageYOffset || document.documentElement.scrollTop;
//     var headline = document.getElementsByClassName('headline');
//
//     // headline.cssText = "transform: translate(0%, " + scrolled + "%)";
//     headline.style.transform = "translateX(" + scrolled + "%)";
// };

var value = 250;


$(window).scroll(function () {


    var scroll = $(this).scrollTop();
    //console.log(scroll);

    $(".headline").css({
        "transform": "translate(0%, " + scroll / 2.5 + "%)",
        "opacity": 1 - scroll / 300 + ""
    });
    console.log("hello" + scroll);

    $(".subhead").css({
        "transform": "translate(0%, " + scroll + "%)",
        "opacity": 1 - scroll / 300 + ""
    });


    if (scroll >= 550 && scroll <= 1000) {
        $(".typography-intro-wrapper").css({
            "transform": "translate(0%, " + (scroll - 550) / -10 + "%)",
            "opacity": (scroll - 600) / 300
        });
    }

    if (scroll >= 1100 && scroll <= 1400) {
        $(".section-product-opacity").css({
            "opacity": (scroll - 1100)  / 300

        });

        $(".section-product-opacity-zero").css({
            "opacity": 1 - (scroll - 1100)  / 300

        });

    }


    // console.log(value);

    // $(".big-banner").css({
    //     "transform" : "translate(0%, " + scroll / 40 + "%)"
    // })
});