/* Murteza Mir Jaylany — murtezamirjaylany.com */
(function () {
  'use strict';

  /* ---------- mobile navigation ---------- */
  var burger = document.querySelector('.burger');
  var nav = document.getElementById('nav');

  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', String(open));
    });

    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        nav.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
        burger.focus();
      }
    });
  }

  /* ---------- footer year ---------- */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- contact form: composes a mailto by inquiry type ---------- */
  var EMAIL = 'YOUR_EMAIL_HERE';          /* <-- put your real address here */

  var send = document.getElementById('send');
  if (send) {
    send.addEventListener('click', function () {
      var topic = document.getElementById('topic').value;
      var note = document.getElementById('note').value;
      window.location.href =
        'mailto:' + EMAIL +
        '?subject=' + encodeURIComponent(topic + ' — murtezamirjaylany.com') +
        '&body=' + encodeURIComponent(note);
    });
  }

  /* ---------- impact figures count up when scrolled into view ---------- */
  var strip = document.querySelector('.impact');
  if (strip && 'IntersectionObserver' in window &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {

    new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        obs.unobserve(entry.target);

        entry.target.querySelectorAll('b').forEach(function (el) {
          var text = el.textContent;
          var target = parseInt(text.replace(/\D/g, ''), 10);
          if (!target) return;
          var suffix = text.replace(/[\d,]/g, '');
          var start = performance.now();

          (function step(now) {
            var t = Math.min((now - start) / 900, 1);
            var eased = 1 - Math.pow(1 - t, 3);
            el.textContent = Math.round(target * eased).toLocaleString() + suffix;
            if (t < 1) requestAnimationFrame(step);
          })(start);
        });
      });
    }, { threshold: 0.4 }).observe(strip);
  }

  /* ---------- discovery scope ----------
     The sweep takes 9s per revolution. Each contact lights up as the
     sweep line crosses its bearing, so the animation matches the
     geometry instead of just staggering evenly.                      */

  var DELAYS = [200, 1175, 2200, 3100, 4075, 5125, 6150, 7275, 8300];

  var blips = document.querySelectorAll('.blip');
  var rows = document.querySelectorAll('.readout li');
  var counter = document.querySelector('[data-count]');
  var calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (calm) {
    if (counter) counter.textContent = String(DELAYS.length);
    return;
  }

  DELAYS.forEach(function (ms, i) {
    if (blips[i]) blips[i].style.setProperty('--d', ms + 'ms');
    if (rows[i]) rows[i].style.setProperty('--d', ms + 'ms');
  });

  if (counter) {
    counter.textContent = '0';
    DELAYS.forEach(function (ms, i) {
      setTimeout(function () {
        counter.textContent = String(i + 1);
      }, ms + 150);
    });
  }
})();
