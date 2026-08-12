// GitHub Pages SPA Router - runs immediately before page render
if (window.location.pathname.startsWith('/tools/') && !window.location.pathname.endsWith('.html')) {
  window.location.replace(window.location.pathname + '.html');
}
