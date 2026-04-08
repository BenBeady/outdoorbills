/* ============================================================
   OUTDOOR BILLS — Global JS
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── CURSOR — always visible, smooth follow ── */
  const cur  = document.getElementById('ob-cursor');
  const ring = document.getElementById('ob-ring');

  if (cur && ring) {
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx, ry = my;

    // Move cursor dot instantly — no lag on the dot itself
    document.addEventListener('mousemove', e => {
      mx = e.clientX;
      my = e.clientY;
      cur.style.left  = mx + 'px';
      cur.style.top   = my + 'px';
      cur.style.opacity = '1';
      ring.style.opacity = '1';
    });

    // Ring follows with smooth lerp
    function animRing() {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + 'px';
      ring.style.top  = ry + 'px';
      requestAnimationFrame(animRing);
    }
    animRing();

    // Hide when mouse leaves window
    document.addEventListener('mouseleave', () => {
      cur.style.opacity  = '0';
      ring.style.opacity = '0';
    });
    document.addEventListener('mouseenter', () => {
      cur.style.opacity  = '1';
      ring.style.opacity = '1';
    });

    // Grow on hover
    const hoverEls = document.querySelectorAll('a, button, [data-hover], .prod-card, .field-card, .pillar-card, .video-card');
    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('hov'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('hov'));
    });
  }

  /* ── NAV SCROLL ── */
  const nav = document.querySelector('.ob-nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('solid', window.scrollY > 55);
    });
  }

  /* ── ACTIVE NAV LINK ── */
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.ob-nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  /* ── MOBILE DRAWER ── */
  window.openDrawer = () => {
    const d = document.getElementById('ob-drawer');
    if (d) { d.classList.add('open'); document.body.style.overflow = 'hidden'; }
  };
  window.closeDrawer = () => {
    const d = document.getElementById('ob-drawer');
    if (d) { d.classList.remove('open'); document.body.style.overflow = ''; }
  };

  /* ── SCROLL REVEAL ── */
  const ro = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('show');
        ro.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.ob-reveal, .ob-reveal-l, .ob-reveal-r').forEach(el => ro.observe(el));

  /* ── YEAR ── */
  document.querySelectorAll('.ob-year').forEach(el => el.textContent = new Date().getFullYear());

  /* ── PAGE FADE ── */
  document.body.classList.add('page-fade');

});
