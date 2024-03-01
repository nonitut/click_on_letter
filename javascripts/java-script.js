$(document).ready(function() {
    $('.letter').click(function() {
        $(this).addClass('animated');
    });

    $('.letter.animation1').click(function() {
        $(this).toggleClass('rotate');
    });

    $('.letter.animation2').click(function() {
        $(this).toggleClass('scale');
    });

    $('.letter.animation3').click(function() {
        $(this).toggleClass('fade-out');
    });

    $('.letter.animation4').click(function() {
        $(this).toggleClass('move-up');
    });

    $('.letter').click(function() {
        if ($('.letter.animated').length === 4) {
            resetAnimations(); // колличество кликов можно заменить здесь
        }
    });

    function resetAnimations() {
        $('.letter').removeClass('animated rotate scale fade-out move-up');
    }
});

