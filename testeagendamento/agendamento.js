// Seção "Agendamento online" — tabs + conversão Google Ads
(function () {
  'use strict';

  var tabs = document.querySelectorAll('.ag-tab');
  var panels = document.querySelectorAll('.ag-panel');

  // Carrega o iframe do Google Agenda só quando o painel fica visível
  // (o snippet real fica em data-src; ver GUIA-CONFIGURACAO.md)
  function ativarPanel(panel) {
    var iframe = panel.querySelector('iframe[data-src]');
    if (iframe) {
      iframe.src = iframe.getAttribute('data-src');
      iframe.removeAttribute('data-src');
    }
  }

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) {
        t.setAttribute('aria-selected', t === tab ? 'true' : 'false');
        t.setAttribute('tabindex', t === tab ? '0' : '-1');
      });
      panels.forEach(function (p) {
        var ativo = p.id === tab.getAttribute('aria-controls');
        p.hidden = !ativo;
        if (ativo) ativarPanel(p);
      });
    });
  });

  // Estado inicial: primeira tab ativa
  if (panels.length) ativarPanel(panels[0]);

  // Google Ads — conversão "Agendamento online (site)".
  // TODO: criar a conversão no Google Ads e substituir o send_to abaixo
  // pelo rótulo correspondente (ex.: 'AW-17400747212/aBcD1234EfgH')
  document.addEventListener('click', function (e) {
    var link = e.target && e.target.closest ? e.target.closest('a[href="#agendamento"], .ag-tab') : null;
    if (link && typeof gtag === 'function') {
      gtag('event', 'agendar_online_click');
    }
  });
})();
