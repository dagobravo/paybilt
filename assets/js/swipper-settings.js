const swiper = new Swiper('.products-swiper', {
  speed: 3000,
  autoplay: {
    delay: 5,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
  },
  loop: true,
  slidesPerView: isSm ? 1 : isMd ? 2 : 5,
  watchSlidesProgress: false,
  spaceBetween: 0,
  grabCursor: true
});

const perksSwiper = new Swiper('.perks-swiper', {
  loop: true,
  autoHeight: true,
  speed: 1000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
  },
});

function showNext() {
  perksSwiper.slideNext();
}