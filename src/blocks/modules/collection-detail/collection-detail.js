import {Swiper, Mousewheel, Navigation, Thumbs} from "swiper";

Swiper.use([Mousewheel, Navigation, Thumbs]);

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
});

var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".mySwiper2 .swiper-button-next",
    prevEl: ".mySwiper2 .swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
