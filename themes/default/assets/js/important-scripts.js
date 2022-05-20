window.$ = window.jQuery = require('jquery');

require('jquery-viewport-checker');
require('bootstrap');
require('leaflet');
require('slick-carousel');

$('.presentation__slider').slick({
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow: '<button class="slider-arrow slider-arrow_prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button class="slider-arrow slider-arrow_next"><i class="fas fa-chevron-right"></i></button>',
  });
