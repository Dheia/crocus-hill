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

/***/ "./themes/default/assets/js/anime.js":
/*!*******************************************!*\
  !*** ./themes/default/assets/js/anime.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

!function (n, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  "use strict";

  var n = {
    update: null,
    begin: null,
    loopBegin: null,
    changeBegin: null,
    change: null,
    changeComplete: null,
    loopComplete: null,
    complete: null,
    loop: 1,
    direction: "normal",
    autoplay: !0,
    timelineOffset: 0
  },
      e = {
    duration: 1e3,
    delay: 0,
    endDelay: 0,
    easing: "easeOutElastic(1, .5)",
    round: 0
  },
      t = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective", "matrix", "matrix3d"],
      r = {
    CSS: {},
    springs: {}
  };

  function a(n, e, t) {
    return Math.min(Math.max(n, e), t);
  }

  function o(n, e) {
    return n.indexOf(e) > -1;
  }

  function u(n, e) {
    return n.apply(null, e);
  }

  var i = {
    arr: function arr(n) {
      return Array.isArray(n);
    },
    obj: function obj(n) {
      return o(Object.prototype.toString.call(n), "Object");
    },
    pth: function pth(n) {
      return i.obj(n) && n.hasOwnProperty("totalLength");
    },
    svg: function svg(n) {
      return n instanceof SVGElement;
    },
    inp: function inp(n) {
      return n instanceof HTMLInputElement;
    },
    dom: function dom(n) {
      return n.nodeType || i.svg(n);
    },
    str: function str(n) {
      return "string" == typeof n;
    },
    fnc: function fnc(n) {
      return "function" == typeof n;
    },
    und: function und(n) {
      return void 0 === n;
    },
    nil: function nil(n) {
      return i.und(n) || null === n;
    },
    hex: function hex(n) {
      return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n);
    },
    rgb: function rgb(n) {
      return /^rgb/.test(n);
    },
    hsl: function hsl(n) {
      return /^hsl/.test(n);
    },
    col: function col(n) {
      return i.hex(n) || i.rgb(n) || i.hsl(n);
    },
    key: function key(t) {
      return !n.hasOwnProperty(t) && !e.hasOwnProperty(t) && "targets" !== t && "keyframes" !== t;
    }
  };

  function c(n) {
    var e = /\(([^)]+)\)/.exec(n);
    return e ? e[1].split(",").map(function (n) {
      return parseFloat(n);
    }) : [];
  }

  function s(n, e) {
    var t = c(n),
        o = a(i.und(t[0]) ? 1 : t[0], .1, 100),
        u = a(i.und(t[1]) ? 100 : t[1], .1, 100),
        s = a(i.und(t[2]) ? 10 : t[2], .1, 100),
        f = a(i.und(t[3]) ? 0 : t[3], .1, 100),
        l = Math.sqrt(u / o),
        d = s / (2 * Math.sqrt(u * o)),
        p = d < 1 ? l * Math.sqrt(1 - d * d) : 0,
        v = 1,
        h = d < 1 ? (d * l - f) / p : -f + l;

    function g(n) {
      var t = e ? e * n / 1e3 : n;
      return t = d < 1 ? Math.exp(-t * d * l) * (v * Math.cos(p * t) + h * Math.sin(p * t)) : (v + h * t) * Math.exp(-t * l), 0 === n || 1 === n ? n : 1 - t;
    }

    return e ? g : function () {
      var e = r.springs[n];
      if (e) return e;

      for (var t = 0, a = 0;;) {
        if (1 === g(t += 1 / 6)) {
          if (++a >= 16) break;
        } else a = 0;
      }

      var o = t * (1 / 6) * 1e3;
      return r.springs[n] = o, o;
    };
  }

  function f(n) {
    return void 0 === n && (n = 10), function (e) {
      return Math.ceil(a(e, 1e-6, 1) * n) * (1 / n);
    };
  }

  var l,
      d,
      p = function () {
    var n = 11,
        e = 1 / (n - 1);

    function t(n, e) {
      return 1 - 3 * e + 3 * n;
    }

    function r(n, e) {
      return 3 * e - 6 * n;
    }

    function a(n) {
      return 3 * n;
    }

    function o(n, e, o) {
      return ((t(e, o) * n + r(e, o)) * n + a(e)) * n;
    }

    function u(n, e, o) {
      return 3 * t(e, o) * n * n + 2 * r(e, o) * n + a(e);
    }

    return function (t, r, a, i) {
      if (0 <= t && t <= 1 && 0 <= a && a <= 1) {
        var c = new Float32Array(n);
        if (t !== r || a !== i) for (var s = 0; s < n; ++s) {
          c[s] = o(s * e, t, a);
        }
        return function (n) {
          return t === r && a === i ? n : 0 === n || 1 === n ? n : o(f(n), r, i);
        };
      }

      function f(r) {
        for (var i = 0, s = 1, f = n - 1; s !== f && c[s] <= r; ++s) {
          i += e;
        }

        var l = i + (r - c[--s]) / (c[s + 1] - c[s]) * e,
            d = u(l, t, a);
        return d >= .001 ? function (n, e, t, r) {
          for (var a = 0; a < 4; ++a) {
            var i = u(e, t, r);
            if (0 === i) return e;
            e -= (o(e, t, r) - n) / i;
          }

          return e;
        }(r, l, t, a) : 0 === d ? l : function (n, e, t, r, a) {
          for (var u, i, c = 0; (u = o(i = e + (t - e) / 2, r, a) - n) > 0 ? t = i : e = i, Math.abs(u) > 1e-7 && ++c < 10;) {
            ;
          }

          return i;
        }(r, i, i + e, t, a);
      }
    };
  }(),
      v = (l = {
    linear: function linear() {
      return function (n) {
        return n;
      };
    }
  }, d = {
    Sine: function Sine() {
      return function (n) {
        return 1 - Math.cos(n * Math.PI / 2);
      };
    },
    Circ: function Circ() {
      return function (n) {
        return 1 - Math.sqrt(1 - n * n);
      };
    },
    Back: function Back() {
      return function (n) {
        return n * n * (3 * n - 2);
      };
    },
    Bounce: function Bounce() {
      return function (n) {
        for (var e, t = 4; n < ((e = Math.pow(2, --t)) - 1) / 11;) {
          ;
        }

        return 1 / Math.pow(4, 3 - t) - 7.5625 * Math.pow((3 * e - 2) / 22 - n, 2);
      };
    },
    Elastic: function Elastic(n, e) {
      void 0 === n && (n = 1), void 0 === e && (e = .5);
      var t = a(n, 1, 10),
          r = a(e, .1, 2);
      return function (n) {
        return 0 === n || 1 === n ? n : -t * Math.pow(2, 10 * (n - 1)) * Math.sin((n - 1 - r / (2 * Math.PI) * Math.asin(1 / t)) * (2 * Math.PI) / r);
      };
    }
  }, ["Quad", "Cubic", "Quart", "Quint", "Expo"].forEach(function (n, e) {
    d[n] = function () {
      return function (n) {
        return Math.pow(n, e + 2);
      };
    };
  }), Object.keys(d).forEach(function (n) {
    var e = d[n];
    l["easeIn" + n] = e, l["easeOut" + n] = function (n, t) {
      return function (r) {
        return 1 - e(n, t)(1 - r);
      };
    }, l["easeInOut" + n] = function (n, t) {
      return function (r) {
        return r < .5 ? e(n, t)(2 * r) / 2 : 1 - e(n, t)(-2 * r + 2) / 2;
      };
    }, l["easeOutIn" + n] = function (n, t) {
      return function (r) {
        return r < .5 ? (1 - e(n, t)(1 - 2 * r)) / 2 : (e(n, t)(2 * r - 1) + 1) / 2;
      };
    };
  }), l);

  function h(n, e) {
    if (i.fnc(n)) return n;
    var t = n.split("(")[0],
        r = v[t],
        a = c(n);

    switch (t) {
      case "spring":
        return s(n, e);

      case "cubicBezier":
        return u(p, a);

      case "steps":
        return u(f, a);

      default:
        return u(r, a);
    }
  }

  function g(n) {
    try {
      return document.querySelectorAll(n);
    } catch (n) {
      return;
    }
  }

  function m(n, e) {
    for (var t = n.length, r = arguments.length >= 2 ? arguments[1] : void 0, a = [], o = 0; o < t; o++) {
      if (o in n) {
        var u = n[o];
        e.call(r, u, o, n) && a.push(u);
      }
    }

    return a;
  }

  function y(n) {
    return n.reduce(function (n, e) {
      return n.concat(i.arr(e) ? y(e) : e);
    }, []);
  }

  function b(n) {
    return i.arr(n) ? n : (i.str(n) && (n = g(n) || n), n instanceof NodeList || n instanceof HTMLCollection ? [].slice.call(n) : [n]);
  }

  function M(n, e) {
    return n.some(function (n) {
      return n === e;
    });
  }

  function x(n) {
    var e = {};

    for (var t in n) {
      e[t] = n[t];
    }

    return e;
  }

  function w(n, e) {
    var t = x(n);

    for (var r in n) {
      t[r] = e.hasOwnProperty(r) ? e[r] : n[r];
    }

    return t;
  }

  function k(n, e) {
    var t = x(n);

    for (var r in e) {
      t[r] = i.und(n[r]) ? e[r] : n[r];
    }

    return t;
  }

  function O(n) {
    return i.rgb(n) ? (t = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e = n)) ? "rgba(" + t[1] + ",1)" : e : i.hex(n) ? (r = n.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (n, e, t, r) {
      return e + e + t + t + r + r;
    }), a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r), "rgba(" + parseInt(a[1], 16) + "," + parseInt(a[2], 16) + "," + parseInt(a[3], 16) + ",1)") : i.hsl(n) ? function (n) {
      var e,
          t,
          r,
          a = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(n) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(n),
          o = parseInt(a[1], 10) / 360,
          u = parseInt(a[2], 10) / 100,
          i = parseInt(a[3], 10) / 100,
          c = a[4] || 1;

      function s(n, e, t) {
        return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? n + 6 * (e - n) * t : t < .5 ? e : t < 2 / 3 ? n + (e - n) * (2 / 3 - t) * 6 : n;
      }

      if (0 == u) e = t = r = i;else {
        var f = i < .5 ? i * (1 + u) : i + u - i * u,
            l = 2 * i - f;
        e = s(l, f, o + 1 / 3), t = s(l, f, o), r = s(l, f, o - 1 / 3);
      }
      return "rgba(" + 255 * e + "," + 255 * t + "," + 255 * r + "," + c + ")";
    }(n) : void 0;
    var e, t, r, a;
  }

  function C(n) {
    var e = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(n);
    if (e) return e[1];
  }

  function P(n, e) {
    return i.fnc(n) ? n(e.target, e.id, e.total) : n;
  }

  function I(n, e) {
    return n.getAttribute(e);
  }

  function D(n, e, t) {
    if (M([t, "deg", "rad", "turn"], C(e))) return e;
    var a = r.CSS[e + t];
    if (!i.und(a)) return a;
    var o = document.createElement(n.tagName),
        u = n.parentNode && n.parentNode !== document ? n.parentNode : document.body;
    u.appendChild(o), o.style.position = "absolute", o.style.width = 100 + t;
    var c = 100 / o.offsetWidth;
    u.removeChild(o);
    var s = c * parseFloat(e);
    return r.CSS[e + t] = s, s;
  }

  function B(n, e, t) {
    if (e in n.style) {
      var r = e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
          a = n.style[e] || getComputedStyle(n).getPropertyValue(r) || "0";
      return t ? D(n, a, t) : a;
    }
  }

  function T(n, e) {
    return i.dom(n) && !i.inp(n) && (!i.nil(I(n, e)) || i.svg(n) && n[e]) ? "attribute" : i.dom(n) && M(t, e) ? "transform" : i.dom(n) && "transform" !== e && B(n, e) ? "css" : null != n[e] ? "object" : void 0;
  }

  function E(n) {
    if (i.dom(n)) {
      for (var e, t = n.style.transform || "", r = /(\w+)\(([^)]*)\)/g, a = new Map(); e = r.exec(t);) {
        a.set(e[1], e[2]);
      }

      return a;
    }
  }

  function F(n, e, t, r) {
    var a,
        u = o(e, "scale") ? 1 : 0 + (o(a = e, "translate") || "perspective" === a ? "px" : o(a, "rotate") || o(a, "skew") ? "deg" : void 0),
        i = E(n).get(e) || u;
    return t && (t.transforms.list.set(e, i), t.transforms.last = e), r ? D(n, i, r) : i;
  }

  function A(n, e, t, r) {
    switch (T(n, e)) {
      case "transform":
        return F(n, e, r, t);

      case "css":
        return B(n, e, t);

      case "attribute":
        return I(n, e);

      default:
        return n[e] || 0;
    }
  }

  function N(n, e) {
    var t = /^(\*=|\+=|-=)/.exec(n);
    if (!t) return n;
    var r = C(n) || 0,
        a = parseFloat(e),
        o = parseFloat(n.replace(t[0], ""));

    switch (t[0][0]) {
      case "+":
        return a + o + r;

      case "-":
        return a - o + r;

      case "*":
        return a * o + r;
    }
  }

  function S(n, e) {
    if (i.col(n)) return O(n);
    if (/\s/g.test(n)) return n;
    var t = C(n),
        r = t ? n.substr(0, n.length - t.length) : n;
    return e ? r + e : r;
  }

  function L(n, e) {
    return Math.sqrt(Math.pow(e.x - n.x, 2) + Math.pow(e.y - n.y, 2));
  }

  function j(n) {
    for (var e, t = n.points, r = 0, a = 0; a < t.numberOfItems; a++) {
      var o = t.getItem(a);
      a > 0 && (r += L(e, o)), e = o;
    }

    return r;
  }

  function q(n) {
    if (n.getTotalLength) return n.getTotalLength();

    switch (n.tagName.toLowerCase()) {
      case "circle":
        return o = n, 2 * Math.PI * I(o, "r");

      case "rect":
        return 2 * I(a = n, "width") + 2 * I(a, "height");

      case "line":
        return L({
          x: I(r = n, "x1"),
          y: I(r, "y1")
        }, {
          x: I(r, "x2"),
          y: I(r, "y2")
        });

      case "polyline":
        return j(n);

      case "polygon":
        return t = (e = n).points, j(e) + L(t.getItem(t.numberOfItems - 1), t.getItem(0));
    }

    var e, t, r, a, o;
  }

  function H(n, e) {
    var t = e || {},
        r = t.el || function (n) {
      for (var e = n.parentNode; i.svg(e) && i.svg(e.parentNode);) {
        e = e.parentNode;
      }

      return e;
    }(n),
        a = r.getBoundingClientRect(),
        o = I(r, "viewBox"),
        u = a.width,
        c = a.height,
        s = t.viewBox || (o ? o.split(" ") : [0, 0, u, c]);

    return {
      el: r,
      viewBox: s,
      x: s[0] / 1,
      y: s[1] / 1,
      w: u,
      h: c,
      vW: s[2],
      vH: s[3]
    };
  }

  function V(n, e, t) {
    function r(t) {
      void 0 === t && (t = 0);
      var r = e + t >= 1 ? e + t : 0;
      return n.el.getPointAtLength(r);
    }

    var a = H(n.el, n.svg),
        o = r(),
        u = r(-1),
        i = r(1),
        c = t ? 1 : a.w / a.vW,
        s = t ? 1 : a.h / a.vH;

    switch (n.property) {
      case "x":
        return (o.x - a.x) * c;

      case "y":
        return (o.y - a.y) * s;

      case "angle":
        return 180 * Math.atan2(i.y - u.y, i.x - u.x) / Math.PI;
    }
  }

  function $(n, e) {
    var t = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
        r = S(i.pth(n) ? n.totalLength : n, e) + "";
    return {
      original: r,
      numbers: r.match(t) ? r.match(t).map(Number) : [0],
      strings: i.str(n) || e ? r.split(t) : []
    };
  }

  function W(n) {
    return m(n ? y(i.arr(n) ? n.map(b) : b(n)) : [], function (n, e, t) {
      return t.indexOf(n) === e;
    });
  }

  function X(n) {
    var e = W(n);
    return e.map(function (n, t) {
      return {
        target: n,
        id: t,
        total: e.length,
        transforms: {
          list: E(n)
        }
      };
    });
  }

  function Y(n, e) {
    var t = x(e);

    if (/^spring/.test(t.easing) && (t.duration = s(t.easing)), i.arr(n)) {
      var r = n.length;
      2 === r && !i.obj(n[0]) ? n = {
        value: n
      } : i.fnc(e.duration) || (t.duration = e.duration / r);
    }

    var a = i.arr(n) ? n : [n];
    return a.map(function (n, t) {
      var r = i.obj(n) && !i.pth(n) ? n : {
        value: n
      };
      return i.und(r.delay) && (r.delay = t ? 0 : e.delay), i.und(r.endDelay) && (r.endDelay = t === a.length - 1 ? e.endDelay : 0), r;
    }).map(function (n) {
      return k(n, t);
    });
  }

  function Z(n, e) {
    var t = [],
        r = e.keyframes;

    for (var a in r && (e = k(function (n) {
      for (var e = m(y(n.map(function (n) {
        return Object.keys(n);
      })), function (n) {
        return i.key(n);
      }).reduce(function (n, e) {
        return n.indexOf(e) < 0 && n.push(e), n;
      }, []), t = {}, r = function r(_r) {
        var a = e[_r];
        t[a] = n.map(function (n) {
          var e = {};

          for (var t in n) {
            i.key(t) ? t == a && (e.value = n[t]) : e[t] = n[t];
          }

          return e;
        });
      }, a = 0; a < e.length; a++) {
        r(a);
      }

      return t;
    }(r), e)), e) {
      i.key(a) && t.push({
        name: a,
        tweens: Y(e[a], n)
      });
    }

    return t;
  }

  function G(n, e) {
    var t;
    return n.tweens.map(function (r) {
      var a = function (n, e) {
        var t = {};

        for (var r in n) {
          var a = P(n[r], e);
          i.arr(a) && 1 === (a = a.map(function (n) {
            return P(n, e);
          })).length && (a = a[0]), t[r] = a;
        }

        return t.duration = parseFloat(t.duration), t.delay = parseFloat(t.delay), t;
      }(r, e),
          o = a.value,
          u = i.arr(o) ? o[1] : o,
          c = C(u),
          s = A(e.target, n.name, c, e),
          f = t ? t.to.original : s,
          l = i.arr(o) ? o[0] : f,
          d = C(l) || C(s),
          p = c || d;

      return i.und(u) && (u = f), a.from = $(l, p), a.to = $(N(u, l), p), a.start = t ? t.end : 0, a.end = a.start + a.delay + a.duration + a.endDelay, a.easing = h(a.easing, a.duration), a.isPath = i.pth(o), a.isPathTargetInsideSVG = a.isPath && i.svg(e.target), a.isColor = i.col(a.from.original), a.isColor && (a.round = 1), t = a, a;
    });
  }

  var Q = {
    css: function css(n, e, t) {
      return n.style[e] = t;
    },
    attribute: function attribute(n, e, t) {
      return n.setAttribute(e, t);
    },
    object: function object(n, e, t) {
      return n[e] = t;
    },
    transform: function transform(n, e, t, r, a) {
      if (r.list.set(e, t), e === r.last || a) {
        var o = "";
        r.list.forEach(function (n, e) {
          o += e + "(" + n + ") ";
        }), n.style.transform = o;
      }
    }
  };

  function z(n, e) {
    X(n).forEach(function (n) {
      for (var t in e) {
        var r = P(e[t], n),
            a = n.target,
            o = C(r),
            u = A(a, t, o, n),
            i = N(S(r, o || C(u)), u),
            c = T(a, t);
        Q[c](a, t, i, n.transforms, !0);
      }
    });
  }

  function _(n, e) {
    return m(y(n.map(function (n) {
      return e.map(function (e) {
        return function (n, e) {
          var t = T(n.target, e.name);

          if (t) {
            var r = G(e, n),
                a = r[r.length - 1];
            return {
              type: t,
              property: e.name,
              animatable: n,
              tweens: r,
              duration: a.end,
              delay: r[0].delay,
              endDelay: a.endDelay
            };
          }
        }(n, e);
      });
    })), function (n) {
      return !i.und(n);
    });
  }

  function R(n, e) {
    var t = n.length,
        r = function r(n) {
      return n.timelineOffset ? n.timelineOffset : 0;
    },
        a = {};

    return a.duration = t ? Math.max.apply(Math, n.map(function (n) {
      return r(n) + n.duration;
    })) : e.duration, a.delay = t ? Math.min.apply(Math, n.map(function (n) {
      return r(n) + n.delay;
    })) : e.delay, a.endDelay = t ? a.duration - Math.max.apply(Math, n.map(function (n) {
      return r(n) + n.duration - n.endDelay;
    })) : e.endDelay, a;
  }

  var J = 0;

  var K = [],
      U = function () {
    var n;

    function e(t) {
      for (var r = K.length, a = 0; a < r;) {
        var o = K[a];
        o.paused ? (K.splice(a, 1), r--) : (o.tick(t), a++);
      }

      n = a > 0 ? requestAnimationFrame(e) : void 0;
    }

    return "undefined" != typeof document && document.addEventListener("visibilitychange", function () {
      en.suspendWhenDocumentHidden && (nn() ? n = cancelAnimationFrame(n) : (K.forEach(function (n) {
        return n._onDocumentVisibility();
      }), U()));
    }), function () {
      n || nn() && en.suspendWhenDocumentHidden || !(K.length > 0) || (n = requestAnimationFrame(e));
    };
  }();

  function nn() {
    return !!document && document.hidden;
  }

  function en(t) {
    void 0 === t && (t = {});
    var r,
        o = 0,
        u = 0,
        i = 0,
        c = 0,
        s = null;

    function f(n) {
      var e = window.Promise && new Promise(function (n) {
        return s = n;
      });
      return n.finished = e, e;
    }

    var l,
        d,
        p,
        v,
        h,
        g,
        y,
        b,
        M = (d = w(n, l = t), p = w(e, l), v = Z(p, l), h = X(l.targets), g = _(h, v), y = R(g, p), b = J, J++, k(d, {
      id: b,
      children: [],
      animatables: h,
      animations: g,
      duration: y.duration,
      delay: y.delay,
      endDelay: y.endDelay
    }));
    f(M);

    function x() {
      var n = M.direction;
      "alternate" !== n && (M.direction = "normal" !== n ? "normal" : "reverse"), M.reversed = !M.reversed, r.forEach(function (n) {
        return n.reversed = M.reversed;
      });
    }

    function O(n) {
      return M.reversed ? M.duration - n : n;
    }

    function C() {
      o = 0, u = O(M.currentTime) * (1 / en.speed);
    }

    function P(n, e) {
      e && e.seek(n - e.timelineOffset);
    }

    function I(n) {
      for (var e = 0, t = M.animations, r = t.length; e < r;) {
        var o = t[e],
            u = o.animatable,
            i = o.tweens,
            c = i.length - 1,
            s = i[c];
        c && (s = m(i, function (e) {
          return n < e.end;
        })[0] || s);

        for (var f = a(n - s.start - s.delay, 0, s.duration) / s.duration, l = isNaN(f) ? 1 : s.easing(f), d = s.to.strings, p = s.round, v = [], h = s.to.numbers.length, g = void 0, y = 0; y < h; y++) {
          var b = void 0,
              x = s.to.numbers[y],
              w = s.from.numbers[y] || 0;
          b = s.isPath ? V(s.value, l * x, s.isPathTargetInsideSVG) : w + l * (x - w), p && (s.isColor && y > 2 || (b = Math.round(b * p) / p)), v.push(b);
        }

        var k = d.length;

        if (k) {
          g = d[0];

          for (var O = 0; O < k; O++) {
            d[O];
            var C = d[O + 1],
                P = v[O];
            isNaN(P) || (g += C ? P + C : P + " ");
          }
        } else g = v[0];

        Q[o.type](u.target, o.property, g, u.transforms), o.currentValue = g, e++;
      }
    }

    function D(n) {
      M[n] && !M.passThrough && M[n](M);
    }

    function B(n) {
      var e = M.duration,
          t = M.delay,
          l = e - M.endDelay,
          d = O(n);
      M.progress = a(d / e * 100, 0, 100), M.reversePlayback = d < M.currentTime, r && function (n) {
        if (M.reversePlayback) for (var e = c; e--;) {
          P(n, r[e]);
        } else for (var t = 0; t < c; t++) {
          P(n, r[t]);
        }
      }(d), !M.began && M.currentTime > 0 && (M.began = !0, D("begin")), !M.loopBegan && M.currentTime > 0 && (M.loopBegan = !0, D("loopBegin")), d <= t && 0 !== M.currentTime && I(0), (d >= l && M.currentTime !== e || !e) && I(e), d > t && d < l ? (M.changeBegan || (M.changeBegan = !0, M.changeCompleted = !1, D("changeBegin")), D("change"), I(d)) : M.changeBegan && (M.changeCompleted = !0, M.changeBegan = !1, D("changeComplete")), M.currentTime = a(d, 0, e), M.began && D("update"), n >= e && (u = 0, M.remaining && !0 !== M.remaining && M.remaining--, M.remaining ? (o = i, D("loopComplete"), M.loopBegan = !1, "alternate" === M.direction && x()) : (M.paused = !0, M.completed || (M.completed = !0, D("loopComplete"), D("complete"), !M.passThrough && "Promise" in window && (s(), f(M)))));
    }

    return M.reset = function () {
      var n = M.direction;
      M.passThrough = !1, M.currentTime = 0, M.progress = 0, M.paused = !0, M.began = !1, M.loopBegan = !1, M.changeBegan = !1, M.completed = !1, M.changeCompleted = !1, M.reversePlayback = !1, M.reversed = "reverse" === n, M.remaining = M.loop, r = M.children;

      for (var e = c = r.length; e--;) {
        M.children[e].reset();
      }

      (M.reversed && !0 !== M.loop || "alternate" === n && 1 === M.loop) && M.remaining++, I(M.reversed ? M.duration : 0);
    }, M._onDocumentVisibility = C, M.set = function (n, e) {
      return z(n, e), M;
    }, M.tick = function (n) {
      i = n, o || (o = i), B((i + (u - o)) * en.speed);
    }, M.seek = function (n) {
      B(O(n));
    }, M.pause = function () {
      M.paused = !0, C();
    }, M.play = function () {
      M.paused && (M.completed && M.reset(), M.paused = !1, K.push(M), C(), U());
    }, M.reverse = function () {
      x(), M.completed = !M.reversed, C();
    }, M.restart = function () {
      M.reset(), M.play();
    }, M.remove = function (n) {
      rn(W(n), M);
    }, M.reset(), M.autoplay && M.play(), M;
  }

  function tn(n, e) {
    for (var t = e.length; t--;) {
      M(n, e[t].animatable.target) && e.splice(t, 1);
    }
  }

  function rn(n, e) {
    var t = e.animations,
        r = e.children;
    tn(n, t);

    for (var a = r.length; a--;) {
      var o = r[a],
          u = o.animations;
      tn(n, u), u.length || o.children.length || r.splice(a, 1);
    }

    t.length || r.length || e.pause();
  }

  return en.version = "3.2.1", en.speed = 1, en.suspendWhenDocumentHidden = !0, en.running = K, en.remove = function (n) {
    for (var e = W(n), t = K.length; t--;) {
      rn(e, K[t]);
    }
  }, en.get = A, en.set = z, en.convertPx = D, en.path = function (n, e) {
    var t = i.str(n) ? g(n)[0] : n,
        r = e || 100;
    return function (n) {
      return {
        property: n,
        el: t,
        svg: H(t),
        totalLength: q(t) * (r / 100)
      };
    };
  }, en.setDashoffset = function (n) {
    var e = q(n);
    return n.setAttribute("stroke-dasharray", e), e;
  }, en.stagger = function (n, e) {
    void 0 === e && (e = {});
    var t = e.direction || "normal",
        r = e.easing ? h(e.easing) : null,
        a = e.grid,
        o = e.axis,
        u = e.from || 0,
        c = "first" === u,
        s = "center" === u,
        f = "last" === u,
        l = i.arr(n),
        d = l ? parseFloat(n[0]) : parseFloat(n),
        p = l ? parseFloat(n[1]) : 0,
        v = C(l ? n[1] : n) || 0,
        g = e.start || 0 + (l ? d : 0),
        m = [],
        y = 0;
    return function (n, e, i) {
      if (c && (u = 0), s && (u = (i - 1) / 2), f && (u = i - 1), !m.length) {
        for (var h = 0; h < i; h++) {
          if (a) {
            var b = s ? (a[0] - 1) / 2 : u % a[0],
                M = s ? (a[1] - 1) / 2 : Math.floor(u / a[0]),
                x = b - h % a[0],
                w = M - Math.floor(h / a[0]),
                k = Math.sqrt(x * x + w * w);
            "x" === o && (k = -x), "y" === o && (k = -w), m.push(k);
          } else m.push(Math.abs(u - h));

          y = Math.max.apply(Math, m);
        }

        r && (m = m.map(function (n) {
          return r(n / y) * y;
        })), "reverse" === t && (m = m.map(function (n) {
          return o ? n < 0 ? -1 * n : -n : Math.abs(y - n);
        }));
      }

      return g + (l ? (p - d) / y : d) * (Math.round(100 * m[e]) / 100) + v;
    };
  }, en.timeline = function (n) {
    void 0 === n && (n = {});
    var t = en(n);
    return t.duration = 0, t.add = function (r, a) {
      var o = K.indexOf(t),
          u = t.children;

      function c(n) {
        n.passThrough = !0;
      }

      o > -1 && K.splice(o, 1);

      for (var s = 0; s < u.length; s++) {
        c(u[s]);
      }

      var f = k(r, w(e, n));
      f.targets = f.targets || n.targets;
      var l = t.duration;
      f.autoplay = !1, f.direction = t.direction, f.timelineOffset = i.und(a) ? l : N(a, l), c(t), t.seek(f.timelineOffset);
      var d = en(f);
      c(d), u.push(d);
      var p = R(u, n);
      return t.delay = p.delay, t.endDelay = p.endDelay, t.duration = p.duration, t.seek(0), t.reset(), t.autoplay && t.play(), t;
    }, t;
  }, en.easing = h, en.penner = v, en.random = function (n, e) {
    return Math.floor(Math.random() * (e - n + 1)) + n;
  }, en;
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

  __webpack_require__(/*! ./sort */ "./themes/default/assets/js/sort.js");

  var anime = __webpack_require__(/*! ./anime */ "./themes/default/assets/js/anime.js");

  $(".gallery").each(function () {
    $(this).find("a").simpleLightbox();
  });

  if ($(".simplelightbox").length > 0) {
    $(".simplelightbox").simpleLightbox();
  }

  anime({
    targets: '.standard path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function delay(el, i) {
      return i * 250;
    },
    direction: 'alternate',
    loop: true
  });
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

