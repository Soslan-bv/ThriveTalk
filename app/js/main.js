$(function () {
    $('.header__link').click(function () {
        $('.header__link').removeClass('active')
        $(this).addClass('active')
    })
    $('.burger').click(function () {
        $('.burger, .menu, body').toggleClass('active')
    })
    // $('.burger').click(function () {
    //     $('body').toggleClass('lock')
    // })
    $('.header__link').click(function () {
        $('.burger, .menu, body').removeClass('active')
        // $('.body').removeClass('lock')
    })
});