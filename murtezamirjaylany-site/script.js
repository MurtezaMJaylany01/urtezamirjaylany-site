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
