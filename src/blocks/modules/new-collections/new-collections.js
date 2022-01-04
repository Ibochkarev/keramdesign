import {Swiper, Mousewheel, Navigation} from "swiper";

Swiper.use([Mousewheel, Navigation]);

let newCollectionSlider = new Swiper(".new-collections__slider", {
    navigation: {
      nextEl: '.new-collection__slider-button__next',
      prevEl: '.new-collection__slider-button__prev',
    },
    slidesPerView: 1,
    spaceBetween: 30,
    watchOverflow: true,
    grabCursor: true,
    breakpoints: {
      574: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 3
      },
    },
});