function goNext() {
  let goNextBtns = document.querySelectorAll('[data-go-next]');
  let sections = document.querySelectorAll('section');

  goNextBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      sections.forEach((section, i) => {
        if (section === btn.closest('section')) {
          sections[i + 1]?.scrollIntoView({block: 'start', behavior: 'smooth'});
        }
      });
    });
  });
}

export {goNext};
