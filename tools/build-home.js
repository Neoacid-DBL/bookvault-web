#!/usr/bin/env node
/* Genera las seis portadas estáticas a partir de templates/home.html e i18n.js:
     index.html (es) · en/index.html · fr/ · de/ · it/ · pt/

   Por qué: con un solo index.html traducido por JS, Google solo indexaba el
   español (el HTML inicial) y los hreflang del sitemap apuntaban las seis
   lenguas a la misma URL. Ahora cada idioma tiene su URL, su <title>, su
   descripción y su texto en el HTML, sin depender de JavaScript.

   Uso:  node tools/build-home.js     (sin dependencias; Node 18+)
   Los textos se cambian en i18n.js y se vuelve a ejecutar: los .html
   generados no se editan a mano. */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const BASE = 'https://neoacid-dbl.github.io/bookvault-web/';
const PLAY = 'https://play.google.com/store/apps/details?id=com.danib.bookvault';

// Orden del menú. `dir` es la carpeta (el español va en la raíz).
const LANGS = [
  { key: 'es', dir: '',    hreflang: 'es',    og: 'es_ES' },
  { key: 'en', dir: 'en/', hreflang: 'en',    og: 'en_US' },
  { key: 'fr', dir: 'fr/', hreflang: 'fr',    og: 'fr_FR' },
  { key: 'de', dir: 'de/', hreflang: 'de',    og: 'de_DE' },
  { key: 'it', dir: 'it/', hreflang: 'it',    og: 'it_IT' },
  { key: 'pt', dir: 'pt/', hreflang: 'pt-BR', og: 'pt_BR' }
];

// Rótulos que la plantilla necesita y no estaban en i18n.js (son de accesibilidad)
const A11Y = {
  es: { langLabel: 'cambiar idioma', footerNav: 'Enlaces' },
  en: { langLabel: 'change language', footerNav: 'Links' },
  fr: { langLabel: 'changer de langue', footerNav: 'Liens' },
  de: { langLabel: 'Sprache ändern', footerNav: 'Links' },
  it: { langLabel: 'cambia lingua', footerNav: 'Link' },
  pt: { langLabel: 'mudar idioma', footerNav: 'Links' }
};

global.window = {};
require(path.join(ROOT, 'i18n.js'));
const I18N = window.BV_I18N;
const template = fs.readFileSync(path.join(ROOT, 'templates', 'home.html'), 'utf8').replace(/\r\n/g, '\n');

const esc = s => String(s).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
const get = (obj, p) => p.split('.').reduce((a, k) => (a && a[k] != null) ? a[k] : null, obj);

// Enlace a Play con referrer, para ver en Play Console qué instalaciones trae la web
const play = (lang, where) => PLAY + '&hl=' + (lang === 'pt' ? 'pt-BR' : lang) +
  '&referrer=' + encodeURIComponent('utm_source=web&utm_medium=portada&utm_campaign=' + where + '-' + lang);

const ICONS = {
  shelf:   '<svg viewBox="0 0 24 24"><path d="M3 3v18"/><path d="M7 8h3v13H7z"/><path d="M14 4h3v17h-3z"/><path d="M20 12h1v9h-1z"/><path d="M3 21h18"/></svg>',
  book:    '<svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/></svg>',
  marker:  '<svg viewBox="0 0 24 24"><path d="m9 11-6 6v3h3l6-6"/><path d="m15 5 4 4"/><path d="m13 7 4-4 4 4-4 4-4-4Z"/><path d="M9 11l4 4"/></svg>',
  chart:   '<svg viewBox="0 0 24 24"><path d="M3 3v18h18"/><rect x="7" y="11" width="3" height="6"/><rect x="12" y="7" width="3" height="10"/><rect x="17" y="13" width="3" height="4"/></svg>',
  target:  '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4"/></svg>',
  tablet:  '<svg viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M10 19h4"/></svg>',
  offline: '<svg viewBox="0 0 24 24"><path d="m2 2 20 20"/><path d="M8.5 16.5a5 5 0 0 1 7 0"/><path d="M5 12.9a10 10 0 0 1 4.3-2.6"/><path d="M14.7 10.3A10 10 0 0 1 19 12.9"/><path d="M2 8.8A15 15 0 0 1 8 5.6"/><path d="M16 5.6a15 15 0 0 1 6 3.2"/><path d="M12 20h.01"/></svg>',
  eyeoff:  '<svg viewBox="0 0 24 24"><path d="M9.9 4.2A10.9 10.9 0 0 1 12 4c7 0 10 8 10 8a18 18 0 0 1-2.7 3.9"/><path d="M6.6 6.6A18 18 0 0 0 2 12s3 8 10 8a10.9 10.9 0 0 0 5.4-1.4"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/><path d="m2 2 20 20"/></svg>',
  folder:  '<svg viewBox="0 0 24 24"><path d="M4 20a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4l2 3h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2Z"/><path d="M12 11v6"/><path d="m9 14 3-3 3 3"/></svg>',
  voice:   '<svg viewBox="0 0 24 24"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/></svg>',
  search:  '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>',
  backup:  '<svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="5" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/></svg>'
};

