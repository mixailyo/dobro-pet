import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {headerMenu} from './modules/header-menu';
import {goNext} from './modules/go-next';
import {statisticsSlider} from './modules/statistics-slider';
import {sectionSlider} from './modules/section-slider';
import {storiesSlider} from './modules/stories-slider';
import {copyLink} from './modules/copy-link';
import {scrollAnimations} from './modules/scroll-animations';
import smoothscroll from 'smoothscroll-polyfill';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  sectionSlider();
  storiesSlider();
  copyLink();
  smoothscroll.polyfill();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    headerMenu();
    goNext();
    statisticsSlider();
    scrollAnimations();
  });
});

// ---------------------------------

