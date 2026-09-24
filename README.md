# Balda — web

Sitio de promoción y política de privacidad de [Balda](https://play.google.com/store/apps/details?id=com.danib.bookvault),
un lector de libros para Android que funciona entero en el dispositivo.

Publicado con GitHub Pages desde la rama `main`, carpeta raíz:

| Página | URL |
|---|---|
| Portada | https://neoacid-dbl.github.io/bookvault-web/ |
| Política de privacidad | https://neoacid-dbl.github.io/bookvault-web/privacy.html |

La URL de la política es la que se pega en **Play Console → Contenido de la app →
Política de privacidad**, y también en la ficha de AdMob.

## Estructura

| Fichero | Qué es |
|---|---|
| `index.html` | Portada: hero, cifras, cómo funciona, funciones, formatos, privacidad, descarga |
| `privacy.html` | Política de privacidad. El índice y las secciones se pintan desde JS |
| `styles.css` | Hoja compartida por las dos páginas |
| `i18n.js` | Textos de la portada (es, en, fr, de, it, pt) |
| `i18n_policy.js` | Textos de la política (es, en, fr, de, it, pt) |
| `assets/` | Icono y marca en SVG, dibujados a partir del icono adaptativo de la app |
| `app-ads.txt` | Autorización de vendedor para AdMob |
| `robots.txt`, `sitemap.xml` | SEO |
| `.nojekyll` | Evita que Pages pase el sitio por Jekyll |

No hay build: es HTML, CSS y JS planos. Se abre el fichero y ya.

## Idiomas

Los seis que habla la app: español, inglés, francés, alemán, italiano y
portugués de Brasil (`res/values`, `values-es`, `-fr`, `-de`, `-it`, `-pt-rBR`),
con el mismo tratamiento: «tú», «vous», «du», «tu» y «você». La clave del
portugués es `pt` —el navegador da `pt-BR` o `pt-PT` y se miran las dos primeras
letras— y `htmlLang` pone `lang="pt-BR"` en la página.

El selector del nav recuerda la elección en `localStorage` (`bv_lang`) y, la
primera vez, usa el idioma del navegador. Si la app suma un idioma, hay que
tocar `i18n.js`, `i18n_policy.js`, la lista `LANGS` de `index.html` y de
`privacy.html`, y los `hreflang` de `sitemap.xml`.

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
