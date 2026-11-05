(function () {
  if (location.hostname !== 'hv8.pages.dev') return;

  var main = 'https://nzsh.cc';
  var target = main + location.pathname + location.search + location.hash;

  var ctrl = new AbortController();
  var timer = setTimeout(function () { ctrl.abort(); }, 3000);

  fetch(main + '/fav/favicon.ico?' + Date.now(), {
    method: 'HEAD',
    mode: 'cors',
    cache: 'no-store',
    referrerPolicy: 'no-referrer',
    signal: ctrl.signal
  }).then(function (r) {
    clearTimeout(timer);
    if (r.ok) location.replace(target);
  }).catch(function () {
    console.debug('[mirror] main domain unreachable, stay on mirror');
  });
})();
