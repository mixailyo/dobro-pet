function storiesSlider() {
  let storiesSliderNode = document.querySelector('.stories__slider');

  const swiper = new Swiper(storiesSliderNode, {
    loop: true,
    spaceBetween: 40,
    speed: 1500,

    autoplay: {
      delay: 5000,
    },

    lazy: {
      loadPrevNext: true,
    },

    pagination: {
      el: storiesSliderNode.querySelector('.swiper-pagination'),
    },
  });
}

export {storiesSlider};
