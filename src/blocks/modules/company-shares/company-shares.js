import {Swiper, Mousewheel, Navigation} from "swiper";

Swiper.use([Mousewheel, Navigation]);

let companySharesSlider = new Swiper(".company-shares__slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    watchOverflow: true,
    navigation: {
      nextEl: '.company-shares__slider-button__next',
      prevEl: '.company-shares__slider-button__prev',
    },
    grabCursor: true,
});