const TICK = '<span class="tick" aria-hidden="true"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg></span>';

function render(L) {
  const d = I18N[L.key];
  const root = L.dir ? '../' : '';
  const url = BASE + L.dir;
  const a11y = A11Y[L.key];

  const alternates = LANGS.map(o => '<link rel="alternate" hreflang="' + o.hreflang + '" href="' + BASE + o.dir + '" />')
    .concat('<link rel="alternate" hreflang="x-default" href="' + BASE + '" />').join('\n');

  const langMenu = LANGS.map(o => {
    const od = I18N[o.key];
    const href = root + o.dir || './';
    return '<a href="' + (o.key === L.key ? './' : href) + '" hreflang="' + o.hreflang + '" lang="' + od.htmlLang + '" data-lang="' + o.key + '"' +
      (o.key === L.key ? ' class="active" aria-current="page"' : '') +
      '><span class="flag" aria-hidden="true">' + od.flag + '</span><span>' + esc(od.name) + '</span></a>';
  }).join('');

  const chips = (d.hero.chips || []).map(c => '<span class="chip">' + esc(c) + '</span>').join('');

  const steps = d.showcase.steps.map((s, i) =>
    '<div class="step"><div class="step-num">' + (i + 1) + '</div><div class="step-body">' +
    '<div class="kicker">' + esc(s.kicker) + '</div><h3>' + esc(s.title) + '</h3><p>' + esc(s.body) + '</p>' +
    '</div><span class="step-bar"><i></i></span></div>').join('\n          ');

  const accents = ['', 'acc-sage', 'acc-honey', 'acc-ink'];
  const features = d.features.items.map((f, i) =>
    '<div class="' + ('f-card reveal ' + accents[i % accents.length]).trim() + '">' +
    '<div class="icon-wrap" aria-hidden="true">' + (ICONS[f.icon] || ICONS.book) + '</div>' +
    '<div class="f-label">' + esc(f.label) + '</div><h3>' + esc(f.title) + '</h3><p>' + esc(f.body) + '</p></div>').join('\n        ');

  const formats = d.formats.items.map(f =>
    '<div class="fmt' + (f.soon ? ' soon' : '') + '"><span class="tag">' + esc(f.tag) + '</span><span class="what">' + esc(f.what) + '</span></div>').join('\n          ');

  const checks = d.privacy.checks.map(c => '<div class="check">' + TICK + '<span>' + esc(c) + '</span></div>').join('\n              ');

  const fHrefs = [root + 'privacy.html', 'mailto:danibarea@gmail.com', play(L.key, 'pie'), root + d.footer.guides];
  const footerLinks = d.footer.links.map((label, i) =>
    '<a href="' + esc(fHrefs[i]) + '"' + (i === 2 ? ' target="_blank" rel="noopener"' : '') + '>' + esc(label) + '</a>').join('');

  // Título del CTA: las dos últimas palabras en cursiva rosa
  const parts = d.cta.title.split(' ');
  const last = parts.length > 2 ? parts.splice(-2).join(' ') : parts.pop();
  const ctaTitle = esc(parts.join(' ')) + ' <span class="em">' + esc(last) + '</span>';

  const jsonld = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MobileApplication',
        '@id': BASE + '#app',
        name: 'Balda',
        description: d.meta.description,
        url: url,
        image: BASE + 'assets/og/' + L.key + '.png',
        inLanguage: LANGS.map(o => o.hreflang),
        applicationCategory: 'ReferenceApplication',
        operatingSystem: 'Android 8.0+',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
        installUrl: PLAY,
        downloadUrl: PLAY,
        author: { '@type': 'Person', name: 'Daniel Barea' }
      },
      {
        '@type': 'WebSite',
        '@id': BASE + '#web',
        name: 'Balda',
        url: BASE,
        inLanguage: L.hreflang
      }
    ]
  };

  const vars = {
    generated: 'Generado por tools/build-home.js desde templates/home.html e i18n.js. No lo edites a mano.',
    htmlLang: d.htmlLang || L.key, dir: d.dir, root, url, alternates, ogLocale: L.og,
    ogImage: BASE + 'assets/og/' + L.key + '.png',
    'meta.title': esc(d.meta.title), 'meta.description': esc(d.meta.description),
    jsonld: '<script type="application/ld+json">\n' + JSON.stringify(jsonld, null, 2) + '\n</script>',
    name: esc(d.name), flag: d.flag, short: d.short, langLabel: esc(a11y.langLabel), footerNav: esc(a11y.footerNav),
    langMenu, chips, steps, features, formats, checks, footerLinks, ctaTitle,
    'play:nav': esc(play(L.key, 'nav')), 'play:hero': esc(play(L.key, 'hero')), 'play:cta': esc(play(L.key, 'cta')),
    script: script(L)
  };

  let html = template.replace(/\{\{([a-zA-Z.:]+)\}\}/g, (m, k) => {
    if (!(k in vars)) throw new Error('Falta la variable ' + k);
    return vars[k];
  });
  // Textos sueltos marcados con data-i18n (el atributo se queda: no molesta y sirve de pista)
  html = html.replace(/(data-i18n="([^"]+)"[^>]*>)([^<]*)(<)/g, (m, open, key, old, close) => {
    const v = get(d, key);
    if (v == null) throw new Error(L.key + ': falta la clave ' + key);
    return open + esc(v) + close;
  });
  return html;
}

