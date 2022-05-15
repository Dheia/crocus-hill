/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vanilla-lazyload/dist/lazyload.min.js":
/*!************************************************************!*\
  !*** ./node_modules/vanilla-lazyload/dist/lazyload.min.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,n){ true?module.exports=n():undefined}(this,(function(){"use strict";function t(){return(t=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t}).apply(this,arguments)}var n="undefined"!=typeof window,e=n&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),i=n&&"IntersectionObserver"in window,o=n&&"classList"in document.createElement("p"),a=n&&window.devicePixelRatio>1,r={elements_selector:"img",container:e||n?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",load_delay:0,auto_unobserve:!0,cancel_on_exit:!1,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1},c=function(n){return t({},r,n)},l=function(t,n){var e,i=new t(n);try{e=new CustomEvent("LazyLoad::Initialized",{detail:{instance:i}})}catch(t){(e=document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized",!1,!1,{instance:i})}window.dispatchEvent(e)},s=function(t,n){return t.getAttribute("data-"+n)},u=function(t,n,e){var i="data-"+n;null!==e?t.setAttribute(i,e):t.removeAttribute(i)},d=function(t){return s(t,"ll-status")},f=function(t,n){return u(t,"ll-status",n)},_=function(t){return f(t,null)},g=function(t){return null===d(t)},v=function(t){return"delayed"===d(t)},b=["loading","applied","loaded","error"],p=function(t){return b.indexOf(d(t))>-1},m=function(t,n){return u(t,"ll-timeout",n)},h=function(t){return s(t,"ll-timeout")},E=function(t,n,e,i){t&&(void 0===i?void 0===e?t(n):t(n,e):t(n,e,i))},y=function(t,n){o?t.classList.add(n):t.className+=(t.className?" ":"")+n},L=function(t,n){o?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\s+)"+n+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},I=function(t){return t.llTempImage},k=function(t,n,e){if(e){var i=e._observer;i&&n.auto_unobserve&&i.unobserve(t)}},A=function(t){t&&(t.loadingCount+=1)},w=function(t){for(var n,e=[],i=0;n=t.children[i];i+=1)"SOURCE"===n.tagName&&e.push(n);return e},z=function(t,n,e){e&&t.setAttribute(n,e)},C=function(t,n){t.removeAttribute(n)},O=function(t){return!!t.llOriginalAttrs},x=function(t){if(!O(t)){var n={};n.src=t.getAttribute("src"),n.srcset=t.getAttribute("srcset"),n.sizes=t.getAttribute("sizes"),t.llOriginalAttrs=n}},N=function(t){if(O(t)){var n=t.llOriginalAttrs;z(t,"src",n.src),z(t,"srcset",n.srcset),z(t,"sizes",n.sizes)}},M=function(t,n){z(t,"sizes",s(t,n.data_sizes)),z(t,"srcset",s(t,n.data_srcset)),z(t,"src",s(t,n.data_src))},R=function(t){C(t,"src"),C(t,"srcset"),C(t,"sizes")},T=function(t,n){var e=t.parentNode;e&&"PICTURE"===e.tagName&&w(e).forEach(n)},G={IMG:function(t,n){T(t,(function(t){x(t),M(t,n)})),x(t),M(t,n)},IFRAME:function(t,n){z(t,"src",s(t,n.data_src))},VIDEO:function(t,n){w(t).forEach((function(t){z(t,"src",s(t,n.data_src))})),z(t,"poster",s(t,n.data_poster)),z(t,"src",s(t,n.data_src)),t.load()}},S=function(t,n,e){var i=G[t.tagName];i&&(i(t,n),A(e),y(t,n.class_loading),f(t,"loading"),E(n.callback_loading,t,e),E(n.callback_reveal,t,e))},j=["IMG","IFRAME","VIDEO"],D=function(t){t&&(t.loadingCount-=1)},F=function(t,n){!n||n.toLoadCount||n.loadingCount||E(t.callback_finish,n)},P=function(t,n,e){t.addEventListener(n,e),t.llEvLisnrs[n]=e},V=function(t,n,e){t.removeEventListener(n,e)},U=function(t){return!!t.llEvLisnrs},$=function(t){if(U(t)){var n=t.llEvLisnrs;for(var e in n){var i=n[e];V(t,e,i)}delete t.llEvLisnrs}},q=function(t,n,e){!function(t){delete t.llTempImage}(t),D(e),L(t,n.class_loading),k(t,n,e)},H=function(t,n,e){var i=I(t)||t;if(!U(i)){!function(t,n,e){U(t)||(t.llEvLisnrs={}),P(t,"load",n),P(t,"error",e),"VIDEO"===t.tagName&&P(t,"loadeddata",n)}(i,(function(o){!function(t,n,e,i){q(n,e,i),y(n,e.class_loaded),f(n,"loaded"),E(e.callback_loaded,n,i),F(e,i)}(0,t,n,e),$(i)}),(function(o){!function(t,n,e,i){q(n,e,i),y(n,e.class_error),f(n,"error"),E(e.callback_error,n,i),F(e,i)}(0,t,n,e),$(i)}))}},B=function(t){t&&(t.toLoadCount-=1)},J=function(t,n,e){!function(t){t.llTempImage=document.createElement("img")}(t),H(t,n,e),function(t,n,e){var i=s(t,n.data_bg),o=s(t,n.data_bg_hidpi),r=a&&o?o:i;r&&(t.style.backgroundImage='url("'.concat(r,'")'),I(t).setAttribute("src",r),A(e),y(t,n.class_loading),f(t,"loading"),E(n.callback_loading,t,e),E(n.callback_reveal,t,e))}(t,n,e),function(t,n,e){var i=s(t,n.data_bg_multi),o=s(t,n.data_bg_multi_hidpi),r=a&&o?o:i;r&&(t.style.backgroundImage=r,y(t,n.class_applied),f(t,"applied"),k(t,n,e),E(n.callback_applied,t,e))}(t,n,e)},K=function(t,n,e){!function(t){return j.indexOf(t.tagName)>-1}(t)?J(t,n,e):function(t,n,e){H(t,n,e),S(t,n,e)}(t,n,e),B(e),F(n,e)},Q=function(t){var n=h(t);n&&(v(t)&&_(t),clearTimeout(n),m(t,null))},W=function(t,n,e,i){"IMG"===t.tagName&&($(t),function(t){T(t,(function(t){R(t)})),R(t)}(t),function(t){T(t,(function(t){N(t)})),N(t)}(t),L(t,e.class_loading),D(i),E(e.callback_cancel,t,n,i),setTimeout((function(){i.resetElementStatus(t,i)}),0))},X=function(t,n,e,i){E(e.callback_enter,t,n,i),p(t)||(e.load_delay?function(t,n,e){var i=n.load_delay,o=h(t);o||(o=setTimeout((function(){K(t,n,e),Q(t)}),i),f(t,"delayed"),m(t,o))}(t,e,i):K(t,e,i))},Y=function(t,n,e,i){g(t)||(e.cancel_on_exit&&function(t){return"loading"===d(t)}(t)&&W(t,n,e,i),E(e.callback_exit,t,n,i),e.load_delay&&v(t)&&Q(t))},Z=["IMG","IFRAME"],tt=function(t){return t.use_native&&"loading"in HTMLImageElement.prototype},nt=function(t,n,e){t.forEach((function(t){-1!==Z.indexOf(t.tagName)&&(t.setAttribute("loading","lazy"),function(t,n,e){H(t,n,e),S(t,n,e),B(e),f(t,"native"),F(n,e)}(t,n,e))})),e.toLoadCount=0},et=function(t){var n=t._settings;i&&!tt(t._settings)&&(t._observer=new IntersectionObserver((function(e){!function(t,n,e){t.forEach((function(t){return function(t){return t.isIntersecting||t.intersectionRatio>0}(t)?X(t.target,t,n,e):Y(t.target,t,n,e)}))}(e,n,t)}),function(t){return{root:t.container===document?null:t.container,rootMargin:t.thresholds||t.threshold+"px"}}(n)))},it=function(t){return Array.prototype.slice.call(t)},ot=function(t){return t.container.querySelectorAll(t.elements_selector)},at=function(t){return function(t){return"error"===d(t)}(t)},rt=function(t,n){return function(t){return it(t).filter(g)}(t||ot(n))},ct=function(t){var n,e=t._settings;(n=ot(e),it(n).filter(at)).forEach((function(t){L(t,e.class_error),_(t)})),t.update()},lt=function(t,e){var i;this._settings=c(t),this.loadingCount=0,et(this),i=this,n&&window.addEventListener("online",(function(t){ct(i)})),this.update(e)};return lt.prototype={update:function(t){var n,o,a=this._settings,r=rt(t,a);(this.toLoadCount=r.length,!e&&i)?tt(a)?nt(r,a,this):(n=this._observer,o=r,function(t){t.disconnect()}(n),function(t,n){n.forEach((function(n){t.observe(n)}))}(n,o)):this.loadAll(r)},destroy:function(){this._observer&&this._observer.disconnect(),delete this._observer,delete this._settings,delete this.loadingCount,delete this.toLoadCount},loadAll:function(t){var n=this,e=this._settings;rt(t,e).forEach((function(t){K(t,e,n)}))},resetElementStatus:function(t){!function(t,n){p(t)&&function(t){t&&(t.toLoadCount+=1)}(n),f(t,null)}(t,this)},load:function(t){K(t,this._settings,this)}},lt.load=function(t,n){var e=c(n);K(t,e)},n&&function(t,n){if(n)if(n.length)for(var e,i=0;e=n[i];i+=1)l(t,e);else l(t,n)}(lt,window.lazyLoadOptions),lt}));


/***/ }),

