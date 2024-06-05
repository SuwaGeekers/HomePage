window.onload = function () {
  //ヘッダー制御
  const heightPoint = 30;
  const ElHeader = document.getElementById('header');
  const scroll_event = function () {
    if (window.pageYOffset > heightPoint && !ElHeader.classList.contains('scroll')) {
      ElHeader.classList.add('scroll');
    } else if (window.pageYOffset < heightPoint && ElHeader.classList.contains('scroll')) {
      ElHeader.classList.remove('scroll');
    }
  };
  window.addEventListener('scroll', scroll_event);

  //ナビゲーション制御
  const ElNav = document.getElementById('nav');
  const ElNavButtom = document.getElementById('nav-button');
  const nav_open_event = function () {
    if (ElNav.classList.contains('open')) {
      ElNav.classList.remove('open');
    } else {
      ElNav.classList.add('open');
    }
  };
  ElNavButtom.addEventListener('click', nav_open_event);

  //自動スクロール制御
  const ScrollSetting = function () {
    const hedaerGap = document.getElementById('header').clientHeight;
    const ElScrollA = document.querySelectorAll('a[href^="#"]');
    for (let i = 0; i < ElScrollA.length; i++) {
      ElScrollA[i].addEventListener('click', (ev) => {
        ev.preventDefault();
        const id = ElScrollA[i].getAttribute('href').replace('#', '');
        const targetTop = document.getElementById(id).getBoundingClientRect().top;
        const offset = window.pageYOffset;
        window.scrollTo({
          top: targetTop + offset - hedaerGap,
          behavior: 'smooth',
        });
      });
    }
  };
  ScrollSetting();
};
