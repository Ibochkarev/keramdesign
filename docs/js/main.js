!function(e){function t(t){for(var n,s,o=t[0],l=t[1],c=t[2],p=0,_=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&_.push(i[s][0]),i[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(d&&d(t);_.length;)_.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,o=1;o<r.length;o++){var l=r[o];0!==i[l]&&(n=!1)}n&&(a.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},i={0:0},a=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var d=l;a.push([8,1]),r()}([,,,,,function(e,t){},function(e,t,r){(function(e){e(document).ready((function(){var t=e(".product-tabs__list > ._is-active"),r=e(".product-tabs__content"),n=r.find("._is-active"),i=n.outerHeight();n.show(),r.height(i),e(".product-tabs__list > li").on("click",(function(){e(".product-tabs__list > li").removeClass("_is-active"),e(this).addClass("_is-active"),t=e(".product-tabs__list ._is-active"),n.fadeOut(100,(function(){e(".product-tabs__content > li").removeClass("_is-active");var a=t.index();e(".product-tabs__content > li").eq(a).addClass("_is-active"),n=e(".product-tabs__content > ._is-active"),i=n.outerHeight(),r.stop().delay(50).animate({height:i},200,(function(){n.delay(50).fadeIn(100)}))}))}))}))}).call(this,r(3))},function(e,t){},function(e,t,r){"use strict";r.r(t);var n=r(3),i=r.n(n);i()(window).on("load",(function(){i()(".loader").fadeOut("slow")}));var a=i()(".header"),s=i()(".header").height(),o=i()(".header__burger"),l=i()(window).width(),c=i()(".header__search"),d=i()(".header__bottom-mobile"),p=i()(".header__bottom-wrapper"),_=i()(".header__mobile"),u=i()(".header__phone"),w=i()(".header__top-menu"),f=i()(".header__socials"),v=i()(".header__top-wrapper"),h=i()(".shadow");function b(){a.toggleClass("open"),h.toggleClass("hidden"),i()("body, html").hasClass("overflow-y")&&i()("body, html").removeClass("overflow-y")}function g(e){switch(!0){case e<991&&0==i()(".header__search",d).length:d.append(c),_.append(w),_.append(u),_.append(f),_.append(w);break;case e>991&&0!=i()(".header__search",d).length:p.append(c),p.append(u),v.append(f),v.append(w)}}console.log(s),o.on("click",(function(){b()})),h.on("click",(function(){b()})),g(l),i()(window).on("resize",(function(){var e=i()(window).width();g(e),e>991&&(a.removeClass("open"),h.addClass("hidden"),i()("body, html").removeClass("overflow-y"))})),i()(window).on("scroll",(function(){var e,t=i()(window).scrollTop(),r=i()(window).width();switch(!0){case r>991:e=123;break;case r<991&&r>359:e=125;break;case r<359:e=120}t>s?(a.addClass("fixed"),i()("main").css("margin-top",e)):(a.removeClass("fixed"),i()("main").css("margin-top","0"))}));r(5);var m=r(14),y=r(9),P=r(10),x=r(11),C=r(12);m.a.use([y.a,P.a,x.a,C.a]);new m.a(".main-slider__wrapper",{slidesPerView:1,effect:"fade",fadeEffect:{crossFade:!0},watchOverflow:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".main-slider__wrapper .swiper-button-next",prevEl:".main-slider__wrapper .swiper-button-prev"},grabCursor:!0});m.a.use([P.a,C.a]);new m.a(".new-collections__slider",{navigation:{nextEl:".new-collection__slider-button__next",prevEl:".new-collection__slider-button__prev"},slidesPerView:1,spaceBetween:30,watchOverflow:!0,grabCursor:!0,breakpoints:{574:{slidesPerView:2},992:{slidesPerView:3}}});m.a.use([P.a,C.a]);new m.a(".collection-product__slider",{slidesPerView:3,spaceBetween:30,watchOverflow:!0,navigation:{nextEl:".collection-product__slider-button__next",prevEl:".collection-product__slider-button__prev"},grabCursor:!0});m.a.use([P.a,C.a]),i()(".collections-list__slider").each((function(e){i()(this).addClass("collections-list__slider-"+e);new m.a(".collections-list__slider-"+e,{slidesPerView:1,spaceBetween:30,watchOverflow:!0,grabCursor:!0,observer:!0,observeParents:!0,navigation:{nextEl:".collections-list__slider-"+e+" .swiper-button-next",prevEl:".collections-list__slider-"+e+" .swiper-button-prev"},breakpoints:{574:{slidesPerView:2},992:{slidesPerView:3},1200:{slidesPerView:4}}})})),m.a.use([P.a,C.a]);new m.a(".company-shares__slider",{navigation:{nextEl:".company-shares__slider-button__next",prevEl:".company-shares__slider-button__prev"},slidesPerView:1,spaceBetween:30,watchOverflow:!0,grabCursor:!0,breakpoints:{574:{slidesPerView:2},768:{slidesPerView:3},992:{slidesPerView:4},1200:{slidesPerView:5}}});m.a.use([P.a,C.a]);new m.a(".brands__slider",{navigation:{nextEl:".brands__slider-button__next",prevEl:".brands__slider-button__prev"},slidesPerView:2,spaceBetween:30,watchOverflow:!0,grabCursor:!0,breakpoints:{768:{slidesPerView:3},992:{slidesPerView:4},1200:{slidesPerView:5}}});var O=r(13);m.a.use([P.a,C.a,O.a]);var V=new m.a(".mySwiper",{spaceBetween:10,slidesPerView:3,freeMode:!0,watchSlidesProgress:!0});new m.a(".mySwiper2",{spaceBetween:10,navigation:{nextEl:".mySwiper2 .swiper-button-next",prevEl:".mySwiper2 .swiper-button-prev"},thumbs:{swiper:V}}),r(6),r(7)}]);