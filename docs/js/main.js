!function(e){function n(n){for(var r,i,l=n[0],u=n[1],c=n[2],s=0,p=[];s<l.length;s++)i=l[s],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(f&&f(n);p.length;)p.shift()();return a.push.apply(a,c||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,l=1;l<t.length;l++){var u=t[l];0!==o[u]&&(r=!1)}r&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={0:0},a=[];function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=n,l=l.slice();for(var c=0;c<l.length;c++)n(l[c]);var f=u;a.push([8,1]),t()}([,,,,,function(e,n){},function(e,n){},function(e,n){},function(e,n,t){"use strict";t.r(n);var r=t(3),o=t.n(r);o()(window).on("load",(function(){o()(".loader").fadeOut("slow")}));t(5),t(6);var a=t(13),i=t(9),l=t(10),u=t(11),c=t(12);a.a.use([i.a,l.a,u.a,c.a]);new a.a(".main-slider__wrapper",{slidesPerView:1,effect:"fade",fadeEffect:{crossFade:!0},watchOverflow:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},grabCursor:!0});a.a.use([l.a,u.a,c.a]);new a.a(".new-collections__slider",{slidesPerView:3,spaceBetween:30,effect:"fade",fadeEffect:{crossFade:!0},watchOverflow:!0,navigation:{nextEl:".new-collection__slider-button__next",prevEl:".new-collection__slider-button__prev"},grabCursor:!0}),t(7)}]);