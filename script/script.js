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
    console.log(scroll);

    $(".headline").css({
        "transform": "translate(0%, " + scroll / 2.5 + "%)",
        "opacity": 1 - scroll / 300 + ""
    });
    $(".subhead").css({
        "transform": "translate(0%, " + scroll + "%)",
        "opacity": 1 - scroll / 300 + ""
    });


    if (scroll >= 600 && scroll <= 1000) {
        $(".typography-intro-wrapper").css({
            "transform": "translate(0%, " + (scroll - 600) / -10 + "%)",
            "opacity": (scroll - 600) / 300
        });
    } else if (scroll >= 1000) {
        $(".typography-intro-wrapper").css({
            "transform": "translate(0%, -39.8%)",

            "opacity": 1
        });
    }


    if (scroll >= 1000 && scroll <= 1800) {


        $(".section-product-opacity").css({
            "opacity": (scroll - 1450)  / 250

        });

        $(".section-product-opacity-zero").css({
            "opacity": 1 - (scroll - 1450)  / 250

        });
black
black
black
black
black
black
black
black
black
black
black
    }

    if (scroll >= 1100 && scroll <= 1800) {
        //console.log("hello" + scroll);

        $(".product-headline").css({

            "opacity": (scroll - 1300)  / 250 + 0.7,
            "transform": "translate(0%, " + (scroll - 1300) / -5 + "%)"
        });

    }

    // console.log(value);

    // $(".big-banner").css({
    //     "transform" : "translate(0%, " + scroll / 40 + "%)"
    // })
});