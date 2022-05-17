$(function () {

    $('.popup button').on('click', function () {
        $(this).parent().hide();
    })


    $(document).ready(function () {
        $(".baby_menu").hide();
        $(".king_menu>a").click(function () {
            $(this).next().slideToggle(300);
            $(".king_menu>a").not(this).next().slideUp(300);
            return false;
        });
    });


    $('.mbtn').on('click', function () {
        $('.gnb').toggleClass('on')
        $(this).toggleClass('is-active')
    })


    // $(".menu>li>a").click(function () {
    //     $(this).next("p").slideToggle(200);
    //     $(this).parent("li").siblings("li").children("p").slideUp(200);
    // });

    $('.menu1').click(function () {
        $('.menu2').slideUp();
        if ($(this).children('.menu2').is(':hidden')) {
            $(this).children('.menu2').slideDown();
        } else {
            $(this).children('.menu2').slideUp();
        }
    });


    $('.main_event_slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $("#myMovie").YTPlayer({
        videoURL: 'https://youtu.be/vZ0sZffLwnA',
        containment: '.utube',
        autoPlay: true,
        mute: true,
        startAt: 0,
        opacity: 1,
        showControls: false,
        playOnlyIfVisible: true,
    });

    $('.utube i:nth-of-type(1)').on('click', function () {
        $('#myMovie').YTPPlay();
    })


    $('.utube i:nth-of-type(2)').on('click', function () {
        $('#myMovie').YTPPause();
    })


    $('.main_menu li').on('click', function () {
        var idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.menu_slider_wrapper .menu_slider').eq(idx).addClass('on').siblings().removeClass('on');
    });


    // $(a).on('clilk', fun(){
    //     if($(n).hasClass('on')){
    //         this.next().slto()
    //     }

    // })

    // $('.king_menu>a').on('click', function () {

    //     $(this).next().slideToggle();
    //     $(this).siblings().slideUp();
    // })




})