/***/ "./themes/default/assets/js/animations.js":
/*!************************************************!*\
  !*** ./themes/default/assets/js/animations.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$('.post').addClass("invisible").viewportChecker({
  classToAdd: 'visible animated fadeIn',
  classToRemove: 'invisible',
  offset: 100
});
$('.post-up').addClass("invisible").viewportChecker({
  classToAdd: 'visible animated fadeInUp',
  classToRemove: 'invisible',
  offset: 100
});
$('.post-left').addClass("invisible").viewportChecker({
  classToAdd: 'visible animated fadeInLeft',
  classToRemove: 'invisible',
  offset: 100
});
$('.post-right').addClass("invisible").viewportChecker({
  classToAdd: 'visible animated fadeInRight',
  classToRemove: 'invisible',
  offset: 100
});
$('.post-down').addClass("invisible").viewportChecker({
  classToAdd: 'visible animated fadeInDown',
  classToRemove: 'invisible',
  offset: 100
});
$('.post-zoom').addClass("invisible").viewportChecker({
  classToAdd: 'visible animated zoomIn',
  classToRemove: 'invisible',
  offset: 100
});

/***/ }),

/***/ "./themes/default/assets/js/cookie-bar.js":
/*!************************************************!*\
  !*** ./themes/default/assets/js/cookie-bar.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var cookieName = 'cookie-accept';

if (getCookie(cookieName)) {
  removeCookieBar();
} else {
  $('.cookie').show();
  $('.cookie__accept').on("click", function (e) {
    e.preventDefault();
    removeCookieBar();
    setCookie(cookieName, true, 30);
  });
}

function removeCookieBar() {
  var siteWrapper = $('.site-wrapper');
  var cookieBar = $('.cookie');

  if (siteWrapper.hasClass('site-wrapper--cookie')) {
    siteWrapper.removeClass('site-wrapper--cookie');
  }

  if (cookieBar.length) {
    cookieBar.remove();
  }
}

function setCookie(name, value, days) {
  var expires = "";

  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }

  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) == ' ') {
      c = c.substring(1, c.length);
    }

    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }

  return null;
}

/***/ }),

/***/ "./themes/default/assets/js/counter-animation.js":
/*!*******************************************************!*\
  !*** ./themes/default/assets/js/counter-animation.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Przykłdowe użycie
// <span class="counter" data-target="300" data-speed="150">0</span>
// data-speed - atrybut opcjonalny, domyślnie 200
$('.counter').viewportChecker({
  offset: 100,
  callbackFunction: function callbackFunction(elem) {
    var speed = 200;
    var counter = elem[0];

    if (counter.getAttribute('data-speed')) {
      speed = counter.getAttribute('data-speed');
    }

    var updateCount = function updateCount() {
      var countTo = +counter.getAttribute('data-target');
      var countFrom = +counter.innerText;
      var inc = countTo / speed;

      if (countFrom < countTo) {
        counter.innerText = countFrom + inc;
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = countTo;
      }
    };

    updateCount();
  }
});

/***/ }),

