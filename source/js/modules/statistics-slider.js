function statisticsSlider() {
  let statisticsSliderNode = document.querySelector('.statistics__slider');

  const swiper = new Swiper(statisticsSliderNode, {
    slidesPerView: 3,
    spaceBetween: 40,
    loop: true,
    speed: 1500,

    autoplay: {
      delay: 5000,
    },

    lazy: {
      loadPrevNext: true,
    },

    pagination: {
      el: statisticsSliderNode.querySelector('.swiper-pagination'),
    },

    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  });
}

export {statisticsSlider};
