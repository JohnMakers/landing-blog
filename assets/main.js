// ====================================================================
// Wonderful Cannabis - Small JS helpers
// - Theme toggle with saved preference
// - Optional smooth-scroll for on-page anchors
// ====================================================================

const root = document.documentElement;
const saved = localStorage.getItem('theme');
if (saved) root.setAttribute('data-theme', saved);
if (!saved && window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
  root.setAttribute('data-theme', 'dark');
}

document.getElementById('themeToggle')?.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

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
