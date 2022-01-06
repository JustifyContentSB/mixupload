"use strict";

$(document).ready(function(){
    // Your code here
    $('.header__time-toggle').on('click', function(e) {
        e.preventDefault();
        $('body').toggleClass('dark-theme');
        $('.theme-img').toggleClass('theme-img--visible');
    });
    
    if ($(window).width() < 1280) {
        $('.header__burger').on('click', function(e) {
            e.preventDefault();
            $('body').addClass('no-scroll');
            $('.menu').addClass('menu--active')
        });
    
        $('.menu__close').on('click', function(e) {
            e.preventDefault();
            $('body').removeClass('no-scroll');
            $('.menu').removeClass('menu--active')
        });

        $('.menu__link-arrow').on('click', function(e) {
            e.preventDefault();
            $(this).toggleClass('menu__link-arrow--active');
            $(this).parent('.menu__box').next('.menu__submenu').toggleClass('menu__submenu--active');
        });

        $('.menu__link-arrow--main').on('click', function(e) {
            $('.menu__link-genres').toggleClass('menu__link-genres--active')
        });
    
        // $('.menu__link-arrow').on('click', function(e) {
        //     e.preventDefault();
        //     $(this).toggleClass('menu__link-genres--active');
        //     $(this).siblings('.menu__submenu').toggleClass('menu__submenu--active')
        // });
    
        // $('.menu__submenu-item .menu__link').on('click', function(e) {
        //     e.preventDefault();
        //     $(this).toggleClass('menu__link--active');
        //     $(this).siblings('.menu__submenu-item__submenu').toggleClass('menu__submenu-item__submenu--active')
        // });
    }

    if($(window).width() >= 1280) {
        // $('.menu__box-1').on('mouseenter', function(e) {
        //     e.preventDefault();
        //     $('.menu__submenu').removeClass('menu__submenu--active');
        //     $(this).next('.menu__submenu').addClass('menu__submenu--active');
        // });

        // $('.menu__submenu .menu__box').on('mouseenter', function(e) {
        //     e.preventDefault();
        //     $(this).next('.menu__submenu').addClass('menu__submenu--active');
        // });

        // $('.menu__submenu .menu__box').on('mouseleave', function(e) {
        //     e.preventDefault();
        //     $(this).next('.menu__submenu').removeClass('menu__submenu--active');
        // });

        // $('.menu__box').on('mouseleave', function(e) {
        //     e.preventDefault();
        //     $('.menu__submenu').removeClass('menu__submenu--active');
        //     $(this).next('.menu__submenu').removeClass('menu__submenu--active');
        // });
    }
});

// Your functions here

