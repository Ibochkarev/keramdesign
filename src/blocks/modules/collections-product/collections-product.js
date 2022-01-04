import {Swiper, Mousewheel, Navigation} from "swiper";

Swiper.use([Mousewheel, Navigation]);

let ProductCollectionSlider = new Swiper(".collection-product__slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    watchOverflow: true,
    navigation: {
      nextEl: '.collection-product__slider-button__next',
      prevEl: '.collection-product__slider-button__prev',
    },
    grabCursor: true,
});