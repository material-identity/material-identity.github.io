import './index.css';

const ICONS = {
  system: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-monitor\" aria-hidden=\"true\"><rect width=\"20\" height=\"14\" x=\"2\" y=\"3\" rx=\"2\"></rect><line x1=\"8\" x2=\"16\" y1=\"21\" y2=\"21\"></line><line x1=\"12\" x2=\"12\" y1=\"17\" y2=\"21\"></line></svg>",
  light: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-sun\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"4\"></circle><path d=\"M12 2v2\"></path><path d=\"M12 20v2\"></path><path d=\"m4.93 4.93 1.41 1.41\"></path><path d=\"m17.66 17.66 1.41 1.41\"></path><path d=\"M2 12h2\"></path><path d=\"M20 12h2\"></path><path d=\"m6.34 17.66-1.41 1.41\"></path><path d=\"m19.07 4.93-1.41 1.41\"></path></svg>",
  dark: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-moon\" aria-hidden=\"true\"><path d=\"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401\"></path></svg>",
  menu: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-menu\" aria-hidden=\"true\"><path d=\"M4 5h16\"></path><path d=\"M4 12h16\"></path><path d=\"M4 19h16\"></path></svg>",
  close: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-x\" aria-hidden=\"true\"><path d=\"M18 6 6 18\"></path><path d=\"m6 6 12 12\"></path></svg>"
};

function setUpThemeToggle() {
  const button = document.querySelector('[data-theme-toggle]');
  if (!button) return;
  const nextPreference = { system: 'light', light: 'dark', dark: 'system' };
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
  let preference = 'system';
  try {
    const stored = localStorage.getItem('mi-theme');
    if (stored === 'light' || stored === 'dark') preference = stored;
  } catch {}
  const apply = () => {
    const dark = preference === 'dark' || (preference === 'system' && darkQuery.matches);
    document.documentElement.classList.toggle('dark', dark);
    const label = `Theme: ${preference}. Switch to ${nextPreference[preference]}`;
    button.innerHTML = ICONS[preference];
    button.setAttribute('aria-label', label);
    button.title = label;
  };
  button.addEventListener('click', () => {
    preference = nextPreference[preference];
    try {
      if (preference === 'system') localStorage.removeItem('mi-theme');
      else localStorage.setItem('mi-theme', preference);
    } catch {}
    apply();
  });
  darkQuery.addEventListener('change', apply);
  apply();
}

function setUpMobileMenu() {
  const button = document.querySelector('[data-menu-toggle]');
  const nav = document.getElementById('mobile-nav');
  if (!button || !nav) return;
  const setOpen = (open) => {
    nav.hidden = !open;
    button.innerHTML = open ? ICONS.close : ICONS.menu;
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };
  button.addEventListener('click', () => setOpen(nav.hidden));
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setOpen(false)));
}

function highlightCurrentSection() {
  const links = [...document.querySelectorAll('nav.toc a[href^="#"]')];
  if (links.length === 0) return;
  const sections = links.map((link) => document.getElementById(link.getAttribute('href').slice(1))).filter(Boolean);
  const setActive = (id) => links.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${id}`));
  setActive(sections[0].id);
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
    if (visible[0]) setActive(visible[0].target.id);
  }, { rootMargin: '-70px 0px -65% 0px' });
  sections.forEach((section) => observer.observe(section));
}

setUpThemeToggle();
setUpMobileMenu();
highlightCurrentSection();
