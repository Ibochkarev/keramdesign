!function(e){function r(r){for(var t,s,i=r[0],l=r[1],d=r[2],c=0,w=[];c<i.length;c++)s=i[c],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&w.push(a[s][0]),a[s]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t]);for(p&&p(r);w.length;)w.shift()();return o.push.apply(o,d||[]),n()}function n(){for(var e,r=0;r<o.length;r++){for(var n=o[r],t=!0,i=1;i<n.length;i++){var l=n[i];0!==a[l]&&(t=!1)}t&&(o.splice(r--,1),e=s(s.s=n[0]))}return e}var t={},a={0:0},o=[];function s(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,r,n){s.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,r){if(1&r&&(e=s(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)s.d(n,t,function(r){return e[r]}.bind(null,t));return n},s.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(r,"a",r),r},s.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},s.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=r,i=i.slice();for(var d=0;d<i.length;d++)r(i[d]);var p=l;o.push([7,1]),n()}([,,,,,function(e,r){},function(e,r){},function(e,r,n){"use strict";n.r(r);var t=n(3),a=n.n(t);a()(window).on("load",(function(){a()(".loader").fadeOut("slow")}));var o=a()(".header"),s=a()(".header").height(),i=a()(".header__burger"),l=a()(window).width(),d=a()(".header__search"),p=a()(".header__bottom-mobile"),c=a()(".header__bottom-wrapper"),w=a()(".header__mobile"),u=a()(".header__phone"),_=a()(".header__top-menu"),f=a()(".header__socials"),b=a()(".header__top-wrapper"),h=a()(".shadow");function v(){o.toggleClass("open"),h.toggleClass("hidden"),a()("body, html").hasClass("overflow-y")&&a()("body, html").removeClass("overflow-y")}function g(e){switch(!0){case e<991&&0==a()(".header__search",p).length:p.append(d),w.append(_),w.append(u),w.append(f),w.append(_);break;case e>991&&0!=a()(".header__search",p).length:c.append(d),c.append(u),b.append(f),b.append(_)}}console.log(s),i.on("click",(function(){v()})),h.on("click",(function(){v()})),g(l),a()(window).on("resize",(function(){var e=a()(window).width();g(e),e>991&&(o.removeClass("open"),h.addClass("hidden"),a()("body, html").removeClass("overflow-y"))})),a()(window).on("scroll",(function(){var e,r=a()(window).scrollTop(),n=a()(window).width();switch(!0){case n>991:e=123;break;case n<991&&n>359:e=125;break;case n<359:e=120}r>s?(o.addClass("fixed"),a()("main").css("margin-top",e)):(o.removeClass("fixed"),a()("main").css("margin-top","0"))}));n(5);var m=n(13),y=n(8),P=n(9),x=n(10),V=n(11);m.a.use([y.a,P.a,x.a,V.a]);new m.a(".main-slider__wrapper",{slidesPerView:1,effect:"fade",fadeEffect:{crossFade:!0},watchOverflow:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".main-slider__wrapper .swiper-button-next",prevEl:".main-slider__wrapper .swiper-button-prev"},grabCursor:!0});m.a.use([P.a,V.a]);new m.a(".new-collections__slider",{navigation:{nextEl:".new-collection__slider-button__next",prevEl:".new-collection__slider-button__prev"},slidesPerView:1,spaceBetween:30,watchOverflow:!0,grabCursor:!0,breakpoints:{574:{slidesPerView:2},992:{slidesPerView:3}}});m.a.use([P.a,V.a]);new m.a(".collection-product__slider",{slidesPerView:3,spaceBetween:30,watchOverflow:!0,navigation:{nextEl:".collection-product__slider-button__next",prevEl:".collection-product__slider-button__prev"},grabCursor:!0});m.a.use([P.a,V.a]),a()(".collections-list__slider").each((function(e){a()(this).addClass("collections-list__slider-"+e);new m.a(".collections-list__slider-"+e,{slidesPerView:1,spaceBetween:30,watchOverflow:!0,grabCursor:!0,observer:!0,observeParents:!0,navigation:{nextEl:".collections-list__slider-"+e+" .swiper-button-next",prevEl:".collections-list__slider-"+e+" .swiper-button-prev"},breakpoints:{574:{slidesPerView:2},992:{slidesPerView:3},1200:{slidesPerView:4}}})})),m.a.use([P.a,V.a]);new m.a(".company-shares__slider",{navigation:{nextEl:".company-shares__slider-button__next",prevEl:".company-shares__slider-button__prev"},slidesPerView:1,spaceBetween:30,watchOverflow:!0,grabCursor:!0,breakpoints:{574:{slidesPerView:2},768:{slidesPerView:3},992:{slidesPerView:4},1200:{slidesPerView:5}}});m.a.use([P.a,V.a]);new m.a(".brands__slider",{navigation:{nextEl:".brands__slider-button__next",prevEl:".brands__slider-button__prev"},slidesPerView:2,spaceBetween:30,watchOverflow:!0,grabCursor:!0,breakpoints:{768:{slidesPerView:3},992:{slidesPerView:4},1200:{slidesPerView:5}}});var O=n(12);m.a.use([P.a,V.a,O.a]);var C=new m.a(".mySwiper",{spaceBetween:10,slidesPerView:3,freeMode:!0,watchSlidesProgress:!0});new m.a(".mySwiper2",{spaceBetween:10,navigation:{nextEl:".mySwiper2 .swiper-button-next",prevEl:".mySwiper2 .swiper-button-prev"},thumbs:{swiper:C}}),n(6)}]);