// Script de la página: menú de idioma, apariciones, móvil animado y aviso de idioma.
function script(L) {
  const hints = {};
  LANGS.forEach(o => { hints[o.key] = { text: I18N[o.key].meta.langHint, href: (L.dir ? '../' : '') + o.dir || './', name: I18N[o.key].name }; });
  return `<script>
(function(){
  const PAGE_LANG = ${JSON.stringify(L.key)};
  const HINTS = ${JSON.stringify(hints)};

  // La política lee el idioma de aquí: el que se está viendo es el que vale
  try { localStorage.setItem('bv_lang', PAGE_LANG); } catch(e){}

  // ── Menú de idioma (enlaces a cada portada) ─────────────────
  const menu = document.getElementById('langMenu');
  const btn  = document.getElementById('langBtn');
  function toggleMenu(force){
    const open = typeof force === 'boolean' ? force : !menu.classList.contains('open');
    menu.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  btn.addEventListener('click', e=>{ e.stopPropagation(); toggleMenu(); });
  document.addEventListener('click', e=>{ if (!e.target.closest('.lang-wrap')) toggleMenu(false); });
  document.addEventListener('keydown', e=>{ if (e.key === 'Escape') toggleMenu(false); });
  menu.addEventListener('click', e=>{
    const a = e.target.closest('a[data-lang]');
    if (a) { try { localStorage.setItem('bv_lang_chosen', a.dataset.lang); } catch(e){} }
  });

  // ── Aviso discreto si el navegador habla otro idioma de la web ──
  // Sin redirección automática: Google rastrea en inglés y se llevaría a todos a /en/.
  (function(){
    let chosen = null;
    try { chosen = localStorage.getItem('bv_lang_chosen'); } catch(e){}
    if (chosen) return;
    const want = (navigator.language || '').slice(0,2).toLowerCase();
    if (!HINTS[want] || want === PAGE_LANG) return;
    const h = HINTS[want];
    const bar = document.createElement('a');
    bar.className = 'lang-hint';
    bar.href = h.href;
    bar.lang = want;
    bar.textContent = h.text + ' →';
    bar.addEventListener('click', ()=>{ try { localStorage.setItem('bv_lang_chosen', want); } catch(e){} });
    document.body.insertBefore(bar, document.body.firstChild);
  })();

  // ── Aparición al hacer scroll ─────────────────────────────
  if (!('IntersectionObserver' in window)){
    document.querySelectorAll('.reveal').forEach(el=>el.classList.add('in'));
  } else {
    const io = new IntersectionObserver(entries=>{
      entries.forEach(e=>{ if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal:not(.in)').forEach(el=>io.observe(el));
  }

  // ── Móvil animado de «Cómo funciona» ─────────────────────
  // Pasa solo de un paso al siguiente mientras está a la vista; tocar un paso salta a su escena.
  (function(){
    const phone = document.getElementById('demoPhone');
    const steps = document.getElementById('steps');
    const DUR   = 5500;
    const still = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let scene = 0, timer = null, visible = false;
    if (!phone || !steps) return;

    function show(i){
      scene = (i + 3) % 3;
      // Quitar y volver a poner la escena reinicia sus animaciones CSS
      phone.removeAttribute('data-scene'); void phone.offsetWidth;
      phone.setAttribute('data-scene', scene);
      sync();
    }
    function sync(){
      steps.classList.add('demo');
      steps.querySelectorAll('.step').forEach((el, i)=>{
        el.classList.toggle('is-active', i === scene);
        const bar = el.querySelector('.step-bar i');
        if (bar && i === scene){ bar.style.animation = 'none'; void bar.offsetWidth; bar.style.animation = ''; }
      });
      steps.classList.toggle('playing', !!timer);
    }
    function play(){
      stop();
      if (still || !visible || document.hidden) return sync();
      timer = setInterval(()=> show(scene + 1), DUR);
      sync();
    }
    function stop(){ clearInterval(timer); timer = null; }

    steps.addEventListener('click', e=>{
      const el = e.target.closest('.step'); if (!el) return;
      const i = Array.prototype.indexOf.call(steps.children, el);
      if (i < 0) return;
      show(i); play();
    });
    document.addEventListener('visibilitychange', play);
    if ('IntersectionObserver' in window){
      new IntersectionObserver(entries=>{
        const was = visible;
        visible = entries[0].isIntersecting;
        if (visible && !was && !still) show(0);
        play();
      }, { threshold: 0.35 }).observe(phone);
    } else { visible = true; }

    // Sin animaciones: se queda en el lector, que es la escena que mejor se entiende quieta
    scene = still ? 2 : 0;
    phone.setAttribute('data-scene', scene);
    sync();
  })();
})();
</script>`;
}

for (const L of LANGS) {
  const out = path.join(ROOT, L.dir, 'index.html');
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, render(L));
  console.log('escrito', path.relative(ROOT, out));
}
