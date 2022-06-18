new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  slidesPerView: 'auto',
  slidesPerGroup: 1,
  watchOverflow: true,
  breakpoints: {
    768: {
      slidesPerView: Infinity,
    }
  }
});