/***/ "./themes/default/assets/js/dropdown-menu.js":
/*!***************************************************!*\
  !*** ./themes/default/assets/js/dropdown-menu.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*dropdown menu*/
$('.header__menuItem--hasSubmenu > .header__menuLink').on("click", function (e) {
  e.preventDefault();
  var subMenu = $(this).siblings(".header__submenu");

  if (subMenu.hasClass("header__submenu--hidden")) {
    console.log('test');
    $(".header__submenu").addClass("header__submenu--hidden");
    $(".header__menuItem--hasSubmenu > .header__menuLink").removeClass("header__menuLink--open");
    $(this).addClass("header__menuLink--open");
    subMenu.removeClass("header__submenu--hidden");
  } else {
    $(".header__submenu").addClass("header__submenu--hidden");
    $(this).removeClass("header__menuLink--open");
    subMenu.addClass("header__submenu--hidden");
  }
});
$('body').click(function (e) {
  if ($(e.target).closest('.header__nav').length === 0) {
    $(".header__menuItem--hasSubmenu > .header__menuLink").removeClass("header__menuLink--open");
    $(".header__submenu").addClass("header__submenu--hidden");
  }
});

/***/ }),

/***/ "./themes/default/assets/js/form-animation.js":
/*!****************************************************!*\
  !*** ./themes/default/assets/js/form-animation.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(window).on('load', function () {
  $(".form__input").val("");
  $(".form__input").focusout(function () {
    if ($(this).val() != "") {
      $(this).addClass("form__input--has-content");
    } else {
      $(this).removeClass("form__input--has-content");
    }
  });
});

/***/ }),

/***/ "./themes/default/assets/js/main.js":
/*!******************************************!*\
  !*** ./themes/default/assets/js/main.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vanilla-lazyload */ "./node_modules/vanilla-lazyload/dist/lazyload.min.js");
/* harmony import */ var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vanilla_lazyload__WEBPACK_IMPORTED_MODULE_0__);


__webpack_require__(/*! ./rwd-checker */ "./themes/default/assets/js/rwd-checker.js");

__webpack_require__(/*! ./form-animation */ "./themes/default/assets/js/form-animation.js");

$(function () {
  var lazyLoadInstance = new vanilla_lazyload__WEBPACK_IMPORTED_MODULE_0___default.a({
    elements_selector: ".lazy" // aby użyć do elementów dodajemy klasę .lazy
    // zamiast src w img podajemy data-src
    // zamiast background-image podajemy data-bg

  });

  __webpack_require__(/*! ./cookie-bar */ "./themes/default/assets/js/cookie-bar.js");

  __webpack_require__(/*! ./animations */ "./themes/default/assets/js/animations.js");

  __webpack_require__(/*! ./counter-animation */ "./themes/default/assets/js/counter-animation.js");

  __webpack_require__(/*! ./dropdown-menu */ "./themes/default/assets/js/dropdown-menu.js");

  __webpack_require__(/*! ./mobile-menu */ "./themes/default/assets/js/mobile-menu.js");

  __webpack_require__(/*! ./sticky-header */ "./themes/default/assets/js/sticky-header.js");

  __webpack_require__(/*! ./pop-up */ "./themes/default/assets/js/pop-up.js");

  __webpack_require__(/*! ./simple-lightbox */ "./themes/default/assets/js/simple-lightbox.js");

  $(".gallery").each(function () {
    $(this).find("a").simpleLightbox();
  });

  if ($(".simplelightbox").length > 0) {
    $(".simplelightbox").simpleLightbox();
  }
});

/***/ }),

/***/ "./themes/default/assets/js/mobile-menu.js":
/*!*************************************************!*\
  !*** ./themes/default/assets/js/mobile-menu.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* mobile menu */
$('.header__hamburger').click(function () {
  $(this).toggleClass('header__hamburger--open');
  $('html, body').toggleClass('blocked');
  $(".header__nav").toggleClass('header__nav--visible');
});

/***/ }),

/***/ "./themes/default/assets/js/pop-up.js":
/*!********************************************!*\
  !*** ./themes/default/assets/js/pop-up.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function OpenAdModal() {
  $("#myModal").modal("show");
}

if ($("#myModal")) {
  OpenAdModal();
}

/***/ }),

/***/ "./themes/default/assets/js/rwd-checker.js":
/*!*************************************************!*\
  !*** ./themes/default/assets/js/rwd-checker.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(function () {
  var media991 = window.matchMedia("(max-width: 991px)");

  if (media991.matches) {
    on991();
  } else {
    off991();
  }

  media991.addEventListener("change", function (media991) {
    if (media991.matches) {
      on991();
    } else {
      off991();
    }
  });

  function on991() {
    menuMobile();
  }

  function off991() {
    menuMobile(false);
  }

  function menuMobile() {
    var active = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    if (active) {
      $(".header__nav").addClass('padding-container');
    } else {
      $(".header__nav").removeClass('padding-container');
    }
  }
});

/***/ }),

/***/ "./themes/default/assets/js/simple-lightbox.js":
/*!*****************************************************!*\
  !*** ./themes/default/assets/js/simple-lightbox.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
	By André Rinas, www.andrerinas.de
	Documentation, www.simplelightbox.de
	Available for use under the MIT License
	1.17.3
*/
;

