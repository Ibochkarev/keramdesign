import {Swiper, Mousewheel, EffectFade, Navigation} from "swiper";

Swiper.use([Mousewheel, EffectFade, Navigation]);

let newCollectionSlider = new Swiper(".new-collections__slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    watchOverflow: true,
    navigation: {
      nextEl: '.new-collection__slider-button__next',
      prevEl: '.new-collection__slider-button__prev',
    },
    grabCursor: true,
});