$(document).ready(function() {
    if ($(window).width() < 767) {
        $('.filme').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.poster-dos-filmes'
        });
        $('.poster-dos-filmes').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.filme',
            dots: true,
            centerMode: true,
            focusOnSelect: true
        });
    } if ($(window).width() > 768 && $(window).width() < 1023) {
        $('.filme').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.poster-dos-filmes'
        });
        $('.poster-dos-filmes').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            asNavFor: '.filme',
            dots: true,
            centerMode: true,
            focusOnSelect: true
        });
    } else {
        $('.filme').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.poster-dos-filmes'
        });
        $('.poster-dos-filmes').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.filme',
            dots: true,
            centerMode: true,
            focusOnSelect: true
        });
    }
})

function menuClick() {
    const menuHamburg = document.querySelector('.header__menu')
    const secaoSite = document.querySelector('.trailer__trailers__filmes')
    const secaoHome = document.querySelector('.filmes__info')
    const bodyIndex = 'index.html'

    const classe = 'header__nav--is-inativo'
    const classeMargin = 'trailer__trailers__filmes--add-margin'
    const classeMarginHome = 'filmes__info--add-margin'
    
    menuHamburg.classList.toggle(classe)

    if (window.location.pathname.endsWith(bodyIndex)) {
        secaoHome.classList.toggle(classeMarginHome)
    } else {
        secaoSite.classList.toggle(classeMargin)
    }
    
}
