$(function() {
    // work-imgのhover時の変化
    $('.work-img').hover(
        function() {
            $(this).find('.mask').fadeIn();
            $(this).find('.caption').animate({ 'marginLeft': '100px' });
        },
        function() {
            $(this).find('.mask').fadeOut();
            $(this).find('.caption').animate({ 'marginLeft': '0' });
        }
    );
    // ナビのスムーズスクロール
    $('#profile-nav').click(function() {
        $('html, body').animate({
            'scrollTop': 800
        }, 500);
    });
    $('#works-nav').click(function() {
        $('html, body').animate({
            'scrollTop': 1230
        }, 500);
    });
    $('#contact-nav').click(function() {
        $('html, body').animate({
            'scrollTop': 1700
        }, 500);
    });

    $('header a').click(function() {
        var id = $(this).attr('href');
        var position = $(id).offset().top;
        $('html,body').animate({
            'scrollTop': position
        }, 500);
    });

    // トップページへの移動ボタン
    $(window).scroll(function() {
        if ($(this).scrollTop() > 70) {
            $('.page-top').fadeIn();
        } else {
            $('.page-top').fadeOut();
        }
    });
    $('.page-top').click(function() {
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });
    // spナビのクリックイベント
    $('#menu-icon').click(function() {
        if ($('#menu-icon').hasClass('open')) {
            $('.sp-header-nav').slideUp();
            $('#menu-icon').removeClass('open');
        } else {
            $('.sp-header-nav').slideDown();
            $('#menu-icon').addClass('open');
        }
    });
});
