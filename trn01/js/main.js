// window.addEventListener('DOMContentLoaded',function (){
// document.querySelector('.header').style.display = 'none';
// )}

$(function () {
    $('.main_slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        vertical: true,
        dots: true
    });

    $('.mopen').on('click', function () {
        $('.gnb').toggleClass('on')
    })

    $('.mopen').on('click', function () {
        $('.mopen').toggleClass('on')
    })
})