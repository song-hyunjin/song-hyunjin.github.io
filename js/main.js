$(function () {
    $('.main_slider').slick({
        arrows:false,
        dots: false,
        infinite: true,
        speed: 300,
        fade: true,
        cssEase: 'linear'
    });

    $('.mopen').on('click', function () {
        $('.gnb').toggleClass('on')
    })

    $('.mopen').on('click', function () {
        $('.mopen').toggleClass('on')
    })
})