/***/ "./themes/default/assets/js/sort.js":
/*!******************************************!*\
  !*** ./themes/default/assets/js/sort.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var sortButtons = _toConsumableArray(document.querySelectorAll(".flatSortBy"));

if (sortButtons) {
  var sortItems = function sortItems(sortBy) {
    var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'asc';
    var $people = $('#flatList'),
        $peopleli = $people.children('.flatItem');
    $peopleli.sort(function (a, b) {
      var an = a.getAttribute("data-".concat(sortBy)),
          bn = b.getAttribute("data-".concat(sortBy));

      switch (order) {
        case 'desc':
          if (an < bn) {
            return 1;
          }

          if (an > bn) {
            return -1;
          }

          break;

        case 'asc':
          if (an > bn) {
            return 1;
          }

          if (an < bn) {
            return -1;
          }

          break;

        default:
          return 0;
      }
    });
    $peopleli.detach().appendTo($people);
  };

  sortButtons.forEach(function (items) {
    items.addEventListener("click", function (e) {
      var sortBy = e.target.dataset.sortby;
      var order = e.target.dataset.order;
      sortItems(sortBy, order);
      sortButtons.forEach(function (button) {
        button.classList.remove("active");
        button.dataset.order = "asc";
      });
      items.classList.add("active");

      if (order == 'asc') {
        e.target.dataset.order = "desc";
      } else if (order == 'desc') {
        e.target.dataset.order = "asc";
      }
    });
  });
}

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

__webpack_require__(/*! D:\2022\CrocusHill\crocus-hill.szcz.pl\themes\default\assets\js\main.js */"./themes/default/assets/js/main.js");
module.exports = __webpack_require__(/*! D:\2022\CrocusHill\crocus-hill.szcz.pl\themes\default\assets\scss\main.scss */"./themes/default/assets/scss/main.scss");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map