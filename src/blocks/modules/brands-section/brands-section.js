import {Swiper, Mousewheel, Navigation} from "swiper";

Swiper.use([Mousewheel, Navigation]);

let brandsSlider = new Swiper(".brands__slider", {
    navigation: {
      nextEl: '.brands__slider-button__next',
      prevEl: '.brands__slider-button__prev',
    },
    slidesPerView: 2,
    spaceBetween: 30,
    watchOverflow: true,
    grabCursor: true,
    breakpoints: {
      768: {
        slidesPerView: 3
      },
      992: {
        slidesPerView: 4
      },
    },
});
