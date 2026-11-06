# Balda — web

Sitio de promoción y política de privacidad de [Balda](https://play.google.com/store/apps/details?id=com.danib.bookvault),
un lector de libros para Android que funciona entero en el dispositivo.

Publicado con GitHub Pages desde la rama `main`, carpeta raíz:

| Página | URL |
|---|---|
| Portada (es) | https://neoacid-dbl.github.io/bookvault-web/ |
| Portada (en, fr, de, it, pt-BR) | …/bookvault-web/en/, /fr/, /de/, /it/, /pt/ |
| Política de privacidad | https://neoacid-dbl.github.io/bookvault-web/privacy.html |
| Guías (es) | https://neoacid-dbl.github.io/bookvault-web/guias/ |
| Guides (en) | https://neoacid-dbl.github.io/bookvault-web/en/guides/ |

La URL de la política es la que se pega en **Play Console → Contenido de la app →
Política de privacidad**, y también en la ficha de AdMob.

## Estructura

| Fichero | Qué es |
|---|---|
| `templates/home.html` | Plantilla de la portada: hero, cifras, cómo funciona, funciones, formatos, privacidad, descarga |
| `index.html`, `en/`, `fr/`, `de/`, `it/`, `pt/index.html` | Las seis portadas, **generadas** por `tools/build-home.js`. No se editan a mano |
| `tools/build-home.js` | Genera las portadas desde la plantilla e `i18n.js`: `node tools/build-home.js` |
| `tools/build-sitemap.js` | Genera `sitemap.xml` (portadas, política y guías con sus pares de idioma) |
| `assets/og/` | Imagen para redes (Open Graph) de cada idioma: el gráfico destacado de Play |
| `privacy.html` | Política de privacidad. El índice y las secciones se pintan desde JS |
| `styles.css` | Hoja compartida por las dos páginas |
| `guides.css` | Lo propio de los artículos (columna de lectura, pasos, avisos). Va después de `styles.css` |
| `guias/`, `en/guides/` | Artículos para buscadores, en HTML estático por idioma (no por `i18n.js`, para que Google indexe cada idioma en su URL). Cada uno enlaza a su traducción con `hreflang` y va en `sitemap.xml` |
| `i18n.js` | Textos de la portada (es, en, fr, de, it, pt), `<title>` y descripción incluidos |
| `i18n_policy.js` | Textos de la política (es, en, fr, de, it, pt) |
| `assets/` | Icono y marca en SVG, dibujados a partir del icono adaptativo de la app |
| `app-ads.txt` | Autorización de vendedor para AdMob |
| `robots.txt`, `sitemap.xml` | SEO |
| `.nojekyll` | Evita que Pages pase el sitio por Jekyll |

Es HTML, CSS y JS planos, sin dependencias. Lo único que se genera son las portadas y el
sitemap, con Node (18+):

```bash
node tools/build-home.js      # tras tocar i18n.js o templates/home.html
node tools/build-sitemap.js   # tras añadir o cambiar una página
```

**Por qué hay una portada por idioma.** Hasta noviembre de 2026 había un solo
`index.html` que se traducía en el navegador. Google solo veía el español, y el sitemap
declaraba las seis lenguas en la misma URL, que es un `hreflang` sin efecto. Ahora cada
idioma tiene su URL, su `<title>` y su texto en el HTML, y se lee sin JavaScript (la
animación `.reveal` solo oculta contenido si hay JS: `.js .reveal`).

**Sin redirección por idioma.** El rastreador de Google navega en inglés: una redirección
automática llevaría a todos a `/en/`. Si el navegador habla otro idioma de la web, la
portada enseña arriba un aviso con enlace («This page is also available in English →»).

## Idiomas

Los seis que habla la app: español, inglés, francés, alemán, italiano y
portugués de Brasil (`res/values`, `values-es`, `-fr`, `-de`, `-it`, `-pt-rBR`),
con el mismo tratamiento: «tú», «vous», «du», «tu» y «você». La clave del
portugués es `pt` —el navegador da `pt-BR` o `pt-PT` y se miran las dos primeras
letras— y `htmlLang` pone `lang="pt-BR"` en la página.

En la portada el selector de idioma son enlaces a cada URL. La portada guarda su idioma
en `localStorage` (`bv_lang`) y la política lo usa para abrirse en el mismo. Si la app
suma un idioma, hay que tocar `i18n.js`, `i18n_policy.js`, la lista `LANGS` de
`tools/build-home.js`, `tools/build-sitemap.js` y `privacy.html`, y regenerar.

Los nombres de menú que cita la política (Ajustes → Diagnóstico, → Publicidad…)
son los del `strings.xml` de cada idioma: si cambian en la app, cambian aquí.

Las banderas del menú son emojis: en Windows salen como letras («DE», «GB»)
porque su fuente no tiene banderas. En Android, macOS e iOS se ven bien.

## Diseño

Los tokens de color de `styles.css` son los mismos valores que
`ui/theme/Color.kt` en el repositorio de la app —papel cálido, tinta suave,
rosa palo— y las tipografías son las que la app empaqueta: Instrument Serif
para los títulos y Figtree para la interfaz. Si la app cambia de paleta, esto
cambia detrás.

## app-ads.txt

El fichero declara `pub-6156670655510189`, la misma cuenta de AdMob que
DupeFire. Ojo con dónde lo busca el rastreador: **solo lee la raíz del
dominio**, es decir `https://neoacid-dbl.github.io/app-ads.txt`, no la carpeta
de este proyecto. Esa copia de la raíz ya existe en el repositorio
`Neoacid-DBL.github.io`; la de aquí es una réplica por comodidad y por si el
sitio se mueve algún día a un dominio propio.

## Al cambiar la app, cambiar aquí

La política describe lo que la app hace **hoy**. Hay que actualizarla a la vez
que el código si:

- se añade o se quita un SDK que hable con la red;
- se activa la compra «sin anuncios» (`MonetizationConfig.PREMIUM_ENABLED`);
- se suma cualquier otro producto de Firebase;
- cambian los permisos del manifiesto. Cuenta el manifiesto **fusionado**
  (`app/build/intermediates/merged_manifest/`), no solo el de la app: AdMob,
  Billing y Firebase añaden los suyos, y la política dice que lista todos;
- una función nueva saca datos de la app, aunque sea a petición del usuario
  (compartir, copia de seguridad, voz alta): va en la sección «Lo que envías tú».

Los tres sitios que hay que dejar de acuerdo son esta política, la declaración
de **Seguridad de los datos** de Play Console y los textos del onboarding de la
app.

## Guías

Lo que dicen los artículos se comprueba contra el código de la app, igual que la ficha de
Play (`AGENTS.md` y la sección «Lo que la ficha NO debe prometer» de
`play-store/listing/es-ES.md`): formatos (EPUB, MOBI/AZW3 sin DRM, FB2, PDF, DOCX/ODT,
TXT/MD, CBZ; no CBR ni KFX), rótulos de la interfaz («Añadir», Ajustes → Carpetas de
libros, Ajustes → Libros del móvil), voz alta (no en PDF ni cómics) y anuncios. Si la app
cambia, se tocan también.

Guías en español e inglés: abrir EPUB, leer MOBI y AZW3, abrir FB2, leer en voz alta y
convertir CBR a CBZ. Una guía nueva se empareja en `tools/build-sitemap.js`.
Los enlaces a Play llevan `referrer` con `utm_campaign` por artículo, para ver en Play
Console qué instalaciones trae cada uno.
