#!/usr/bin/env node
/* Genera sitemap.xml: las seis portadas, la política y las guías con sus pares de idioma.
   Uso: node tools/build-sitemap.js  (después de añadir o tocar una página).
   Las guías se emparejan en GUIDES; una guía nueva se añade ahí. */
'use strict';
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const BASE = 'https://neoacid-dbl.github.io/bookvault-web/';

const HOMES = [['es', ''], ['en', 'en/'], ['fr', 'fr/'], ['de', 'de/'], ['it', 'it/'], ['pt-BR', 'pt/']];
// [es, en] — mismo artículo en los dos idiomas
const GUIDES = [
  ['guias/', 'en/guides/'],
  ['guias/como-abrir-epub-android.html', 'en/guides/open-epub-files-android.html'],
  ['guias/leer-mobi-azw3-android.html', 'en/guides/read-mobi-azw3-android.html'],
  ['guias/abrir-fb2-android.html', 'en/guides/open-fb2-files-android.html'],
  ['guias/leer-en-voz-alta-android.html', 'en/guides/read-aloud-ebooks-android.html'],
  ['guias/convertir-cbr-a-cbz.html', 'en/guides/convert-cbr-to-cbz.html']
];

// Fecha del último commit que tocó el fichero (o hoy, si aún no está commiteado)
function lastmod(rel) {
  const file = rel.endsWith('/') || rel === '' ? rel + 'index.html' : rel;
  const deps = file.endsWith('index.html') && !file.includes('guide') && !file.includes('guias')
    ? [file, 'templates/home.html', 'i18n.js'] : [file];
  try {
    const dirty = execSync('git status --porcelain -- ' + deps.join(' '), { cwd: ROOT }).toString().trim();
    if (dirty) return new Date().toISOString().slice(0, 10);
    return execSync('git log -1 --format=%cs -- ' + deps.join(' '), { cwd: ROOT }).toString().trim() || new Date().toISOString().slice(0, 10);
  } catch (e) { return new Date().toISOString().slice(0, 10); }
}

function entry(loc, alts) {
  return '  <url>\n    <loc>' + BASE + loc + '</loc>\n' +
    alts.map(([hl, href]) => '    <xhtml:link rel="alternate" hreflang="' + hl + '" href="' + BASE + href + '"/>').join('\n') +
    (alts.length ? '\n' : '') + '    <lastmod>' + lastmod(loc) + '</lastmod>\n  </url>';
}

const homeAlts = HOMES.map(([hl, dir]) => [hl, dir]).concat([['x-default', '']]);
const urls = [];
for (const [, dir] of HOMES) urls.push(entry(dir, homeAlts));
urls.push(entry('privacy.html', []));
for (const [es, en] of GUIDES) {
  const alts = [['es', es], ['en', en], ['x-default', en]];
  urls.push(entry(es, alts), entry(en, alts));
}

for (const u of urls) {
  const loc = u.match(/<loc>(.*?)<\/loc>/)[1].slice(BASE.length);
  const f = path.join(ROOT, loc.endsWith('/') || loc === '' ? loc + 'index.html' : loc);
  if (!fs.existsSync(f)) throw new Error('No existe ' + f);
}

fs.writeFileSync(path.join(ROOT, 'sitemap.xml'),
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n\n' +
  urls.join('\n\n') + '\n\n</urlset>\n');
console.log('sitemap.xml: ' + urls.length + ' URL');
