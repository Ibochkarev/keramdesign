import {Swiper, Mousewheel, Navigation} from "swiper";

Swiper.use([Mousewheel, Navigation]);

let companySharesSlider = new Swiper(".company-shares__slider", {
    navigation: {
      nextEl: '.company-shares__slider-button__next',
      prevEl: '.company-shares__slider-button__prev',
    },
    slidesPerView: 1,
    spaceBetween: 30,
    watchOverflow: true,
    grabCursor: true,
    breakpoints: {
      574: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      },
      992: {
        slidesPerView: 4
      },
      1200: {
        slidesPerView: 5
      }
    },
});
