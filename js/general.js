$(document).ready(function() {
    //dropdown-arrow
    $(".nav-list li").each(function() {
        if ($(this).hasClass("has-sub-menu")) {
            $(this).append('<i class="dropdown-arrow"></i>');
        }
    });

    /* $("li.has-sub-menu").click(function() {
         if ($(window).innerWidth() < 768) {
             var attr = $(this).children("a").attr('href');
             if (typeof attr !== typeof undefined && attr !== false) {
                 $(this).children("a").removeAttr("href");
             } else {
                 if ($(this).children(".sub-menu").is(":visible")) {
                     $(this).children("a").attr("href", "https://code.jquery.com/jquery-1.12.4.min.js");
                 } else {
                     $(this).children("a").removeAttr("href");
                 }
             }

             $(".sub-menu").click(function(event) {
                 event.stopPropagation();
             });

             if ($(this).children(".sub-menu").is(":visible")) {
                 $(this).find(".sub-menu").slideUp();
                 $(this).find(".dropdown-arrow").removeClass("rotate");

             } else {
                 $(this).find(".sub-menu").slideDown();
                 $(this).siblings(".has-sub-menu").find(".sub-menu").slideUp();
                 $(this).siblings().find(".dropdown-arrow").removeClass("rotate");
                 $(this).find(".dropdown-arrow").addClass("rotate");
             }
         } else {
             $(".sub-menu").css({ 'display': '' });
         }
     }); */

     $("li.has-sub-menu>a").click(function(event) {
        if ($(window).innerWidth() < 768) {
            if ($(this).siblings(".sub-menu").is(":visible")) {
                $(this).siblings(".sub-menu").slideUp();
                $(this).siblings(".dropdown-arrow").removeClass("rotate");

            } else {
                event.preventDefault();
                $(this).siblings(".sub-menu").slideDown();
                $(this).parent().siblings(".has-sub-menu").find(".sub-menu").slideUp();
                $(this).parent().siblings(".has-sub-menu").find(".dropdown-arrow").removeClass("rotate");
                $(this).siblings(".dropdown-arrow").addClass("rotate");
            }
        } else {
            $(".sub-menu").css({ 'display': '' });
        }
    });

    //hamburg-menu
    $(".hamburg-menu").click(function() {
        $("html,body").toggleClass("overlay");
        $(".header-menu").toggleClass("open");
        if ($(window).innerWidth() < 768) {
            if ($(".sub-menu").is(":visible")) {
                $(".sub-menu").slideUp();
                $(".dropdown-arrow").removeClass("rotate");
            }
        }
    });

    deskNav();


    /*-------- To add active link in menu start -------*/
    
    // var url = $(location).attr('href'),
    // parts = url.split("/"),
    // last_part = parts[parts.length - 1];
    // $(".menu-navigation li").each(function() {
    //     if ($(this).children("a").attr("href") == last_part) {
    //         $(this).addClass("active-page");
    //     }
    // });

    // $(".menu-navigation li.has-megamenu .sub-menu>li").each(function() {
    //     if ($(this).hasClass("active-page")) {
    //         $(this).parents(".has-megamenu").addClass("active-page");
    //     }
    // });



    //resize-function
    $(window).resize(function() {
        deskNav();
        if ($(window).innerWidth() < 768) {} else {
            $(".sub-menu").css({ 'display': '' });
        }
    });

});

function deskNav() {
    if ($(window).innerWidth() > 767) {
        $(".nav-list").addClass("desk-nav");
    } else {
        $(".nav-list").removeClass("desk-nav");
    }
}