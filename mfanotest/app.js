const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.site-nav ul');
const yearEl = document.getElementById('year');
const header = document.querySelector('.site-header');

const setYear = () => {
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
};

const toggleNav = () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  navLinks.classList.toggle('open');
};

const closeNav = () => {
  navToggle.setAttribute('aria-expanded', 'false');
  navLinks.classList.remove('open');
};

if (navToggle && navLinks) {
  navToggle.addEventListener('click', toggleNav);
  navLinks.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeNav));
}

const handleScroll = () => {
  if (!header) return;
  if (window.scrollY > 32) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
};

window.addEventListener('scroll', handleScroll);
setYear();
handleScroll();
