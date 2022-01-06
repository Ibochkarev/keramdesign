import {Swiper, Mousewheel, Navigation} from "swiper";
import $ from "jquery";

Swiper.use([Mousewheel, Navigation]);

$(".collections-list__slider").each(function(i) {
  $(this).addClass('collections-list__slider-' + i);
  // $(".swiper-button-next", $(this)).addClass('swiper-button-next-' + i);
  // $(".swiper-button-prev", $(this)).addClass('swiper-button-prev-' + i);

  let collectionListSlider = new Swiper('.collections-list__slider-' + i, {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 30,
    watchOverflow: true,
    grabCursor: true,
    observer: true, 
    observeParents: true,
    navigation: {
      nextEl: ".collections-list__slider-" + i +  " .swiper-button-next",
      prevEl: ".collections-list__slider-" + i +  " .swiper-button-prev",
    },
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
