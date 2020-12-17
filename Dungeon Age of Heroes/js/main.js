//WOW
new WOW().init();

$(document).ready(function() {
    //MagnificPopup
    $('.popup-youtube').magnificPopup({
        disableOn: 320,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });

    //Swipper
    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        direction: 'horizontal',
        speed: 1000,
        effect: 'coverflow',
        loop: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 0,
            stretch: 40,
            depth: 150,
            modifier: 1,
            slideShadows: false
        }
    });

    //HeaderSticky
    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".main-header").removeClass("sticky");
        } else {
            $(".main-header").addClass("sticky");
        }
    });

    //Menu active link switching
    var scrollLink = $('.page-link');
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {

            var sectionOffset = $(this.hash).offset().top - 73;

            if (sectionOffset <= scrollbarLocation) {
                $('.page-link').removeClass('active');
                $(this).addClass('active');
            }

            if (scrollbarLocation >= 500){
                $(".button-to-top").addClass('btntop-active');
            }else{
                $(".button-to-top").removeClass('btntop-active');
            }
        });
    });

    //Scrolling after click
    $(".page-link").on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 65
        }, 650);
        e.preventDefault();
        return false;
    });

    //ButtonToTop
    $(".button-to-top").on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 65
        }, 650);
        e.preventDefault();
        return false;
    });

    $(window).scroll(function () { {
        if ($(this).scrollTop() >= 600) {
            $('.button-to-top').fadeIn(200)
        } else {
            $('.button-to-top').fadeOut(200)
        }
    }});

    var toggle = false;
    $(".navbar-toggler").on("click", function (e) {
        if (!toggle){
            $(".toggler-icon").first().css('transform', 'rotate(45deg) translateX(6px)');
            $(".toggler-icon").last().css('transform', 'rotate(-45deg) translateX(6px)');
            $(".toggler-icon").eq(1).css('display', 'none');
            $(".main-menu__items").removeClass('mobile-active');
            $(".main-menu__items").addClass('mobile-active');
            toggle = true;
        }else{
            $(".toggler-icon").first().css('transform', 'rotate(0deg)');
            $(".toggler-icon").last().css('transform', 'rotate(0deg)');
            $(".toggler-icon").eq(1).css('display', 'block');
            $(".main-menu__items").removeClass('mobile-active');
            toggle = false;
        }
    });

});