(function ($, window, document, undefined) {
  'use strict';

  $.fn.simpleLightbox = function (options) {
    var options = $.extend({
      sourceAttr: 'href',
      overlay: true,
      spinner: true,
      nav: true,
      navText: ['&lsaquo;', '&rsaquo;'],
      captions: true,
      captionDelay: 0,
      captionSelector: 'img',
      captionType: 'attr',
      captionsData: 'title',
      captionPosition: 'bottom',
      captionClass: '',
      close: true,
      closeText: '&times;',
      swipeClose: true,
      showCounter: true,
      fileExt: 'png|jpg|jpeg|gif|webp',
      animationSlide: true,
      animationSpeed: 250,
      preloading: true,
      enableKeyboard: true,
      loop: true,
      rel: false,
      docClose: true,
      swipeTolerance: 50,
      className: 'simple-lightbox',
      widthRatio: 0.8,
      heightRatio: 0.9,
      scaleImageToRatio: false,
      disableRightClick: false,
      disableScroll: true,
      alertError: true,
      alertErrorMessage: 'Image not found, next image will be loaded',
      additionalHtml: false,
      history: true,
      throttleInterval: 0,
      doubleTapZoom: 2,
      maxZoom: 10,
      htmlClass: 'has-lightbox'
    }, options); // global variables

    var touchDevice = ('ontouchstart' in window),
        pointerEnabled = window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
        touched = function touched(event) {
      if (touchDevice) return true;
      if (!pointerEnabled || typeof event === 'undefined' || typeof event.pointerType === 'undefined') return false;

      if (typeof event.MSPOINTER_TYPE_MOUSE !== 'undefined') {
        if (event.MSPOINTER_TYPE_MOUSE != event.pointerType) return true;
      } else {
        if (event.pointerType != 'mouse') return true;
      }

      return false;
    },
        swipeDiff = 0,
        swipeYDiff = 0,
        curImg = $(),
        transPrefix = function transPrefix() {
      var s = document.body || document.documentElement;
      s = s.style;
      if (s.WebkitTransition === '') return '-webkit-';
      if (s.MozTransition === '') return '-moz-';
      if (s.OTransition === '') return '-o-';
      if (s.transition === '') return '';
      return false;
    },
        opened = false,
        loaded = [],
        getRelated = function getRelated(rel, jqObj) {
      var $related = jqObj.filter(function () {
        return $(this).attr('rel') === rel;
      });
      return $related;
    },
        objects = options.rel && options.rel !== false ? getRelated(options.rel, $(this)) : this,
        tagname = objects.get()[0].tagName,
        transPrefix = transPrefix(),
        globalScrollbarwidth = 0,
        canTransisions = transPrefix !== false ? true : false,
        supportsPushState = ('pushState' in history),
        historyhasChanged = false,
        historyUpdateTimeout,
        winLoc = window.location,
        getHash = function getHash() {
      return winLoc.hash.substring(1);
    },
        initialHash = getHash(),
        updateHash = function updateHash() {},
        resetHash = function resetHash() {},
        updateURL = function updateURL() {
      if (!historyhasChanged) {
        updateHash(); // first time
      } else {
        historyUpdateTimeout = setTimeout(updateHash, 800);
      }
    },
        throttle = function throttle(func, limit) {
      var inThrottle;
      return function () {
        var args = arguments;
        var context = this;

        if (!inThrottle) {
          func.apply(context, args);
          inThrottle = true;
          setTimeout(function () {
            return inThrottle = false;
          }, limit);
        }
      };
    },
        prefix = 'simplelb',
        overlay = $('<div>').addClass('sl-overlay'),
        closeBtn = $('<button>').addClass('sl-close').html(options.closeText),
        spinner = $('<div>').addClass('sl-spinner').html('<div></div>'),
        nav = $('<div>').addClass('sl-navigation').html('<button class="sl-prev">' + options.navText[0] + '</button><button class="sl-next">' + options.navText[1] + '</button>'),
        counter = $('<div>').addClass('sl-counter').html('<span class="sl-current"></span>/<span class="sl-total"></span>'),
        animating = false,
        index = 0,
        startIndex = 0,
        caption = $('<div>').addClass('sl-caption ' + options.captionClass + ' pos-' + options.captionPosition),
        image = $('<div>').addClass('sl-image'),
        wrapper = $('<div>').addClass('sl-wrapper').addClass(options.className),
        isValidLink = function isValidLink(element) {
      if (!options.fileExt) return true;
      var filEext = /\.([0-9a-z]+)(?=[?#])|(\.)(?:[\w]+)$/gmi;
      var testExt = $(element).attr(options.sourceAttr).match(filEext);
      return testExt && $(element).prop('tagName').toUpperCase() == tagname && new RegExp('\.(' + options.fileExt + ')$', 'i').test(testExt);
    },
        setup = function setup() {
      if (options.close) closeBtn.appendTo(wrapper);

      if (options.showCounter) {
        if (objects.length > 1) {
          counter.appendTo(wrapper);
          counter.find('.sl-total').text(objects.length);
        }
      }

      if (options.nav) nav.appendTo(wrapper);
      if (options.spinner) spinner.appendTo(wrapper);
    },
        openImage = function openImage(elem) {
      elem.trigger($.Event('show.simplelightbox'));
      if (options.disableScroll) globalScrollbarwidth = handleScrollbar('hide');
      if (options.htmlClass && options.htmlClass != '') $('html').addClass(options.htmlClass);
      wrapper.appendTo('body');
      image.appendTo(wrapper);
      if (options.overlay) overlay.appendTo($('body'));
      animating = true;
      index = objects.index(elem);
      curImg = $('<img/>').hide().attr('src', elem.attr(options.sourceAttr)).attr('data-scale', 1).attr('data-translate-x', 0).attr('data-translate-y', 0);

      if (loaded.indexOf(elem.attr(options.sourceAttr)) == -1) {
        loaded.push(elem.attr(options.sourceAttr));
      }

      image.html('').attr('style', '');
      curImg.appendTo(image);
      addEvents();
      overlay.fadeIn('fast');
      $('.sl-close').fadeIn('fast');
      spinner.show();
      nav.fadeIn('fast');
      $('.sl-wrapper .sl-counter .sl-current').text(index + 1);
      counter.fadeIn('fast');
      adjustImage();
      if (options.preloading) preload();
      setTimeout(function () {
        elem.trigger($.Event('shown.simplelightbox'));
      }, options.animationSpeed);
    },
        adjustImage = function adjustImage(dir) {
      if (!curImg.length) return;
      var tmpImage = new Image(),
          windowWidth = window.innerWidth * options.widthRatio,
          windowHeight = window.innerHeight * options.heightRatio;
      tmpImage.src = curImg.attr('src');
      curImg.data('scale', 1);
      curImg.data('translate-x', 0);
      curImg.data('translate-y', 0);
      zoomPanElement(0, 0, 1);
      $(tmpImage).on('error', function (ev) {
        //no image was found
        objects.eq(index).trigger($.Event('error.simplelightbox'));
        animating = false;
        opened = true;
        spinner.hide();
        var dirDefinined = dir == 1 || dir == -1;

        if (startIndex === index && dirDefinined) {
          close();
          return;
        }

        if (options.alertError) {
          alert(options.alertErrorMessage);
        }

        if (dirDefinined) {
          loadImage(dir);
        } else {
          loadImage(1);
        }

        return;
      });

      tmpImage.onload = function () {
        if (typeof dir !== 'undefined') {
          objects.eq(index).trigger($.Event('changed.simplelightbox')).trigger($.Event((dir === 1 ? 'nextDone' : 'prevDone') + '.simplelightbox'));
        } // history


        if (options.history) {
          updateURL();
        }

        if (loaded.indexOf(curImg.attr('src')) == -1) {
          loaded.push(curImg.attr('src'));
        }

        var imageWidth = tmpImage.width,
            imageHeight = tmpImage.height;

        if (options.scaleImageToRatio || imageWidth > windowWidth || imageHeight > windowHeight) {
          var ratio = imageWidth / imageHeight > windowWidth / windowHeight ? imageWidth / windowWidth : imageHeight / windowHeight;
          imageWidth /= ratio;
          imageHeight /= ratio;
        }

        $('.sl-image').css({
          'top': (window.innerHeight - imageHeight) / 2 + 'px',
          'left': (window.innerWidth - imageWidth - globalScrollbarwidth) / 2 + 'px',
          'width': imageWidth + 'px',
          'height': imageHeight + 'px'
        });
        spinner.hide();
        curImg.fadeIn('fast');
        opened = true;
        var cSel = options.captionSelector == 'self' ? objects.eq(index) : objects.eq(index).find(options.captionSelector);
        var captionText;

        if (options.captionType == 'data') {
          captionText = cSel.data(options.captionsData);
        } else if (options.captionType == 'text') {
          captionText = cSel.html();
        } else {
          captionText = cSel.prop(options.captionsData);
        }

        if (!options.loop) {
          if (index === 0) {
            $('.sl-prev').hide();
          }

          if (index >= objects.length - 1) {
            $('.sl-next').hide();
          }

          if (index > 0) {
            $('.sl-prev').show();
          }

          if (index < objects.length - 1) {
            $('.sl-next').show();
          }
        }

        if (objects.length == 1) $('.sl-prev, .sl-next').hide();

        if (dir == 1 || dir == -1) {
          var css = {
            'opacity': 1.0
          };

          if (options.animationSlide) {
            if (canTransisions) {
              slide(0, 100 * dir + 'px');
              setTimeout(function () {
                slide(options.animationSpeed / 1000, 0 + 'px');
              }, 50);
            } else {
              css.left = parseInt($('.sl-image').css('left')) + 100 * dir + 'px';
            }
          }

          $('.sl-image').animate(css, options.animationSpeed, function () {
            animating = false;
            setCaption(captionText, imageWidth);
          });
        } else {
          animating = false;
          setCaption(captionText, imageWidth);
        }

        if (options.additionalHtml && $('.sl-additional-html').length === 0) {
          $('<div>').html(options.additionalHtml).addClass('sl-additional-html').appendTo($('.sl-image'));
        }
      };
    },
        setCaption = function setCaption(captiontext, imageWidth) {
      if (captiontext !== '' && typeof captiontext !== "undefined" && options.captions) {
        caption.html(captiontext).css({
          'width': imageWidth + 'px'
        }).hide().appendTo($('.sl-image')).delay(options.captionDelay).fadeIn('fast');
      }
    },
        slide = function slide(speed, pos) {
      var styles = {};
      styles[transPrefix + 'transform'] = 'translateX(' + pos + ')';
      styles[transPrefix + 'transition'] = transPrefix + 'transform ' + speed + 's linear';
      $('.sl-image').css(styles);
    },
        zoomPanElement = function zoomPanElement(targetOffsetX, targetOffsetY, targetScale) {
      var styles = {};
      styles[transPrefix + 'transform'] = 'translate(' + targetOffsetX + ',' + targetOffsetY + ') scale(' + targetScale + ')';
      curImg.css(styles);
    },
        minMax = function minMax(value, min, max) {
      return value < min ? min : value > max ? max : value;
    },
        setZoomData = function setZoomData(initialScale, targetOffsetX, targetOffsetY) {
      curImg.data('scale', initialScale);
      curImg.data('translate-x', targetOffsetX);
      curImg.data('translate-y', targetOffsetY);
    },
        addEvents = function addEvents() {
      // resize/responsive
      $(window).on('resize.' + prefix, adjustImage); // close lightbox on close btn

      $('.sl-wrapper').on('click.' + prefix + ' touchstart.' + prefix, '.sl-close', function (e) {
        e.preventDefault();

        if (opened) {
          close();
        }
      });

      if (options.history) {
        setTimeout(function () {
          $(window).on('hashchange.' + prefix, function () {
            if (opened) {
              if (getHash() === initialHash) {
                close();
                return;
              }
            }
          });
        }, 40);
      } // nav-buttons


      nav.on('click.' + prefix, 'button', throttle(function (e) {
        e.preventDefault();
        swipeDiff = 0;
        loadImage($(this).hasClass('sl-next') ? 1 : -1);
      }, options.throttleInterval)); // touch helpers

      var swipeStart = 0,
          swipeEnd = 0,
          swipeYStart = 0,
          swipeYEnd = 0,
          zoomed = false,
          mousedown = false,
          imageLeft = 0,
          containerHeight,
          containerWidth,
          containerOffsetX,
          containerOffsetY,
          imgHeight,
          imgWidth,
          capture = false,
          initialOffsetX,
          initialOffsetY,
          initialPointerOffsetX,
          initialPointerOffsetY,
          initialPointerOffsetX2,
          initialPointerOffsetY2,
          initialScale = minMax(1, 1, options.maxZoom),
          initialPinchDistance,
          pointerOffsetX,
          pointerOffsetY,
          pointerOffsetX2,
          pointerOffsetY2,
          targetOffsetX,
          targetOffsetY,
          targetScale,
          pinchOffsetX,
          pinchOffsetY,
          limitOffsetX,
          limitOffsetY,
          scaleDifference,
          targetPinchDistance,
          touchCount,
          doubleTapped = false,
          touchmoveCount = 0;
      image.on('touchstart.' + prefix + ' mousedown.' + prefix, function (e) {
        if (e.target.tagName === 'A' && e.type == 'touchstart') {
          return true;
        }

        e = e.originalEvent;

        if (e.type == 'mousedown') {
          initialPointerOffsetX = e.clientX;
          initialPointerOffsetY = e.clientY;
          containerHeight = image.height();
          containerWidth = image.width();
          imgHeight = curImg.height();
          imgWidth = curImg.width();
          containerOffsetX = image.position().left;
          containerOffsetY = image.position().top;
          initialOffsetX = parseFloat(curImg.data('translate-x'));
          initialOffsetY = parseFloat(curImg.data('translate-y'));
          capture = true;
        } else {
          touchCount = e.touches.length;
          initialPointerOffsetX = e.touches[0].clientX;
          initialPointerOffsetY = e.touches[0].clientY;
          containerHeight = image.height();
          containerWidth = image.width();
          imgHeight = curImg.height();
          imgWidth = curImg.width();
          containerOffsetX = image.position().left;
          containerOffsetY = image.position().top;

          if (touchCount === 1)
            /* Single touch */
            {
              if (!doubleTapped) {
                doubleTapped = true;
                setTimeout(function () {
                  doubleTapped = false;
                }, 300);
              } else {
                curImg.addClass('sl-transition');

                if (!zoomed) {
                  initialScale = options.doubleTapZoom;
                  setZoomData(0, 0, initialScale);
                  zoomPanElement(0 + "px", 0 + "px", initialScale);
                  $('.sl-caption').fadeOut(200);
                  zoomed = true;
                } else {
                  initialScale = 1;
                  setZoomData(0, 0, initialScale);
                  zoomPanElement(0 + "px", 0 + "px", initialScale);
                  zoomed = false;
                }

                setTimeout(function () {
                  curImg.removeClass('sl-transition');
                }, 200);
                return false;
              }

              initialOffsetX = parseFloat(curImg.data('translate-x'));
              initialOffsetY = parseFloat(curImg.data('translate-y'));
            } else if (touchCount === 2)
            /* Pinch */
            {
              initialPointerOffsetX2 = e.touches[1].clientX;
              initialPointerOffsetY2 = e.touches[1].clientY;
              initialOffsetX = parseFloat(curImg.data('translate-x'));
              initialOffsetY = parseFloat(curImg.data('translate-y'));
              pinchOffsetX = (initialPointerOffsetX + initialPointerOffsetX2) / 2;
              pinchOffsetY = (initialPointerOffsetY + initialPointerOffsetY2) / 2;
              initialPinchDistance = Math.sqrt((initialPointerOffsetX - initialPointerOffsetX2) * (initialPointerOffsetX - initialPointerOffsetX2) + (initialPointerOffsetY - initialPointerOffsetY2) * (initialPointerOffsetY - initialPointerOffsetY2));
            }

          capture = true;
        }

        if (mousedown) return true;
        if (canTransisions) imageLeft = parseInt(image.css('left'));
        mousedown = true;
        swipeDiff = 0;
        swipeYDiff = 0;
        swipeStart = e.pageX || e.touches[0].pageX;
        swipeYStart = e.pageY || e.touches[0].pageY;
        return false;
      }).on('touchmove.' + prefix + ' mousemove.' + prefix + ' MSPointerMove', function (e) {
        if (!mousedown) return true;
        e.preventDefault();
        e = e.originalEvent;
        /* Initialize helpers */

        if (e.type == 'touchmove') {
          if (capture === false) return false;
          pointerOffsetX = e.touches[0].clientX;
          pointerOffsetY = e.touches[0].clientY;
          touchCount = e.touches.length;
          touchmoveCount++;

          if (touchCount > 1)
            /* Pinch */
            {
              pointerOffsetX2 = e.touches[1].clientX;
              pointerOffsetY2 = e.touches[1].clientY;
              targetPinchDistance = Math.sqrt((pointerOffsetX - pointerOffsetX2) * (pointerOffsetX - pointerOffsetX2) + (pointerOffsetY - pointerOffsetY2) * (pointerOffsetY - pointerOffsetY2));

              if (initialPinchDistance === null) {
                initialPinchDistance = targetPinchDistance;
              }

              if (Math.abs(initialPinchDistance - targetPinchDistance) >= 1) {
                /* Initialize helpers */
                targetScale = minMax(targetPinchDistance / initialPinchDistance * initialScale, 1, options.maxZoom);
                limitOffsetX = (imgWidth * targetScale - containerWidth) / 2;
                limitOffsetY = (imgHeight * targetScale - containerHeight) / 2;
                scaleDifference = targetScale - initialScale;
                targetOffsetX = imgWidth * targetScale <= containerWidth ? 0 : minMax(initialOffsetX - (pinchOffsetX - containerOffsetX - containerWidth / 2 - initialOffsetX) / (targetScale - scaleDifference) * scaleDifference, limitOffsetX * -1, limitOffsetX);
                targetOffsetY = imgHeight * targetScale <= containerHeight ? 0 : minMax(initialOffsetY - (pinchOffsetY - containerOffsetY - containerHeight / 2 - initialOffsetY) / (targetScale - scaleDifference) * scaleDifference, limitOffsetY * -1, limitOffsetY);
                zoomPanElement(targetOffsetX + "px", targetOffsetY + "px", targetScale);

                if (targetScale > 1) {
                  zoomed = true;
                  $('.sl-caption').fadeOut(200);
                }

                initialPinchDistance = targetPinchDistance;
                initialScale = targetScale;
                initialOffsetX = targetOffsetX;
                initialOffsetY = targetOffsetY;
              }
            } else {
            targetScale = initialScale;
            limitOffsetX = (imgWidth * targetScale - containerWidth) / 2;
            limitOffsetY = (imgHeight * targetScale - containerHeight) / 2;
            targetOffsetX = imgWidth * targetScale <= containerWidth ? 0 : minMax(pointerOffsetX - (initialPointerOffsetX - initialOffsetX), limitOffsetX * -1, limitOffsetX);
            targetOffsetY = imgHeight * targetScale <= containerHeight ? 0 : minMax(pointerOffsetY - (initialPointerOffsetY - initialOffsetY), limitOffsetY * -1, limitOffsetY);

            if (Math.abs(targetOffsetX) === Math.abs(limitOffsetX)) {
              initialOffsetX = targetOffsetX;
              initialPointerOffsetX = pointerOffsetX;
            }

            if (Math.abs(targetOffsetY) === Math.abs(limitOffsetY)) {
              initialOffsetY = targetOffsetY;
              initialPointerOffsetY = pointerOffsetY;
            }

            setZoomData(initialScale, targetOffsetX, targetOffsetY);
            zoomPanElement(targetOffsetX + "px", targetOffsetY + "px", targetScale);
          }
        }
        /* Mouse Move implementation */


        if (e.type == 'mousemove' && mousedown) {
          if (e.type == 'touchmove') return true;
          if (capture === false) return false;
          pointerOffsetX = e.clientX;
          pointerOffsetY = e.clientY;
          targetScale = initialScale;
          limitOffsetX = (imgWidth * targetScale - containerWidth) / 2;
          limitOffsetY = (imgHeight * targetScale - containerHeight) / 2;
          targetOffsetX = imgWidth * targetScale <= containerWidth ? 0 : minMax(pointerOffsetX - (initialPointerOffsetX - initialOffsetX), limitOffsetX * -1, limitOffsetX);
          targetOffsetY = imgHeight * targetScale <= containerHeight ? 0 : minMax(pointerOffsetY - (initialPointerOffsetY - initialOffsetY), limitOffsetY * -1, limitOffsetY);

          if (Math.abs(targetOffsetX) === Math.abs(limitOffsetX)) {
            initialOffsetX = targetOffsetX;
            initialPointerOffsetX = pointerOffsetX;
          }

          if (Math.abs(targetOffsetY) === Math.abs(limitOffsetY)) {
            initialOffsetY = targetOffsetY;
            initialPointerOffsetY = pointerOffsetY;
          }

          setZoomData(initialScale, targetOffsetX, targetOffsetY);
          zoomPanElement(targetOffsetX + "px", targetOffsetY + "px", targetScale);
        }

        if (!zoomed) {
          swipeEnd = e.pageX || e.touches[0].pageX;
          swipeYEnd = e.pageY || e.touches[0].pageY;
          swipeDiff = swipeStart - swipeEnd;
          swipeYDiff = swipeYStart - swipeYEnd;

          if (options.animationSlide) {
            if (canTransisions) slide(0, -swipeDiff + 'px');else image.css('left', imageLeft - swipeDiff + 'px');
          }
        }
      }).on('touchend.' + prefix + ' mouseup.' + prefix + ' touchcancel.' + prefix + ' mouseleave.' + prefix + ' pointerup pointercancel MSPointerUp MSPointerCancel', function (e) {
        e = e.originalEvent;

        if (touchDevice && e.type == 'touchend') {
          touchCount = e.touches.length;

          if (touchCount === 0)
            /* No touch */
            {
              /* Set attributes */
              setZoomData(initialScale, targetOffsetX, targetOffsetY);

              if (initialScale == 1) {
                zoomed = false;
                $('.sl-caption').fadeIn(200);
              }

              initialPinchDistance = null;
              capture = false;
            } else if (touchCount === 1)
            /* Single touch */
            {
              initialPointerOffsetX = e.touches[0].clientX;
              initialPointerOffsetY = e.touches[0].clientY;
            } else if (touchCount > 1)
            /* Pinch */
            {
              initialPinchDistance = null;
            }
        }

        if (mousedown) {
          mousedown = false;
          var possibleDir = true;

          if (!options.loop) {
            if (index === 0 && swipeDiff < 0) {
              possibleDir = false;
            }

            if (index >= objects.length - 1 && swipeDiff > 0) {
              possibleDir = false;
            }
          }

          if (Math.abs(swipeDiff) > options.swipeTolerance && possibleDir) {
            loadImage(swipeDiff > 0 ? 1 : -1);
          } else if (options.animationSlide) {
            if (canTransisions) slide(options.animationSpeed / 1000, 0 + 'px');else image.animate({
              'left': imageLeft + 'px'
            }, options.animationSpeed / 2);
          }

          if (options.swipeClose && Math.abs(swipeYDiff) > 50 && Math.abs(swipeDiff) < options.swipeTolerance) {
            close();
          }
        }
      })
      /** Detect Double click on image*/
      .on('dblclick', function (e) {
        initialPointerOffsetX = e.clientX;
        initialPointerOffsetY = e.clientY;
        containerHeight = image.height();
        containerWidth = image.width();
        imgHeight = curImg.height();
        imgWidth = curImg.width();
        containerOffsetX = image.position().left;
        containerOffsetY = image.position().top;
        curImg.addClass('sl-transition');

        if (!zoomed) {
          initialScale = options.doubleTapZoom;
          setZoomData(0, 0, initialScale);
          zoomPanElement(0 + "px", 0 + "px", initialScale);
          $('.sl-caption').fadeOut(200);
          zoomed = true;
        } else {
          initialScale = 1;
          setZoomData(0, 0, initialScale);
          zoomPanElement(0 + "px", 0 + "px", initialScale);
          zoomed = false;
          $('.sl-caption').fadeIn(200);
        }

        setTimeout(function () {
          curImg.removeClass('sl-transition');
        }, 200);
        capture = true;
        return false;
      });
    },
        removeEvents = function removeEvents() {
      nav.off('click', 'button');
      $('.sl-wrapper').off('click.' + prefix, '.sl-close');
      $(window).off('resize.' + prefix);
      $(window).off('hashchange.' + prefix);
    },
        preload = function preload() {
      var next = index + 1 < 0 ? objects.length - 1 : index + 1 >= objects.length - 1 ? 0 : index + 1,
          prev = index - 1 < 0 ? objects.length - 1 : index - 1 >= objects.length - 1 ? 0 : index - 1;
      $('<img />').attr('src', objects.eq(next).attr(options.sourceAttr)).on('load', function () {
        if (loaded.indexOf($(this).attr('src')) == -1) {
          loaded.push($(this).attr('src'));
        }

        objects.eq(index).trigger($.Event('nextImageLoaded.simplelightbox'));
      });
      $('<img />').attr('src', objects.eq(prev).attr(options.sourceAttr)).on('load', function () {
        if (loaded.indexOf($(this).attr('src')) == -1) {
          loaded.push($(this).attr('src'));
        }

        objects.eq(index).trigger($.Event('prevImageLoaded.simplelightbox'));
      });
    },
        loadImage = function loadImage(dir) {
      objects.eq(index).trigger($.Event('change.simplelightbox')).trigger($.Event((dir === 1 ? 'next' : 'prev') + '.simplelightbox'));
      var newIndex = index + dir;
      if (animating || (newIndex < 0 || newIndex >= objects.length) && options.loop === false) return;
      index = newIndex < 0 ? objects.length - 1 : newIndex > objects.length - 1 ? 0 : newIndex;
      $('.sl-wrapper .sl-counter .sl-current').text(index + 1);
      var css = {
        'opacity': 0
      };

      if (options.animationSlide) {
        if (canTransisions) slide(options.animationSpeed / 1000, -100 * dir - swipeDiff + 'px');else css.left = parseInt($('.sl-image').css('left')) + -100 * dir + 'px';
      }

      $('.sl-image').animate(css, options.animationSpeed, function () {
        setTimeout(function () {
          // fadeout old image
          var elem = objects.eq(index);
          curImg.attr('src', elem.attr(options.sourceAttr));

          if (loaded.indexOf(elem.attr(options.sourceAttr)) == -1) {
            spinner.show();
          }

          $('.sl-caption').remove();
          adjustImage(dir);
          if (options.preloading) preload();
        }, 100);
      });
    },
        close = function close() {
      if (animating) return;
      var elem = objects.eq(index),
          triggered = false;
      elem.trigger($.Event('close.simplelightbox'));

      if (options.history) {
        resetHash();
      }

      $('.sl-image img, .sl-overlay, .sl-close, .sl-navigation, .sl-image .sl-caption, .sl-counter').fadeOut('fast', function () {
        if (options.disableScroll) handleScrollbar('show');
        if (options.htmlClass && options.htmlClass != '') $('html').removeClass(options.htmlClass);
        $('.sl-wrapper, .sl-overlay').remove();
        removeEvents();
        if (!triggered) elem.trigger($.Event('closed.simplelightbox'));
        triggered = true;
      });
      curImg = $();
      opened = false;
      animating = false;
    },
        handleScrollbar = function handleScrollbar(type) {
      var scrollbarWidth = 0;

      if (type == 'hide') {
        var fullWindowWidth = window.innerWidth;

        if (!fullWindowWidth) {
          var documentElementRect = document.documentElement.getBoundingClientRect();
          fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
        }

        if (document.body.clientWidth < fullWindowWidth) {
          var scrollDiv = document.createElement('div'),
              padding = parseInt($('body').css('padding-right'), 10);
          scrollDiv.className = 'sl-scrollbar-measure';
          $('body').append(scrollDiv);
          scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
          $(document.body)[0].removeChild(scrollDiv);
          $('body').data('padding', padding);

          if (scrollbarWidth > 0) {
            $('body').addClass('hidden-scroll').css({
              'padding-right': padding + scrollbarWidth
            });
          }
        }
      } else {
        $('body').removeClass('hidden-scroll').css({
          'padding-right': $('body').data('padding')
        });
      }

      return scrollbarWidth;
    }; // events


    setup(); // open lightbox

    objects.on('click.' + prefix, function (e) {
      if (isValidLink(this)) {
        e.preventDefault();
        if (animating) return false;
        var elem = $(this);
        startIndex = objects.index(elem);
        openImage(elem);
      }
    }); // close on click on doc

    $(document).on('click.' + prefix + ' touchstart.' + prefix, function (e) {
      if (opened) {
        if (options.docClose && $(e.target).closest('.sl-image').length === 0 && $(e.target).closest('.sl-navigation').length === 0) {
          close();
        }
      }
    }); // disable rightclick

    if (options.disableRightClick) {
      $(document).on('contextmenu', '.sl-image img', function (e) {
        return false;
      });
    } // keyboard-control


    if (options.enableKeyboard) {
      $(document).on('keyup.' + prefix, throttle(function (e) {
        swipeDiff = 0; // keyboard control only if lightbox is open

        var key = e.keyCode;

        if (animating && key == 27) {
          curImg.attr('src', '');
          animating = false;
          close();
        }

        if (opened) {
          e.preventDefault();

          if (key == 27) {
            close();
          }

          if (key == 37 || e.keyCode == 39) {
            loadImage(e.keyCode == 39 ? 1 : -1);
          }
        }
      }, options.throttleInterval));
    } // Public methods


    this.open = function (elem) {
      elem = elem || $(this[0]);
      startIndex = objects.index(elem);
      openImage(elem);
    };

    this.next = function () {
      loadImage(1);
    };

    this.prev = function () {
      loadImage(-1);
    };

    this.close = function () {
      close();
    };

    this.destroy = function () {
      $(document).off('click.' + prefix).off('keyup.' + prefix);
      close();
      $('.sl-overlay, .sl-wrapper').remove();
      this.off('click');
    };

    this.refresh = function () {
      this.destroy();
      $(this).simpleLightbox(options);
    };

    return this;
  };
})(jQuery, window, document);

/***/ }),

/***/ "./themes/default/assets/js/sticky-header.js":
/*!***************************************************!*\
  !*** ./themes/default/assets/js/sticky-header.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function stickyHeader(sticky, navbar) {
  if (window.pageYOffset > sticky) {
    navbar[0].classList.add("sticky");
  } else {
    navbar[0].classList.remove("sticky");
  }
}

if ($('.header--fixed').length) {
  var navbar = document.getElementsByClassName("header--fixed");
  var sticky = navbar[0].offsetTop;

  window.onscroll = function () {
    stickyHeader(sticky, navbar);
  };

  stickyHeader(sticky, navbar);
}

/***/ }),

/***/ "./themes/default/assets/scss/main.scss":
/*!**********************************************!*\
  !*** ./themes/default/assets/scss/main.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!***************************************************************************************!*\
  !*** multi ./themes/default/assets/js/main.js ./themes/default/assets/scss/main.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\Web\C\crocus\crocus-hill.szcz.pl\themes\default\assets\js\main.js */"./themes/default/assets/js/main.js");
module.exports = __webpack_require__(/*! D:\Web\C\crocus\crocus-hill.szcz.pl\themes\default\assets\scss\main.scss */"./themes/default/assets/scss/main.scss");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map