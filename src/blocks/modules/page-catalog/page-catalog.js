import {Swiper, Mousewheel, Navigation} from "swiper";

Swiper.use([Mousewheel, Navigation]);

$(document).ready(function() {
  $(".collections-list__slider .swiper-container").each(function(i) {
    var mySwiper = new Swiper($(this)[0], {
      // Navigation arrows
      nextButton: $(".collections-list__slider .swiper-button-next")[i],
      prevButton: $(".collections-list__slider .swiper-button-prev")[i],

      // Optional parameters
      slidesPerView: 4,
      spaceBetween: 30,
      watchOverflow: true,
      grabCursor: true,
      // breakpoints: {
      //   767: {
      //     slidesPerView: 1
      //   },
      //   1024: {
      //     slidesPerView: 2
      //   },
      //   1270: {
      //     slidesPerView: 1
      //   }
      // },
    });
  });
});