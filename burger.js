  document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const btn = document.querySelector('.hamburger');
    const drawer = document.getElementById('mobile-drawer');

    const setTop = () => {
        document.documentElement.style.setProperty('--header-h', header.offsetHeight + 'px');
    };
    setTop(); window.addEventListener('resize', setTop);

    if (!btn || !drawer) return;

    btn.addEventListener('click', () => {
      const open = header.classList.toggle('nav-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.classList.toggle('menu-open', open);
    });

    drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
        header.classList.remove('nav-open');
    btn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
    }));

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        header.classList.remove('nav-open');
    btn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
      }
    });
  });

