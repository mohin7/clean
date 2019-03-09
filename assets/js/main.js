/*global jQuery*/
jQuery(document).ready(function ($) {
    'use strict';

    // FOR SLICK NAV
    $('#menu').slicknav({
        label: '',
        brand: 'CLEAIN'

    });

    //====== CAROUSEL ACTIVE IN TESTIMONIAL AREA   =============== 
    $('.testimonial-wrapper').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        nav: true,
        autoplay: true,
        navText: ["<i class='fa fa-caret-left'></i>", "<i class='fa fa-caret-right'></i>"],
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
                nav: false,
                loop: true
            }
        }
    });

    //====== CAROUSEL ACTIVE IN WIDGERD AREA   =============== 
    $('.widgerd-inner').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        nav: true,
        autoplay: true,
        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: true
            },
            1000: {
                items: 1,
                nav: true,
                loop: true
            }
        }
    });
    
    //====== SEARCH AREA  =============== 
    $(".search-triger").on('click', function () {
        $(".search-bar-wrap").addClass("active");
    });

    $(".search-close").on('click', function () {
        $(".search-bar-wrap").removeClass("active");
    });

    //====== PROGRESS BAR AREA ===============
    $('.first.circle').circleProgress({
        value: '.75',
        fill: '#0099FF',
        size: 115,
        thickness: 4,
        startAngle: 55
    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('strong').html(Math.round(75 * progress) + '<i>%</i>');
    });

    $('.second.circle').circleProgress({
        value: '.9',
        fill: '#0099FF',
        size: 115,
        thickness: 4,
        startAngle: 55
    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('strong').html(Math.round(90 * progress) + '<i>%</i>');
    });

    //====== SCROLL ACTIVEA ===============
    $('html').smoothScroll(500);


    //====== COUNTER AREA ===============
    $('.count').counterUp({
        delay: '.9',
        time: 100
    });

    //====== HEAD ROOM JS ACTIVE ===============
    $("#header-area").headroom();


    // ===== SCROLL TO TOP ==== 
    var btn = $('#button-b-t');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });


});
