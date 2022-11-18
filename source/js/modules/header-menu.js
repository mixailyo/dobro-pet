function headerMenu() {
  if (document.documentElement.clientWidth > 1023) {
    let headerMenuListItemMore = document.querySelector('.header__menu-list-item--more');
    let headerMenuListItemMoreLink = headerMenuListItemMore.querySelector('.header__menu-link'); 

    headerMenuListItemMore.addEventListener('click', () => {
      headerMenuListItemMore.classList.toggle('is-active');
    });

    headerMenuListItemMoreLink.addEventListener('click', (e) => {
      e.preventDefault();
    });

    document.addEventListener('click', (e) => {
      if (headerMenuListItemMore.classList.contains('is-active') && !e.target.closest('.header__menu-list-item--more')) {
        headerMenuListItemMore.classList.remove('is-active');
      }
    });
  } else {
    let headerHamburger = document.querySelector('.header__hamburger');
    let headerMenuNode = document.querySelector('.header__menu');
    let headerMenuLinks = document.querySelectorAll('.header__menu-link');

    headerHamburger.addEventListener('click', () => {
      headerHamburger.classList.toggle('is-active');
      headerMenuNode.classList.toggle('is-active');
      document.body.classList.toggle('scroll-lock');
    });

    headerMenuLinks.forEach((link) => {
      link.addEventListener('click', () => {
        headerHamburger.classList.remove('is-active');
        headerMenuNode.classList.remove('is-active');
        document.body.classList.remove('scroll-lock');
      });
    });
  }
}

export {headerMenu};
