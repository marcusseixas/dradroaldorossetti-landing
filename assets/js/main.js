// Clínica Rossetti — interações mínimas (sem frameworks)
(function () {
  'use strict';

  // Menu mobile
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Fechar menu de navegação' : 'Abrir menu de navegação');
    });

    // Fecha o menu ao navegar por âncora
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a') && nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Ano do rodapé
  var ano = document.getElementById('ano');
  if (ano) ano.textContent = String(new Date().getFullYear());

  // Google Ads — conversão "Clique no WhatsApp (site)" no clique de qualquer link de WhatsApp
  document.addEventListener('click', function (e) {
    var link = e.target && e.target.closest ? e.target.closest('a[href*="wa.me"], a[href*="api.whatsapp.com"]') : null;
    if (link && typeof gtag === 'function') {
      gtag('event', 'conversion', {
        send_to: 'AW-17400747212/d4_iCLOs7IIbEMypqelA'
      });
    }
  });
})();
