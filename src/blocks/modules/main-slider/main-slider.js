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
      nextEl: '.main-slider__wrapper .swiper-button-next',
      prevEl: '.main-slider__wrapper .swiper-button-prev',
    },
    grabCursor: true,
});