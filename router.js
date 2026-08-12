// GitHub Pages SPA Router
(function() {
  const path = window.location.pathname;
  if (path.startsWith('/tools/') && !path.endsWith('.html')) {
    window.location.href = path + '.html';
  }
})();
