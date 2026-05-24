// ── Mobile nav toggle ──────────────────────────────
const toggle = document.getElementById('navToggle');
const navLinks = document.getElementById('nav-links');
if (toggle) toggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// ── Mark active top nav link ───────────────────────
const current = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('#nav-links a').forEach(a => {
  const href = a.getAttribute('href').split('/').pop();
  if (href === current) a.classList.add('active');
});

// ── Scroll reveal ──────────────────────────────────
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObs.unobserve(e.target);
    }
  });
}, { rootMargin: '-30px 0px', threshold: 0.05 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));
