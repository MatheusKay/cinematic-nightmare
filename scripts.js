document.addEventListener('DOMContentLoaded', function() {
    $(document).ready(function() {
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
    })
})

/*
$('#poster-dos-filmes').slick({
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 3,
            responsive: [
                {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
                },
                {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
                }
            ]
        });
*/