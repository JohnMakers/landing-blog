// ====================================================================
// Wonderful Cannabis - Small JS helpers
// - Theme toggle with saved preference (default = light/white)
// - Icon (sun/moon) swaps to reflect current theme
// - Sticky header blur/shadow on scroll
// - Scroll-reveal animations (sections/cards), with gentle stagger
// - Smooth-scroll for on-page anchors
// ====================================================================

const root = document.documentElement;
const saved = localStorage.getItem('theme');

// Enable JS-specific styles
root.classList.add('js');

// Default to LIGHT (white). Only use saved value if it exists.
root.setAttribute('data-theme', saved ? saved : 'light');

function themeIconSvg(mode) {
  // Simple inline icons: sun for light, moon for dark
  if (mode === 'dark') {
    return `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"></path>
      </svg>`;
  }
  return `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 18a6 6 0 110-12 6 6 0 010 12zm0-16v2m0 16v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2m16 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
    </svg>`;
}
function updateThemeIcon() {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  const mode = root.getAttribute('data-theme');
  btn.innerHTML = themeIconSvg(mode);
  btn.setAttribute('aria-label', mode === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
}
updateThemeIcon();

document.getElementById('themeToggle')?.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateThemeIcon();
});

// Sticky header blur/shadow on scroll
const headerEl = document.querySelector('.nav-wrap');
function onScrollHeader() {
  if (!headerEl) return;
  headerEl.classList.toggle('scrolled', window.scrollY > 10);
}
window.addEventListener('scroll', onScrollHeader, { passive: true });
onScrollHeader();

// Scroll-reveal (sections/cards)
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const el = entry.target;
      el.classList.add('is-visible');

      // If it's a list container, gently stagger its children
      if (el.classList.contains('reveal-list')) {
        [...el.children].forEach((child, i) => {
          child.style.transitionDelay = `${i * 90}ms`;
          child.style.willChange = 'opacity, transform';
        });
      }
      io.unobserve(el);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal, .reveal-list').forEach((el) => io.observe(el));

// Optional smooth-scroll for anchor links (like #contact)
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href')?.slice(1);
    const el = id ? document.getElementById(id) : null;
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      el.focus?.();
    }
  });
});
