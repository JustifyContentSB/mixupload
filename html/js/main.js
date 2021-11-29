"use strict";

$(document).ready(function () {
  // Your code here
  $('.header__time-toggle').on('click', function (e) {
    e.preventDefault();
    $('body').toggleClass('dark-theme');
    $('.theme-img').toggleClass('theme-img--visible');
  });

  if ($(window).width() < 1280) {
    $('.header__burger').on('click', function (e) {
      e.preventDefault();
      $('body').addClass('no-scroll');
      $('.menu').addClass('menu--active');
    });
    $('.menu__close').on('click', function (e) {
      e.preventDefault();
      $('body').removeClass('no-scroll');
      $('.menu').removeClass('menu--active');
    });
    $('.menu__link-genres').on('click', function (e) {
      e.preventDefault();
      $(this).toggleClass('menu__link-genres--active');
      $(this).siblings('.menu__submenu').toggleClass('menu__submenu--active');
    });
    $('.menu__submenu-item .menu__link').on('click', function (e) {
      e.preventDefault();
      $(this).toggleClass('menu__link--active');
      $(this).siblings('.menu__submenu-item__submenu').toggleClass('menu__submenu-item__submenu--active');
    });
  }
}); // Your functions here