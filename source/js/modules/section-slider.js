function sectionSlider() {
  let sectionSliders = document.querySelectorAll('.section__slider');

  sectionSliders.forEach(slider => {
    const swiper = new Swiper(slider, {
      slidesPerView: 'auto',
      speed: 1500,

      lazy: {
        loadPrevNext: true,
      },

      autoplay: {
        delay: 5000,
      },
  
      pagination: {
        el: slider.querySelector('.swiper-pagination'),
      },
  
      navigation: {
        nextEl: slider.querySelector('.swiper-navigation-btn--next'),
        prevEl: slider.querySelector('.swiper-navigation-btn--prev'),
      },
    });
  });
}

export {sectionSlider}