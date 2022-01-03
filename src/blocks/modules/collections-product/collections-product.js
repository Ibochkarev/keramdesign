import {Swiper, Mousewheel, EffectFade, Navigation} from "swiper";

Swiper.use([Mousewheel, EffectFade, Navigation]);

let ProductCollectionSlider = new Swiper(".collection-product__slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    watchOverflow: true,
    navigation: {
      nextEl: '.collection-product__slider-button__next',
      prevEl: '.collection-product__slider-button__prev',
    },
    grabCursor: true,
});