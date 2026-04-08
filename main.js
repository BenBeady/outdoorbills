/* ============================================================
   OUTDOOR BILLS — Global JS
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── CURSOR ── */
  const cur  = document.getElementById('ob-cursor');
  const ring = document.getElementById('ob-ring');
  if (cur && ring) {
    let mx=0,my=0,rx=0,ry=0;
    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      cur.style.left = mx+'px'; cur.style.top = my+'px';
    });
    (function tick(){
      rx += (mx-rx)*.1; ry += (my-ry)*.1;
      ring.style.left = rx+'px'; ring.style.top = ry+'px';
      requestAnimationFrame(tick);
    })();
    document.querySelectorAll('a,button,[data-hover]').forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('hov'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('hov'));
    });
  }

  /* ── NAV SCROLL ── */
  const nav = document.querySelector('.ob-nav');
  if (nav) window.addEventListener('scroll', () => nav.classList.toggle('solid', scrollY > 55));

  /* ── ACTIVE NAV LINK ── */
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.ob-nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  /* ── MOBILE DRAWER ── */
  window.openDrawer  = () => { document.getElementById('ob-drawer').classList.add('open'); document.body.style.overflow='hidden'; };
  window.closeDrawer = () => { document.getElementById('ob-drawer').classList.remove('open'); document.body.style.overflow=''; };

  /* ── SCROLL REVEAL ── */
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('show'); revealObs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.ob-reveal,.ob-reveal-l,.ob-reveal-r').forEach(el => revealObs.observe(el));

  /* ── YEAR ── */
  document.querySelectorAll('.ob-year').forEach(el => el.textContent = new Date().getFullYear());

  /* ── PAGE FADE ── */
  document.body.classList.add('page-fade');

});
