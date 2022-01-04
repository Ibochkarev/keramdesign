import {Swiper, Mousewheel, Navigation} from "swiper";

Swiper.use([Mousewheel, Navigation]);

$(document).ready(function() {
  $(".collections-list__slider .swiper-container").each(function(i) {
    var mySwiper = new Swiper($(this)[0], {
      // Navigation arrows
      nextButton: $(".collections-list__slider .swiper-button-next")[i],
      prevButton: $(".collections-list__slider .swiper-button-prev")[i],

      // Optional parameters
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
        1200: {
          slidesPerView: 4
        }
      },
    });
  });
});