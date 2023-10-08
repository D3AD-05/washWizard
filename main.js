var mainSwiper = new Swiper(".mainSwiper", {
  slidesPerView: 1,
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: " .swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
  }
  // thumbs: {
  //   swiper: thumbSwiper,
  // },
});

// var thumbSwiper = new Swiper(".thumbSwiper", {
//   loop: true,
//   slidesPerView: 1,
//   spaceBetween: 30,
//   effect: "fade",
//   fadeEffect: { crossFade: true },
// });

// mainSwiper.controller.control = thumbSwiper;
// thumbSwiper.controller.control = mainSwiper;
