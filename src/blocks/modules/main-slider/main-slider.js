import {Swiper, Pagination, Mousewheel, EffectFade, Navigation} from "swiper";

Swiper.use([Pagination, Mousewheel, EffectFade, Navigation]);

let mainSlider = new Swiper(".main-slider__wrapper", {
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    watchOverflow: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    grabCursor: true,
});