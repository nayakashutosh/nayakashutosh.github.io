/* ══════════════════════════════════════════════
   MAIN.JS — Dark Mode · Nav Scroll · Scroll Reveal · Lightbox
   ══════════════════════════════════════════════ */

// ── NAV SCROLL
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 10));

// ── DARK MODE — SVG icon swaps between sun and moon
const darkBtn = document.getElementById('darkToggle');
const themeIcon = document.getElementById('themeIcon');
const moonPath = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
const sunPath = '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
darkBtn.addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
  themeIcon.innerHTML = isDark ? sunPath : moonPath;
});

// ── SCROLL REVEAL
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 70);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.06 });
document.querySelectorAll('.exp-item').forEach(el => observer.observe(el));

// ── CERTIFICATE LIGHTBOX
// Opens when you click any cert-card that has a data-cert="path/to/image.jpg" attribute.
// Usage in HTML:
//   <div class="cert-card" data-cert="assets/certs/nism-ra.jpg"> ... </div>

const lightbox      = document.getElementById('certLightbox');
const lightboxImg   = document.getElementById('certLightboxImg');
const lightboxTitle = document.getElementById('certLightboxTitle');
const lightboxClose = document.getElementById('certLightboxClose');

document.querySelectorAll('.cert-card[data-cert]').forEach(card => {
  card.addEventListener('click', () => {
    lightboxImg.src        = card.dataset.cert;
    lightboxTitle.textContent = card.querySelector('.cert-name').textContent;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
  // Clear src after transition so there's no flash next open
  setTimeout(() => { lightboxImg.src = ''; }, 300);
}

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
});
