$(function () {

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

    $('.utube i:nth-of-type(1)').on('click',function(){
        $('#myMovie').YTPPlay();
    })


    $('.utube i:nth-of-type(2)').on('click',function(){
        $('#myMovie').YTPPause();
    })





})

