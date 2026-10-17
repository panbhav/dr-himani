// Preserve deep-link paths for the project Pages fallback, always on this origin.
(function (location) {
  var base = '/dr-himani';
  var path = location.pathname.indexOf(base + '/') === 0
    ? location.pathname.slice(base.length + 1) : '';
  location.replace(base + '/?/' + path.replace(/&/g, '~and~') +
    (location.search ? '&' + location.search.slice(1).replace(/&/g, '~and~') : '') + location.hash);
}(window.location));
