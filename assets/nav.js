/* Generoitu: multisite/tools/lofi_nav.py (rakenne navigaatioprotosta). Älä muokkaa käsin. */
(function () {
  'use strict';
  var D = {"top": [{"label": "Toimialat", "url": "/toimialat/", "kids": [{"label": "Energia", "url": "/toimialat/energia/", "kids": [{"label": "Tuulivoima", "url": "/toimialat/energia/tuulivoima/"}, {"label": "Akkuenergiavarastot", "url": "/toimialat/energia/akkuenergiavarastot/"}, {"label": "Sähköasemat ja verkot", "url": "/toimialat/energia/sahkoasemat-ja-verkot/"}]}, {"label": "Teollisuus", "url": "/toimialat/teollisuus/", "kids": []}, {"label": "Datakeskukset", "url": "/toimialat/datakeskukset/", "kids": []}, {"label": "Infra", "url": "/toimialat/infra/", "kids": []}, {"label": "Pysäköinti ja toimitilat", "url": "/toimialat/pysakointitalot/", "kids": []}, {"label": "Betonirakentaminen", "url": "/toimialat/betonirakentaminen/", "kids": [{"label": "Paikallavalu", "url": "/toimialat/betonirakentaminen/#paikallavalu", "anchor": true}, {"label": "Liukuvalu", "url": "/toimialat/betonirakentaminen/#liukuvalu", "anchor": true}, {"label": "Jännitetyt säiliöt", "url": "/toimialat/betonirakentaminen/#sailiot", "anchor": "sailiot"}, {"label": "Betonirungot", "url": "/toimialat/betonirakentaminen/#rungot", "anchor": "rungot"}]}]}, {"label": "Referenssit", "url": "/referenssit/", "flat": true, "kids": [{"label": "Lestijärven tuulipuisto", "url": "/referenssit/lestijarven-tuulipuisto/", "sub": "Case-sivu"}]}, {"label": "Ajankohtaista", "url": "/ajankohtaista/", "flat": true, "kids": [{"label": "Talvibetonointi", "url": "/ajankohtaista/talvibetonointi/", "sub": "Artikkeli"}]}, {"label": "Ura", "url": "/ura/", "kids": [{"label": "Avoimet työpaikat", "url": "/ura/#avoimet", "anchor": "avoimet"}, {"label": "Kesätyö ja harjoittelu", "url": "/ura/#kesatyo", "anchor": "kesatyo"}, {"label": "Uratarinat", "url": "/ura/#tarinat", "anchor": "tarinat"}]}, {"label": "KSBR", "url": "/ksbr/", "kids": [{"label": "Suunnitteluyhteistyö", "url": "/ksbr/suunnitteluyhteistyo/"}, {"label": "Toteutusmallit", "url": "/ksbr/toteutusmallit/"}, {"label": "Laatu, turvallisuus ja sertifikaatit", "url": "/ksbr/laatu-ja-turvallisuus/"}, {"label": "Vastuullisuus", "url": "/ksbr/vastuullisuus/"}, {"label": "GRK-konserni ↗", "site": "grk"}]}], "cta": {"label": "Yhteystiedot", "url": "/yhteystiedot/", "kids": [{"label": "Yhteyshenkilöt", "url": "/yhteystiedot/yhteyshenkilot/"}, {"label": "Lähetä tarjouspyyntö", "url": "/yhteystiedot/tarjouspyynto/"}, {"label": "Laskutustiedot", "url": "/yhteystiedot/#laskutustiedot", "anchor": "laskutustiedot"}, {"label": "Media", "url": "/yhteystiedot/media/"}]}, "sivu": {"/": "index.html", "/toimialat/": "toimialat.html", "/toimialat/energia/": "energia.html", "/toimialat/energia/tuulivoima/": "tuulivoima.html", "/toimialat/energia/akkuenergiavarastot/": "akkuenergiavarastot.html", "/toimialat/energia/sahkoasemat-ja-verkot/": "sahkoasemat-ja-verkot.html", "/toimialat/teollisuus/": "teollisuus.html", "/toimialat/datakeskukset/": "datakeskukset.html", "/toimialat/infra/": "infra.html", "/toimialat/pysakointitalot/": "pysakointi-ja-toimitilat.html", "/ajankohtaista/": "ajankohtaista.html", "/toimialat/betonirakentaminen/": "betonirakentaminen.html", "/referenssit/": "referenssit.html", "/referenssit/lestijarven-tuulipuisto/": "lestijarven-tuulipuisto.html", "/ajankohtaista/talvibetonointi/": "talvibetonointi.html", "/ura/": "ura.html", "/ksbr/": "ksbr.html", "/ksbr/suunnitteluyhteistyo/": "suunnitteluyhteistyo.html", "/ksbr/toteutusmallit/": "toteutusmallit.html", "/ksbr/laatu-ja-turvallisuus/": "laatu-ja-turvallisuus.html", "/yhteystiedot/": "yhteystiedot.html", "/yhteystiedot/yhteyshenkilot/": "yhteystiedot.html#yhteyshenkilot", "/yhteystiedot/tarjouspyynto/": "tarjouspyynto.html"}, "ankkuri": {"/toimialat/betonirakentaminen/#paikallavalu": "betonirakentaminen.html#paikallavalu", "/toimialat/betonirakentaminen/#liukuvalu": "betonirakentaminen.html#liukuvalu", "/toimialat/betonirakentaminen/#sailiot": "betonirakentaminen.html#sailiot", "/toimialat/betonirakentaminen/#rungot": "betonirakentaminen.html#rungot", "/ura/#avoimet": "ura.html#avoimet", "/ura/#kesatyo": "ura.html#kesatyo", "/ura/#tarinat": "ura.html#tarinat", "/yhteystiedot/#laskutustiedot": "yhteystiedot.html#laskutustiedot"}, "pois": ["/vastaanottopaikat/#asfalttiasemat"], "subPois": ["Paikkakuntasivu (pohja)", "Case-sivu"], "hub": {"Toimialat": "Kaikki toimialat", "Ura": "Ura KSBR:llä", "KSBR": "KSBR yrityksenä", "Yhteystiedot": "Kaikki yhteystiedot"}};
  var T = D.txt || { paa: 'Päävalikko', valikko: 'Valikko', sulje: 'Sulje' };
  var KSBR = 'https://ollirimpilainen.github.io/grk-lofi-proto/';
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var clean = function (l) { return l.replace(' ↗', ''); };
  var tyhja = function (label, ylin) { return 'tyhja.html?s=' + encodeURIComponent(label) + (ylin ? '&y=' + encodeURIComponent(ylin) : ''); };
  // linkki solmulle: oikea sivu, sivun osio, ulkoinen, tai tyhjä sivu (palvelukortin tyhjä sivu on liiketoimintasivu, jonka osio se on)
  function href(n, ylin, vanhempi) {
    if (n.site) return KSBR;
    if (n.ext) return 'https://' + n.ext;
    if (n.url && D.ankkuri[n.url]) return D.ankkuri[n.url];
    if (n.url && D.sivu[n.url]) return D.sivu[n.url];
    if (n.anchor && vanhempi) return D.sivu[vanhempi.url] || tyhja(clean(vanhempi.label), ylin);
    return tyhja(clean(n.label), ylin);
  }
  var ulos = function (n) { return n.site || n.ext ? ' <span class="nv-ext" aria-hidden="true">↗</span>' : ''; };
  var NUOLI = '<svg class="nv-arr" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6"/></svg>';
  var OIK = '<svg class="nv-chev" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg>';
  var kids = function (n) { return (n.kids || []).filter(function (k) { return D.pois.indexOf(k.url) < 0; }); };
  var sub = function (n) { return n.sub && D.subPois.indexOf(n.sub) < 0 ? n.sub : ''; };
  // koontisivun rivi nimetään kaikkien sivujen linkiksi (Baymard: pelkkä osion nimi jää huomaamatta)
  var HUB = D.hub || { 'Palvelut': 'Kaikki palvelut', 'Toimialat': 'Kaikki toimialat', 'Vastaanottopaikat': 'Kaikki vastaanottopaikat ja kartta',
    'Yritys': 'GRK yrityksenä', 'Ura': 'Ura GRK:lla', 'Yhteystiedot': 'Kaikki yhteystiedot' };
  var hubNimi = function (n) { return HUB[n.label] || clean(n.label); };
  // liiketoiminnan nimi yläotsikkona kuten etusivun palvelukartassa; pitkä yhdyssana tavutetaan kapeaan sarakkeeseen
  var subTavu = function (s) { return esc(s).replace('pohjarakentaminen', 'pohja&shy;rakentaminen'); };

  function paneeli(n) {
    var ylin = n.label, h = '<div class="nv-in">' + (n.nohub ? '' : '<a class="nv-hub" href="' + href(n, ylin) + '">' + esc(hubNimi(n)) + NUOLI + '</a>');
    if (n.mega) {
      h += '<div class="nv-cols">' + kids(n).map(function (c) {
        return '<div class="nv-col">' + (sub(c) ? '<span class="nv-sub">' + subTavu(sub(c)) + '</span>' : '') +
          '<a class="nv-h" href="' + href(c, ylin) + '">' + esc(clean(c.label)) + '</a>' +
          '<ul>' + kids(c).map(function (k) { return '<li><a href="' + href(k, ylin, c) + '">' + esc(clean(k.label)) + ulos(k) + '</a></li>'; }).join('') + '</ul></div>';
      }).join('') + '</div>';
    } else if (kids(n).some(function (k) { return kids(k).length; })) {
      // 4.11. (Olli: "ksbr:n navigaatio on perseestä protossa"): kankaan KSBR-Navigaatio-artboardin mukaan ryhmät ja
      // niiden alasivut/osiot samassa kapeassa pudotusvalikossa (Energia → Tuulivoima …, Betonirakentaminen → osiot)
      h += '<ul class="nv-list nv-list--grp">' + kids(n).map(function (k) {
        var alla = kids(k);
        return '<li class="nv-grp"><a href="' + href(k, ylin) + '">' + esc(clean(k.label)) + ulos(k) + '</a>' +
          (alla.length ? '<ul>' + alla.map(function (a) { return '<li><a href="' + href(a, ylin, k) + '">' + esc(clean(a.label)) + ulos(a) + '</a></li>'; }).join('') + '</ul>' : '') + '</li>';
      }).join('') + '</ul>';
    } else {
      var lista = kids(n), sar = lista.length > 12 ? 4 : lista.length > 6 ? 2 : 1;
      h += '<ul class="nv-list" style="--sar:' + sar + '">' + lista.map(function (k) {
        return '<li><a href="' + href(k, ylin) + '">' + esc(clean(k.label)) + ulos(k) + (sub(k) ? '<small>' + esc(sub(k)) + '</small>' : '') + '</a></li>';
      }).join('') + '</ul>';
    }
    return h + '</div>';
  }

  var hd = document.querySelector('header.b-nav');
  if (!hd) return;
  var bar = hd.querySelector('.b-nav__bar');
  var solmu = {};
  D.top.forEach(function (n) { solmu[n.label] = n; });
  solmu[D.cta.label] = D.cta;
  var pan = document.createElement('div');
  pan.className = 'nv-panel'; pan.id = 'nv-panel'; pan.hidden = true;
  hd.appendChild(pan);
  var auki = null;
  function sulje() { if (!auki) return; auki.classList.remove('is-open'); auki.setAttribute('aria-expanded', 'false'); auki = null; pan.hidden = true; }
  // Palvelut on megavalikko koko leveydellä, muut tavallisia pudotusvalikoita valikkokohdan alla (Olli 28.10.)
  function avaa(el, n) {
    sulje(); auki = el; el.classList.add('is-open'); el.setAttribute('aria-expanded', 'true');
    pan.innerHTML = paneeli(n); pan.hidden = false;
    pan.classList.toggle('nv-panel--drop', !n.mega);
    if (n.mega) { pan.style.left = ''; pan.style.right = ''; }
    else {
      var hr = hd.getBoundingClientRect(), er = el.getBoundingClientRect();
      pan.style.right = 'auto'; pan.style.left = Math.max(0, Math.min(er.left - hr.left - 24, hr.width - pan.offsetWidth)) + 'px';
    }
  }
  hd.querySelectorAll('.b-nav__item--menu, .b-nav__contact').forEach(function (el) {
    var n = solmu[el.textContent.trim()];
    if (!n || !kids(n).length) return;
    el.setAttribute('role', 'button'); el.setAttribute('aria-expanded', 'false'); el.setAttribute('aria-controls', 'nv-panel');
    el.addEventListener('click', function (e) { e.preventDefault(); if (auki === el) sulje(); else avaa(el, n); });
  });
  document.addEventListener('click', function (e) { if (auki && !e.target.closest('header.b-nav')) sulje(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { var a = auki; sulje(); if (a) a.focus(); suljeMob(); } });

  /* mobiili: valikkopainike ja porautuva valikko; jokaisen tason ensimmäinen rivi on koontisivu */
  var mb = document.createElement('button');
  mb.type = 'button'; mb.className = 'nv-mb'; mb.setAttribute('aria-expanded', 'false'); mb.setAttribute('aria-controls', 'nv-sheet');
  bar.appendChild(mb);
  var sh = document.createElement('nav');
  sh.className = 'nv-sheet'; sh.id = 'nv-sheet'; sh.hidden = true; sh.setAttribute('aria-label', T.paa);
  hd.appendChild(sh);
  var polku = [];
  var juuri = { label: T.valikko, kids: D.top.concat([D.cta]), juuri: true };
  function mbTeksti(o) {
    mb.innerHTML = o ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>' + T.sulje
      : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>' + T.valikko;
  }
  function piirraMob() {
    var taso = polku.length ? polku[polku.length - 1] : juuri, ylin = polku.length ? polku[0].label : '', h = '';
    if (polku.length) {
      h += '<button type="button" class="nv-back" data-back="1"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 6-6 6 6 6"/></svg>' +
        esc(polku.length > 1 ? polku[polku.length - 2].label : T.paa) + '</button>';
      if (sub(taso)) h += '<p class="nv-sub">' + subTavu(sub(taso)) + '</p>';
      h += taso.nohub ? '<p class="nv-hub">' + esc(clean(taso.label)) + '</p>' : '<a class="nv-hub" href="' + href(taso, ylin) + '">' + esc(polku.length === 1 ? hubNimi(taso) : clean(taso.label)) + NUOLI + '</a>';
    }
    h += '<ul class="nv-mlist">' + kids(taso).map(function (k, i) {
      var vanh = taso.juuri ? null : taso;
      if (kids(k).length && !k.flat) return '<li><button type="button" data-drill="' + i + '">' + esc(clean(k.label)) + OIK + '</button></li>';
      return '<li><a href="' + href(k, ylin || k.label, vanh) + '">' + esc(clean(k.label)) + ulos(k) + '</a></li>';
    }).join('') + '</ul>';
    sh.innerHTML = h;
  }
  function suljeMob() { sh.hidden = true; mb.setAttribute('aria-expanded', 'false'); mbTeksti(false); }
  mbTeksti(false);
  mb.addEventListener('click', function () {
    var o = sh.hidden; if (!o) { suljeMob(); return; }
    polku = []; piirraMob(); sh.hidden = false; mb.setAttribute('aria-expanded', 'true'); mbTeksti(true);
  });
  sh.addEventListener('click', function (e) {
    var t = e.target.closest('[data-drill],[data-back]');
    if (!t) return;
    if (t.dataset.back) polku.pop();
    else { var taso = polku.length ? polku[polku.length - 1] : juuri; polku.push(kids(taso)[+t.dataset.drill]); }
    piirraMob(); sh.scrollTop = 0;
  });
})();
/* Haitarit (Olli 28.10.): avautuvat ja sulkeutuvat animoituna, ja klikattu otsikko pysyy samassa kohdassa näyttöä,
   vaikka saman ryhmän (details[name]) yläpuolinen kohta sulkeutuu. Natiivi name-ryhmä korvataan data-ryhmällä, jotta
   sulkeminen voidaan animoida eikä sivu nytkähdä. */
(function () {
  'use strict';
  var vahenna = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var KESTO = vahenna ? 0 : 320, EASE = 'cubic-bezier(.22,1,.36,1)';
  document.querySelectorAll('details[name]').forEach(function (d) { d.dataset.ryhma = d.getAttribute('name'); d.removeAttribute('name'); });
  function liiku(d, auki) {
    var s = d.querySelector(':scope > summary'), h0 = d.offsetHeight;
    if (auki) d.open = true;
    var h1 = auki ? d.offsetHeight : s.offsetHeight;
    if (!KESTO || !d.animate) { if (!auki) d.open = false; return; }
    d.style.overflow = 'hidden';
    var a = d.animate({ height: [h0 + 'px', h1 + 'px'] }, { duration: KESTO, easing: EASE });
    a.onfinish = function () { if (!auki) d.open = false; d.style.overflow = ''; };
  }
  document.addEventListener('click', function (e) {
    var s = e.target.closest('details > summary');
    if (!s || e.target.closest('a')) return;
    var d = s.parentElement;
    e.preventDefault();
    var y0 = s.getBoundingClientRect().top;
    if (d.open) { liiku(d, false); }
    else {
      if (d.dataset.ryhma) document.querySelectorAll('details[data-ryhma="' + d.dataset.ryhma + '"]').forEach(function (o) { if (o !== d && o.open) liiku(o, false); });
      liiku(d, true);
    }
    var loppu = performance.now() + KESTO + 60;
    (function pida() {
      var dy = s.getBoundingClientRect().top - y0;
      if (Math.abs(dy) > .5) window.scrollBy(0, dy);
      if (performance.now() < loppu) requestAnimationFrame(pida);
    })();
  });
})();
/* Palvelukartta (Olli 28.10.): otsikon hover tai kohdistus korostaa vyöhykkeen ja käynnistää sen koneet. */
(function () {
  'use strict';
  document.querySelectorAll('.b-svcmap--tasa').forEach(function (m) {
    var cols = m.querySelectorAll('.b-svcmap__index--row > section');
    cols.forEach(function (c, i) {
      var on = function () { m.dataset.hot = i; }, off = function () { delete m.dataset.hot; };
      c.addEventListener('mouseenter', on); c.addEventListener('mouseleave', off);
      c.addEventListener('focusin', on); c.addEventListener('focusout', off);
    });
  });
})();
