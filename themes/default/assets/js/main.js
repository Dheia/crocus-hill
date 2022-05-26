import LazyLoad from "vanilla-lazyload";
require("./rwd-checker");
require("./form-animation");

$(function() {
  const lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy",
    // aby użyć do elementów dodajemy klasę .lazy
    // zamiast src w img podajemy data-src
    // zamiast background-image podajemy data-bg
  });

  require("./cookie-bar");
  require("./animations");
  require("./counter-animation");
  require("./dropdown-menu");
  require("./mobile-menu");
  require("./sticky-header");
  require("./pop-up");
  require("./simple-lightbox");
  require("./sort");
  const anime = require('./anime');
  
  $(".gallery").each(function() {
    $(this)
      .find("a")
      .simpleLightbox();
  });
  
  if ($(".simplelightbox").length > 0) {
    $(".simplelightbox").simpleLightbox();
  }

  anime({
    targets: '.standard path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
  });
});
