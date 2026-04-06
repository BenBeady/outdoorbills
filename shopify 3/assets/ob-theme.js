/* OUTDOOR BILLS — ob-theme.js */
document.addEventListener('DOMContentLoaded', function () {
  // Floating header scroll
  try {
    var hdr = document.getElementById('ob-floating-header');
    if (hdr) {
      window.addEventListener('scroll', function () {
        hdr.classList.toggle('ob-scrolled', window.scrollY > 60);
      }, { passive: true });
    }
  } catch(e) {}

  // Scroll reveal
  try {
    var items = document.querySelectorAll('.ob-reveal');
    if (items.length && 'IntersectionObserver' in window) {
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('ob-vis'); obs.unobserve(e.target); } });
      }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
      items.forEach(function (el) { obs.observe(el); });
    }
  } catch(e) {}

  // Video fallback
  try {
    var vid = document.getElementById('ob-yt-video');
    var fb  = document.getElementById('ob-yt-fallback');
    if (vid && fb) { vid.addEventListener('error', function () { vid.style.display = 'none'; fb.style.display = 'block'; }); }
  } catch(e) {}
});
