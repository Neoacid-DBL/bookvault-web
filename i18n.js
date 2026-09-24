/* Textos de la portada de Balda — los seis idiomas que habla la app:
   español, inglés, francés, alemán, italiano y portugués de Brasil
   (res/values, values-es, -fr, -de, -it, -pt-rBR). Si la app suma otro, este
   fichero y `i18n_policy.js` son los dos sitios que hay que tocar en la web,
   además de la lista `LANGS` de index.html y privacy.html.

   Tratamiento, el mismo que en la app: «tú», «vous», «du», «tu» y «você». */
window.BV_I18N = {

  es: {
    dir: 'ltr', name: 'Español', flag: '🇪🇸', short: 'ES', htmlLang: 'es',

    nav: { features: 'Funciones', formats: 'Formatos', privacy: 'Privacidad', download: 'Descargar' },

    hero: {
      eyebrow: 'Android · Gratis · Sin conexión',
      titleA: 'Tu biblioteca.',
      titleB: 'Tu estantería.',
      titleC: 'Tu móvil, y ya está.',
      sub: 'Balda es un lector de EPUB, PDF, TXT y CBZ con estantería de baldas, lectura en voz alta, anotaciones y estadísticas. Sin cuenta, sin nube y sin sincronización que se caiga: tus libros y tu lectura no salen del móvil.',
      cta: 'Descargar gratis',
      ctaSub: 'En Google Play',
      secondary: 'Cómo funciona',
      chips: ['Android 8+', 'Sin cuenta', 'Funciona sin internet', '6 idiomas'],
      note: 'Gratis, con anuncios en las pantallas de navegación. Ni uno mientras lees.',
      shelfName: 'Leyendo ahora',
      shelfCount: '6 libros',
      shelfCaption: 'Arrastra un libro de una balda a otra. Como en casa.'
    },

    stats: {
      label: 'Balda en cuatro cifras',
      a: { num: '0', unit: 'bytes',    cap: 'de tus libros salen del móvil' },
      b: { num: '5', unit: 'formatos', cap: 'EPUB, PDF, TXT, MD y CBZ' },
      c: { num: '0', unit: 'cuentas',  cap: 'que crear para empezar a leer' },
      d: { num: '0', unit: 'permisos', cap: 'de acceso a tu almacenamiento' }
    },

    showcase: {
      eyebrow: 'Cómo funciona',
      title: 'Tres pasos y a leer.',
      sub: 'Nada de asistentes, escaneos ni registros. Traes tus ficheros y la app se aparta.',
      steps: [
        { kicker: 'Paso 1', title: 'Trae tus libros',
          body: 'Tócalos en WhatsApp, el correo o el gestor de archivos y ábrelos con Balda, o elige ficheros o una carpeta, que la app recuerda. No rastrea tu almacenamiento. Y la primera vez ya te esperan dos clásicos en tu idioma.' },
        { kicker: 'Paso 2', title: 'Colócalos',
          body: 'Arrastra cada libro a su balda. Cada balda tiene nombre y temática —clásica, moderna, natural, fantasía, biblioteca o nocturna— con su madera y su tipografía de lomo.' },
        { kicker: 'Paso 3', title: 'Lee, o escucha',
          body: 'El progreso, las anotaciones y las estadísticas se guardan solos, en el propio teléfono. Y si prefieres escuchar, Balda te lee el libro en voz alta, también con la pantalla apagada.' }
      ],
      phone: {
        bar: 'Capítulo 4',
        time: '21:40',
        title: 'La casa junto al faro',
        badge: '✓ Sin anuncios aquí dentro',
        page: 'Página 148 / 239',
        left: 'Te quedan 41 min'
      }
    },

    features: {
      eyebrow: 'Funciones',
      title: 'Lo que esperas de un lector, y la parte que las apps suelen quitarte.',
      sub: 'Tener libros también es colocarlos, subrayarlos, escucharlos y saber cuánto has leído.',
      items: [
        { icon: 'shelf',   label: 'Estantería',  title: 'Baldas de verdad',
          body: 'Un mueble con baldas donde arrastras los libros con el dedo. Nombre y temática por balda, con su madera y su tipografía de lomo.' },
        { icon: 'book',    label: 'Lector',      title: 'A tu medida',
          body: 'Tipografía, tamaño, interlineado, márgenes y temas día, noche, sepia y OLED. Pasa página con los botones de volumen, y la pantalla no se apaga mientras lees.' },
        { icon: 'voice',   label: 'Voz alta',    title: 'Te lo lee en voz alta',
          body: 'Empieza por la línea que tienes delante, resalta la frase que suena y pasa la página sola. Sigue con la pantalla apagada y se maneja desde los auriculares o la pantalla de bloqueo.' },
        { icon: 'search',  label: 'Búsqueda',    title: 'Encuentra cualquier pasaje',
          body: 'Busca dentro del libro sin preocuparte de tildes ni mayúsculas y salta de una coincidencia a otra. En PDF, con Android 15 o superior.' },
        { icon: 'marker',  label: 'Anotaciones', title: 'Subraya, anota, marca',
          body: 'Subraya en cinco colores, deja notas y marcadores, y expórtalos cuando quieras. Al seleccionar texto, el menú del sistema te da diccionario y traductor.' },
        { icon: 'chart',   label: 'Estadísticas',title: 'Sabe cuánto lees',
          body: 'Velocidad media, rachas, mapa de calor de constancia y gráficas por semana, calculadas desde tus sesiones reales de lectura.' },
        { icon: 'target',  label: 'Objetivos',   title: 'Metas que se ven',
          body: 'Una meta por año o por período, con aviso de si vas en camino, justo o a riesgo. Y, si quieres, un recordatorio que no suena los días que ya has leído.' },
        { icon: 'backup',  label: 'Copia',       title: 'Tu biblioteca, en un fichero',
          body: 'Guarda progreso, anotaciones, estanterías y, si quieres, los propios libros en un .zip donde tú elijas, y restáuralo en otro móvil. Balda no lo sube a ningún sitio.' },
        { icon: 'folder',  label: 'Importar',    title: 'Ábrelo desde donde esté',
          body: 'Un libro en WhatsApp, en el correo o en Descargas se abre con Balda. O elige ficheros sueltos o una carpeta: la app solo ve lo que le das.' },
        { icon: 'tablet',  label: 'Tablet',      title: 'Se estira bien',
          body: 'En pantalla ancha el panel de anotaciones se abre al lado del texto en vez de taparlo, y el mapa de calor pasa de 16 a 52 semanas.' },
        { icon: 'offline', label: 'Sin conexión',title: 'Modo avión, igual',
          body: 'No hay servidor ni sincronización que se caiga. Puedes tener el móvil desconectado siempre y la app funciona exactamente igual.' },
        { icon: 'eyeoff',  label: 'Anuncios',    title: 'Ni uno mientras lees',
          body: 'Los anuncios viven en las pantallas de navegación. Dentro del libro no hay banner ni corte a mitad de página, y los primeros días no salta ninguno a pantalla completa.' }
      ]
    },

    formats: {
      eyebrow: 'Formatos',
      title: 'Los que ya tienes en la carpeta de descargas.',
      sub: 'Sin convertir nada y sin herramientas de escritorio por medio.',
      items: [
        { tag: 'EPUB',   what: 'ePub 2 y 3: anotaciones, búsqueda y voz alta' },
        { tag: 'PDF',    what: 'Zoom con pellizco; búsqueda en Android 15+' },
        { tag: 'TXT·MD', what: 'Texto plano, también en voz alta' },
        { tag: 'CBZ',    what: 'Cómics página a página' }
      ],
      note: 'Los .cbr se quedan fuera a propósito: casi todos usan RAR5 y no hay lector en Android capaz de abrirlos, así que la app te lo dice al importar en lugar de dejarte con un cómic que no abre. FB2 y MOBI llegan en la 1.5.'
    },

    privacy: {
      eyebrow: 'Privacidad',
      titleA: 'Tus libros no salen',
      titleB: 'del móvil.',
      sub: 'No hay servidor, no hay cuenta y no hay sincronización. Tu biblioteca, tu progreso, tus anotaciones y tus estadísticas viven en el teléfono y no se envían a ningún sitio. Salen los anuncios, los informes de fallo si los dejas activados, y lo que tú decidas compartir, cuando lo envías tú.',
      checks: [
        'Sin cuenta ni registro',
        'Sin servidor propio',
        'Tus libros nunca se suben',
        'Progreso y anotaciones, solo en tu móvil',
        'No pide permiso de almacenamiento',
        'Copia de seguridad en un fichero que guardas tú',
        'Informes de fallo con interruptor',
        'Sin publicidad dentro del lector'
      ],
      cta: 'Leer la política completa →'
    },

    cta: {
      title: 'Listo para abrir el primer libro.',
      sub: 'Gratis en Google Play, para Android 8 y superior. En español, inglés, francés, alemán, italiano y portugués.',
      btn: 'Descargar en Google Play',
      btnSub: 'Compatible con Android 8.0+'
    },

    footer: {
      tagline: 'Tus libros y tu lectura no salen del móvil.',
      copy: '© 2026 Balda · Daniel Barea',
      links: ['Política de privacidad', 'Contacto', 'Google Play']
    }
  },

  en: {
    dir: 'ltr', name: 'English', flag: '🇬🇧', short: 'EN', htmlLang: 'en',

    nav: { features: 'Features', formats: 'Formats', privacy: 'Privacy', download: 'Download' },

    hero: {
      eyebrow: 'Android · Free · Works offline',
      titleA: 'Your library.',
      titleB: 'Your bookshelf.',
      titleC: 'Your phone, and that is it.',
      sub: 'Balda is an EPUB, PDF, TXT and CBZ reader with a real shelf you arrange, read-aloud, highlights and reading stats. No account, no cloud, no sync to break: your books and your reading never leave the phone.',
      cta: 'Download free',
      ctaSub: 'On Google Play',
      secondary: 'How it works',
      chips: ['Android 8+', 'No account', 'Works with no internet', '6 languages'],
      note: 'Free, with ads on the browsing screens. Not one while you read.',
      shelfName: 'Reading now',
      shelfCount: '6 books',
      shelfCaption: 'Drag a book from one shelf to another. Like at home.'
    },

    stats: {
      label: 'Balda in four numbers',
      a: { num: '0', unit: 'bytes',       cap: 'of your books leave the phone' },
      b: { num: '5', unit: 'formats',     cap: 'EPUB, PDF, TXT, MD and CBZ' },
      c: { num: '0', unit: 'accounts',    cap: 'to create before you read' },
      d: { num: '0', unit: 'permissions', cap: 'requested over your storage' }
    },

    showcase: {
      eyebrow: 'How it works',
      title: 'Three steps, then read.',
      sub: 'No wizards, no scanning, no sign-up. You bring the files and the app gets out of the way.',
      steps: [
        { kicker: 'Step 1', title: 'Bring your books',
          body: 'Tap them in WhatsApp, your email or the file manager and open them with Balda, or pick files or a folder, which the app remembers. It never crawls your storage. And the first time, two classics in your language are already waiting.' },
        { kicker: 'Step 2', title: 'Arrange them',
          body: 'Drag each book onto its shelf. Every shelf has a name and a theme — classic, modern, natural, fantasy, library or night — with its own wood and spine typeface.' },
        { kicker: 'Step 3', title: 'Read, or listen',
          body: 'Progress, highlights and stats save themselves, on the phone itself. And if you would rather listen, Balda reads the book aloud to you, even with the screen off.' }
      ],
      phone: {
        bar: 'Chapter 4',
        time: '9:40 PM',
        title: 'The House by the Lighthouse',
        badge: '✓ No ads in here',
        page: 'Page 148 / 239',
        left: '41 min left'
      }
    },

    features: {
      eyebrow: 'Features',
      title: 'Everything you expect from a reader, plus the part most apps take away.',
      sub: 'Owning books is also arranging them, marking them up, listening to them and knowing how much you have read.',
      items: [
        { icon: 'shelf',   label: 'Bookcase',  title: 'Shelves you arrange',
          body: 'A real cabinet of shelves where you drag books with your finger. Each shelf gets a name and a theme, with its own wood and spine typeface.' },
        { icon: 'book',    label: 'Reader',    title: 'Set up your way',
          body: 'Typeface, size, line height, margins and day, night, sepia and OLED themes. Turn pages with the volume buttons, and the screen stays on while you read.' },
        { icon: 'voice',   label: 'Read aloud',title: 'It reads to you',
          body: 'It starts at the line in front of you, highlights the sentence being spoken and turns the page on its own. It keeps going with the screen off and answers to your headphones and the lock screen.' },
        { icon: 'search',  label: 'Search',    title: 'Find any passage',
          body: 'Search inside the book without worrying about accents or capitals, and jump from one match to the next. In PDFs, on Android 15 and up.' },
        { icon: 'marker',  label: 'Highlights',title: 'Highlight, note, bookmark',
          body: 'Highlight in five colours, leave notes and bookmarks, and export them whenever you like. Select text and the system menu offers the dictionary and translator.' },
        { icon: 'chart',   label: 'Stats',     title: 'It knows how much you read',
          body: 'Average speed, streaks, a consistency heatmap and weekly charts, all computed from your actual reading sessions on the device.' },
        { icon: 'target',  label: 'Goals',     title: 'Goals you can see',
          body: 'A target per year or per period, telling you whether you are on track, cutting it close or at risk. And, if you want, a reminder that stays quiet on days you have already read.' },
        { icon: 'backup',  label: 'Backup',    title: 'Your library in one file',
          body: 'Save progress, highlights, shelves and, if you like, the books themselves to a .zip wherever you choose, and restore it on another phone. Balda uploads it nowhere.' },
        { icon: 'folder',  label: 'Importing', title: 'Open it from wherever it is',
          body: 'A book in WhatsApp, your email or Downloads opens with Balda. Or pick single files or a folder: the app only sees what you hand it.' },
        { icon: 'tablet',  label: 'Tablets',   title: 'It stretches properly',
          body: 'On a wide screen the highlights panel opens beside the text instead of covering it, and the heatmap grows from 16 weeks to 52.' },
        { icon: 'offline', label: 'Offline',   title: 'Airplane mode, same app',
          body: 'There is no server and no sync to fail. Keep the phone offline forever and the app behaves exactly the same.' },
        { icon: 'eyeoff',  label: 'Ads',       title: 'Not one while you read',
          body: 'Ads live on the browsing screens. Inside a book there is no banner and no interruption mid-page, and no full-screen ad pops up during the first few days.' }
      ]
    },

    formats: {
      eyebrow: 'Formats',
      title: 'The ones already sitting in your downloads folder.',
      sub: 'Nothing to convert and no desktop tool in the middle.',
      items: [
        { tag: 'EPUB',   what: 'ePub 2 and 3: highlights, search and read-aloud' },
        { tag: 'PDF',    what: 'Pinch to zoom; search on Android 15+' },
        { tag: 'TXT·MD', what: 'Plain text, read-aloud too' },
        { tag: 'CBZ',    what: 'Comics, page by page' }
      ],
      note: 'CBR is left out on purpose: nearly all of them use RAR5 and no Android reader can open those, so the app tells you at import time instead of handing you a comic that will not open. FB2 and MOBI arrive in 1.5.'
    },

    privacy: {
      eyebrow: 'Privacy',
      titleA: 'Your books never leave',
      titleB: 'the phone.',
      sub: 'No server, no account, no sync. Your library, your progress, your highlights and your stats live on the phone and are never sent anywhere. What leaves is the ads, the crash reports if you leave them on, and whatever you choose to share, when you send it.',
      checks: [
        'No account, no sign-up',
        'No server of our own',
        'Your books are never uploaded',
        'Progress and notes stay on the phone',
        'No storage permission requested',
        'Backups go to a file you keep',
        'Crash reports have an off switch',
        'No advertising inside the reader'
      ],
      cta: 'Read the full policy →'
    },

    cta: {
      title: 'Ready to open the first book.',
      sub: 'Free on Google Play, for Android 8 and up. In English, Spanish, French, German, Italian and Portuguese.',
      btn: 'Get it on Google Play',
      btnSub: 'Works on Android 8.0+'
    },

    footer: {
      tagline: 'Your books and your reading never leave the phone.',
      copy: '© 2026 Balda · Daniel Barea',
      links: ['Privacy policy', 'Contact', 'Google Play']
    }
  },

  fr: {
    dir: 'ltr', name: 'Français', flag: '🇫🇷', short: 'FR', htmlLang: 'fr',

    nav: { features: 'Fonctions', formats: 'Formats', privacy: 'Confidentialité', download: 'Télécharger' },

    hero: {
      eyebrow: 'Android · Gratuit · Hors connexion',
      titleA: 'Votre bibliothèque.',
      titleB: 'Vos étagères.',
      titleC: 'Votre téléphone, et c’est tout.',
      sub: 'Balda est une liseuse EPUB, PDF, TXT et CBZ avec de vraies étagères à ranger, la lecture à voix haute, des annotations et des statistiques. Sans compte, sans cloud et sans synchronisation qui plante : vos livres et votre lecture ne quittent pas le téléphone.',
      cta: 'Télécharger gratuitement',
      ctaSub: 'Sur Google Play',
      secondary: 'Comment ça marche',
      chips: ['Android 8+', 'Sans compte', 'Fonctionne sans internet', '6 langues'],
      note: 'Gratuit, avec des publicités sur les écrans de navigation. Aucune pendant la lecture.',
      shelfName: 'En cours de lecture',
      shelfCount: '6 livres',
      shelfCaption: 'Glissez un livre d’une étagère à l’autre. Comme à la maison.'
    },

    stats: {
      label: 'Balda en quatre chiffres',
      a: { num: '0', unit: 'octet',       cap: 'de vos livres ne quitte le téléphone' },
      b: { num: '5', unit: 'formats',     cap: 'EPUB, PDF, TXT, MD et CBZ' },
      c: { num: '0', unit: 'compte',      cap: 'à créer pour commencer à lire' },
      d: { num: '0', unit: 'autorisation',cap: 'd’accès à votre stockage' }
    },

    showcase: {
      eyebrow: 'Comment ça marche',
      title: 'Trois étapes, et bonne lecture.',
      sub: 'Ni assistant, ni analyse, ni inscription. Vous apportez vos fichiers et l’application s’efface.',
      steps: [
        { kicker: 'Étape 1', title: 'Apportez vos livres',
          body: 'Touchez-les dans WhatsApp, vos e-mails ou le gestionnaire de fichiers et ouvrez-les avec Balda, ou choisissez des fichiers ou un dossier, que l’application retient. Elle ne fouille pas votre stockage. Et la première fois, deux classiques dans votre langue vous attendent déjà.' },
        { kicker: 'Étape 2', title: 'Rangez-les',
          body: 'Glissez chaque livre sur son étagère. Chaque étagère a un nom et un thème — classique, moderne, naturel, fantasy, bibliothèque ou nuit — avec son bois et sa typographie de dos.' },
        { kicker: 'Étape 3', title: 'Lisez, ou écoutez',
          body: 'La progression, les annotations et les statistiques s’enregistrent toutes seules, sur le téléphone. Et si vous préférez écouter, Balda vous lit le livre à voix haute, même écran éteint.' }
      ],
      phone: {
        bar: 'Chapitre 4',
        time: '21:40',
        title: 'La maison près du phare',
        badge: '✓ Aucune pub ici',
        page: 'Page 148 / 239',
        left: 'Encore 41 min'
      }
    },

    features: {
      eyebrow: 'Fonctions',
      title: 'Tout ce qu’on attend d’une liseuse, et ce que les applis vous retirent d’habitude.',
      sub: 'Avoir des livres, c’est aussi les ranger, les annoter, les écouter et savoir combien on a lu.',
      items: [
        { icon: 'shelf',   label: 'Étagères',     title: 'De vraies étagères',
          body: 'Un meuble à étagères où vous glissez les livres du bout du doigt. Un nom et un thème par étagère, avec son bois et sa typographie de dos.' },
        { icon: 'book',    label: 'Lecture',      title: 'À votre mesure',
          body: 'Police, taille, interligne, marges et thèmes jour, nuit, sépia et OLED. Tournez les pages avec les boutons de volume ; l’écran reste allumé pendant la lecture.' },
        { icon: 'voice',   label: 'Voix haute',   title: 'Il vous lit le livre',
          body: 'La lecture commence à la ligne que vous avez sous les yeux, surligne la phrase prononcée et tourne la page toute seule. Elle continue écran éteint et se pilote depuis les écouteurs ou l’écran de verrouillage.' },
        { icon: 'search',  label: 'Recherche',    title: 'Retrouvez n’importe quel passage',
          body: 'Cherchez dans le livre sans vous soucier des accents ni des majuscules, et passez d’un résultat à l’autre. Pour les PDF, à partir d’Android 15.' },
        { icon: 'marker',  label: 'Annotations',  title: 'Surlignez, notez, marquez',
          body: 'Surlignez en cinq couleurs, ajoutez notes et signets, et exportez-les quand vous voulez. En sélectionnant du texte, le menu du système propose dictionnaire et traducteur.' },
        { icon: 'chart',   label: 'Statistiques', title: 'Combien vous lisez',
          body: 'Vitesse moyenne, séries, carte de régularité et graphiques par semaine, calculés à partir de vos vraies sessions de lecture.' },
        { icon: 'target',  label: 'Objectifs',    title: 'Des objectifs visibles',
          body: 'Un objectif par an ou par période, qui vous dit si vous êtes en avance, juste ou en retard. Et, si vous le souhaitez, un rappel qui se tait les jours où vous avez déjà lu.' },
        { icon: 'backup',  label: 'Sauvegarde',   title: 'Votre bibliothèque dans un fichier',
          body: 'Enregistrez progression, annotations, étagères et, si vous voulez, les livres eux-mêmes dans un .zip à l’endroit de votre choix, puis restaurez-le sur un autre téléphone. Balda ne l’envoie nulle part.' },
        { icon: 'folder',  label: 'Import',       title: 'Ouvrez-le d’où qu’il vienne',
          body: 'Un livre dans WhatsApp, vos e-mails ou vos Téléchargements s’ouvre avec Balda. Ou choisissez des fichiers ou un dossier : l’application ne voit que ce que vous lui donnez.' },
        { icon: 'tablet',  label: 'Tablette',     title: 'Elle s’adapte',
          body: 'Sur grand écran, le panneau d’annotations s’ouvre à côté du texte au lieu de le masquer, et la carte de régularité passe de 16 à 52 semaines.' },
        { icon: 'offline', label: 'Hors ligne',   title: 'Mode avion, même appli',
          body: 'Pas de serveur ni de synchronisation qui plante. Votre téléphone peut rester hors ligne pour toujours, l’application fonctionne exactement pareil.' },
        { icon: 'eyeoff',  label: 'Publicité',    title: 'Aucune pendant la lecture',
          body: 'Les publicités restent sur les écrans de navigation. Dans un livre, ni bannière ni interruption en pleine page, et aucune publicité plein écran les premiers jours.' }
      ]
    },

    formats: {
      eyebrow: 'Formats',
      title: 'Ceux qui dorment déjà dans vos téléchargements.',
      sub: 'Rien à convertir, aucun outil sur ordinateur.',
      items: [
        { tag: 'EPUB',   what: 'ePub 2 et 3 : annotations, recherche et voix haute' },
        { tag: 'PDF',    what: 'Zoom à deux doigts ; recherche sous Android 15+' },
        { tag: 'TXT·MD', what: 'Texte brut, lu à voix haute aussi' },
        { tag: 'CBZ',    what: 'BD page par page' }
      ],
      note: 'Les .cbr sont exclus exprès : presque tous utilisent RAR5 et aucune liseuse Android ne sait les ouvrir. L’application vous le dit à l’import plutôt que de vous laisser une BD qui ne s’ouvre pas. FB2 et MOBI arrivent avec la 1.5.'
    },

    privacy: {
      eyebrow: 'Confidentialité',
      titleA: 'Vos livres ne quittent pas',
      titleB: 'le téléphone.',
      sub: 'Pas de serveur, pas de compte, pas de synchronisation. Votre bibliothèque, votre progression, vos annotations et vos statistiques restent sur le téléphone et ne sont envoyées nulle part. Ce qui sort : les publicités, les rapports de plantage si vous les laissez activés, et ce que vous choisissez de partager, quand vous l’envoyez.',
      checks: [
        'Sans compte ni inscription',
        'Aucun serveur à nous',
        'Vos livres ne sont jamais envoyés',
        'Progression et notes restent sur le téléphone',
        'Aucune autorisation de stockage',
        'Sauvegarde dans un fichier que vous gardez',
        'Rapports de plantage désactivables',
        'Aucune publicité dans la liseuse'
      ],
      cta: 'Lire la politique complète →'
    },

    cta: {
      title: 'Prêt à ouvrir le premier livre.',
      sub: 'Gratuit sur Google Play, pour Android 8 et plus. En français, anglais, espagnol, allemand, italien et portugais.',
      btn: 'Télécharger sur Google Play',
      btnSub: 'Compatible Android 8.0+'
    },

    footer: {
      tagline: 'Vos livres et votre lecture ne quittent pas le téléphone.',
      copy: '© 2026 Balda · Daniel Barea',
      links: ['Politique de confidentialité', 'Contact', 'Google Play']
    }
  },

  de: {
    dir: 'ltr', name: 'Deutsch', flag: '🇩🇪', short: 'DE', htmlLang: 'de',

    nav: { features: 'Funktionen', formats: 'Formate', privacy: 'Datenschutz', download: 'Herunterladen' },

    hero: {
      eyebrow: 'Android · Kostenlos · Offline',
      titleA: 'Deine Bibliothek.',
      titleB: 'Dein Bücherregal.',
      titleC: 'Dein Handy, sonst nichts.',
      sub: 'Balda ist ein Reader für EPUB, PDF, TXT und CBZ mit einem echten Regal zum Einräumen, Vorlesefunktion, Markierungen und Lesestatistiken. Ohne Konto, ohne Cloud und ohne Synchronisierung, die ausfällt: Deine Bücher und dein Lesen verlassen das Handy nicht.',
      cta: 'Kostenlos laden',
      ctaSub: 'Bei Google Play',
      secondary: 'So funktioniert’s',
      chips: ['Android 8+', 'Ohne Konto', 'Funktioniert ohne Internet', '6 Sprachen'],
      note: 'Kostenlos, mit Werbung auf den Übersichtsseiten. Keine einzige beim Lesen.',
      shelfName: 'Lese ich gerade',
      shelfCount: '6 Bücher',
      shelfCaption: 'Zieh ein Buch von einem Regalbrett aufs andere. Wie zu Hause.'
    },

    stats: {
      label: 'Balda in vier Zahlen',
      a: { num: '0', unit: 'Bytes',        cap: 'deiner Bücher verlassen das Handy' },
      b: { num: '5', unit: 'Formate',      cap: 'EPUB, PDF, TXT, MD und CBZ' },
      c: { num: '0', unit: 'Konten',       cap: 'musst du zum Lesen anlegen' },
      d: { num: '0', unit: 'Berechtigungen', cap: 'für deinen Speicher' }
    },

    showcase: {
      eyebrow: 'So funktioniert’s',
      title: 'Drei Schritte, dann lesen.',
      sub: 'Keine Assistenten, kein Scannen, keine Anmeldung. Du bringst die Dateien mit, die App hält sich raus.',
      steps: [
        { kicker: 'Schritt 1', title: 'Bring deine Bücher mit',
          body: 'Tipp sie in WhatsApp, in der Mail oder im Dateimanager an und öffne sie mit Balda – oder wähle Dateien oder einen Ordner, den die App sich merkt. Sie durchsucht deinen Speicher nicht. Und beim ersten Start warten schon zwei Klassiker in deiner Sprache.' },
        { kicker: 'Schritt 2', title: 'Räum sie ein',
          body: 'Zieh jedes Buch auf sein Regalbrett. Jedes Brett hat einen Namen und ein Thema – klassisch, modern, natürlich, Fantasy, Bibliothek oder Nacht – mit eigenem Holz und eigener Rückenschrift.' },
        { kicker: 'Schritt 3', title: 'Lies – oder hör zu',
          body: 'Fortschritt, Markierungen und Statistiken speichern sich von selbst, direkt auf dem Handy. Und wenn du lieber zuhörst, liest Balda dir das Buch vor, auch bei ausgeschaltetem Bildschirm.' }
      ],
      phone: {
        bar: 'Kapitel 4',
        time: '21:40',
        title: 'Das Haus am Leuchtturm',
        badge: '✓ Hier drin keine Werbung',
        page: 'Seite 148 / 239',
        left: 'Noch 41 Min.'
      }
    },

    features: {
      eyebrow: 'Funktionen',
      title: 'Alles, was du von einem Reader erwartest – und das, was andere Apps dir wegnehmen.',
      sub: 'Bücher zu haben heißt auch, sie einzuräumen, zu markieren, anzuhören und zu wissen, wie viel du gelesen hast.',
      items: [
        { icon: 'shelf',   label: 'Regal',        title: 'Echte Regalbretter',
          body: 'Ein Regal, in das du die Bücher mit dem Finger ziehst. Name und Thema pro Brett, mit eigenem Holz und eigener Rückenschrift.' },
        { icon: 'book',    label: 'Reader',       title: 'Ganz nach deinem Geschmack',
          body: 'Schrift, Größe, Zeilenabstand, Ränder und die Themen Tag, Nacht, Sepia und OLED. Blättere mit den Lautstärketasten; der Bildschirm bleibt beim Lesen an.' },
        { icon: 'voice',   label: 'Vorlesen',     title: 'Es liest dir vor',
          body: 'Die Vorlesefunktion beginnt bei der Zeile vor dir, hebt den gesprochenen Satz hervor und blättert von selbst um. Sie läuft bei ausgeschaltetem Bildschirm weiter und lässt sich über Kopfhörer oder den Sperrbildschirm steuern.' },
        { icon: 'search',  label: 'Suche',        title: 'Jede Stelle wiederfinden',
          body: 'Durchsuche das Buch, ohne auf Akzente oder Großschreibung zu achten, und spring von Treffer zu Treffer. Bei PDFs ab Android 15.' },
        { icon: 'marker',  label: 'Markierungen', title: 'Markieren, notieren, merken',
          body: 'Markiere in fünf Farben, setz Notizen und Lesezeichen und exportiere sie, wann du willst. Beim Markieren bietet das Systemmenü Wörterbuch und Übersetzer an.' },
        { icon: 'chart',   label: 'Statistik',    title: 'Weiß, wie viel du liest',
          body: 'Durchschnittstempo, Lesesträhnen, eine Heatmap deiner Regelmäßigkeit und Wochendiagramme – berechnet aus deinen echten Lesesitzungen.' },
        { icon: 'target',  label: 'Ziele',        title: 'Ziele, die man sieht',
          body: 'Ein Ziel pro Jahr oder Zeitraum, das dir sagt, ob du im Plan bist, knapp dran oder in Gefahr. Und auf Wunsch eine Erinnerung, die an Tagen schweigt, an denen du schon gelesen hast.' },
        { icon: 'backup',  label: 'Sicherung',    title: 'Deine Bibliothek in einer Datei',
          body: 'Sichere Fortschritt, Markierungen, Regale und auf Wunsch die Bücher selbst in eine .zip-Datei, wo du willst, und stell sie auf einem anderen Handy wieder her. Balda lädt sie nirgendwo hoch.' },
        { icon: 'folder',  label: 'Import',       title: 'Öffnen, wo immer es liegt',
          body: 'Ein Buch aus WhatsApp, der Mail oder den Downloads öffnet sich mit Balda. Oder wähle einzelne Dateien oder einen Ordner: Die App sieht nur, was du ihr gibst.' },
        { icon: 'tablet',  label: 'Tablet',       title: 'Nutzt den Platz',
          body: 'Auf großen Bildschirmen öffnet sich das Markierungsfeld neben dem Text statt darüber, und die Heatmap wächst von 16 auf 52 Wochen.' },
        { icon: 'offline', label: 'Offline',      title: 'Flugmodus, gleiche App',
          body: 'Kein Server und keine Synchronisierung, die ausfallen kann. Lass dein Handy für immer offline – die App funktioniert genau gleich.' },
        { icon: 'eyeoff',  label: 'Werbung',      title: 'Keine beim Lesen',
          body: 'Werbung gibt es nur auf den Übersichtsseiten. Im Buch gibt es weder Banner noch Unterbrechung mitten auf der Seite, und in den ersten Tagen erscheint keine Vollbildwerbung.' }
      ]
    },

    formats: {
      eyebrow: 'Formate',
      title: 'Die, die schon in deinem Download-Ordner liegen.',
      sub: 'Nichts umwandeln, kein Programm am Computer dazwischen.',
      items: [
        { tag: 'EPUB',   what: 'ePub 2 und 3: Markierungen, Suche und Vorlesen' },
        { tag: 'PDF',    what: 'Zoom mit zwei Fingern; Suche ab Android 15' },
        { tag: 'TXT·MD', what: 'Reiner Text, auch zum Vorlesen' },
        { tag: 'CBZ',    what: 'Comics Seite für Seite' }
      ],
      note: '.cbr bleibt bewusst draußen: Fast alle nutzen RAR5, und kein Android-Reader kann sie öffnen. Die App sagt es dir beim Import, statt dir einen Comic zu geben, der sich nicht öffnen lässt. FB2 und MOBI kommen mit Version 1.5.'
    },

    privacy: {
      eyebrow: 'Datenschutz',
      titleA: 'Deine Bücher verlassen',
      titleB: 'das Handy nicht.',
      sub: 'Kein Server, kein Konto, keine Synchronisierung. Deine Bibliothek, dein Fortschritt, deine Markierungen und deine Statistiken bleiben auf dem Handy und werden nirgendwohin gesendet. Was rausgeht: die Werbung, die Absturzberichte, wenn du sie eingeschaltet lässt, und was du selbst teilst – wenn du es verschickst.',
      checks: [
        'Kein Konto, keine Anmeldung',
        'Kein eigener Server',
        'Deine Bücher werden nie hochgeladen',
        'Fortschritt und Notizen bleiben auf dem Handy',
        'Keine Speicherberechtigung',
        'Sicherung in einer Datei, die du behältst',
        'Absturzberichte abschaltbar',
        'Keine Werbung im Reader'
      ],
      cta: 'Ganze Datenschutzerklärung lesen →'
    },

    cta: {
      title: 'Bereit für das erste Buch.',
      sub: 'Kostenlos bei Google Play, für Android 8 und neuer. Auf Deutsch, Englisch, Spanisch, Französisch, Italienisch und Portugiesisch.',
      btn: 'Bei Google Play laden',
      btnSub: 'Für Android 8.0+'
    },

    footer: {
      tagline: 'Deine Bücher und dein Lesen verlassen das Handy nicht.',
      copy: '© 2026 Balda · Daniel Barea',
      links: ['Datenschutzerklärung', 'Kontakt', 'Google Play']
    }
  },

  it: {
    dir: 'ltr', name: 'Italiano', flag: '🇮🇹', short: 'IT', htmlLang: 'it',

    nav: { features: 'Funzioni', formats: 'Formati', privacy: 'Privacy', download: 'Scarica' },

    hero: {
      eyebrow: 'Android · Gratis · Offline',
      titleA: 'La tua biblioteca.',
      titleB: 'La tua libreria.',
      titleC: 'Il tuo telefono, e basta.',
      sub: 'Balda è un lettore di EPUB, PDF, TXT e CBZ con una vera libreria a ripiani, lettura ad alta voce, annotazioni e statistiche. Senza account, senza cloud e senza sincronizzazioni che si bloccano: i tuoi libri e la tua lettura non escono dal telefono.',
      cta: 'Scarica gratis',
      ctaSub: 'Su Google Play',
      secondary: 'Come funziona',
      chips: ['Android 8+', 'Senza account', 'Funziona senza internet', '6 lingue'],
      note: 'Gratis, con annunci nelle schermate di navigazione. Nessuno mentre leggi.',
      shelfName: 'In lettura',
      shelfCount: '6 libri',
      shelfCaption: 'Trascina un libro da un ripiano all’altro. Come a casa.'
    },

    stats: {
      label: 'Balda in quattro numeri',
      a: { num: '0', unit: 'byte',     cap: 'dei tuoi libri escono dal telefono' },
      b: { num: '5', unit: 'formati',  cap: 'EPUB, PDF, TXT, MD e CBZ' },
      c: { num: '0', unit: 'account',  cap: 'da creare per iniziare a leggere' },
      d: { num: '0', unit: 'permessi', cap: 'di accesso alla tua memoria' }
    },

    showcase: {
      eyebrow: 'Come funziona',
      title: 'Tre passi e si legge.',
      sub: 'Niente procedure guidate, scansioni o registrazioni. Porti i tuoi file e l’app si fa da parte.',
      steps: [
        { kicker: 'Passo 1', title: 'Porta i tuoi libri',
          body: 'Toccali su WhatsApp, nella posta o nel gestore di file e aprili con Balda, oppure scegli dei file o una cartella, che l’app ricorda. Non fruga nella tua memoria. E la prima volta ti aspettano già due classici nella tua lingua.' },
        { kicker: 'Passo 2', title: 'Sistemali',
          body: 'Trascina ogni libro sul suo ripiano. Ogni ripiano ha un nome e un tema — classico, moderno, naturale, fantasy, biblioteca o notturno — con il suo legno e il suo carattere sul dorso.' },
        { kicker: 'Passo 3', title: 'Leggi, o ascolta',
          body: 'Progressi, annotazioni e statistiche si salvano da soli, sul telefono. E se preferisci ascoltare, Balda ti legge il libro ad alta voce, anche a schermo spento.' }
      ],
      phone: {
        bar: 'Capitolo 4',
        time: '21:40',
        title: 'La casa vicino al faro',
        badge: '✓ Niente annunci qui dentro',
        page: 'Pagina 148 / 239',
        left: 'Mancano 41 min'
      }
    },

    features: {
      eyebrow: 'Funzioni',
      title: 'Tutto quello che ti aspetti da un lettore, più ciò che le altre app ti tolgono.',
      sub: 'Avere dei libri vuol dire anche sistemarli, sottolinearli, ascoltarli e sapere quanto hai letto.',
      items: [
        { icon: 'shelf',   label: 'Libreria',    title: 'Ripiani veri',
          body: 'Un mobile a ripiani dove trascini i libri con il dito. Nome e tema per ogni ripiano, con il suo legno e il suo carattere sul dorso.' },
        { icon: 'book',    label: 'Lettore',     title: 'Su misura per te',
          body: 'Carattere, dimensione, interlinea, margini e temi giorno, notte, seppia e OLED. Gira pagina con i tasti del volume; lo schermo resta acceso mentre leggi.' },
        { icon: 'voice',   label: 'Voce alta',   title: 'Te lo legge ad alta voce',
          body: 'Parte dalla riga che hai davanti, evidenzia la frase che sta leggendo e gira pagina da sola. Continua a schermo spento e si comanda dalle cuffie o dalla schermata di blocco.' },
        { icon: 'search',  label: 'Ricerca',     title: 'Trova qualsiasi passo',
          body: 'Cerca nel libro senza preoccuparti di accenti o maiuscole e salta da un risultato all’altro. Nei PDF, da Android 15 in su.' },
        { icon: 'marker',  label: 'Annotazioni', title: 'Sottolinea, annota, segna',
          body: 'Sottolinea in cinque colori, lascia note e segnalibri ed esportali quando vuoi. Selezionando il testo, il menu di sistema ti offre dizionario e traduttore.' },
        { icon: 'chart',   label: 'Statistiche', title: 'Sa quanto leggi',
          body: 'Velocità media, serie di giorni, mappa di costanza e grafici settimanali, calcolati dalle tue vere sessioni di lettura.' },
        { icon: 'target',  label: 'Obiettivi',   title: 'Traguardi che si vedono',
          body: 'Un obiettivo per anno o per periodo, che ti dice se sei in linea, al limite o a rischio. E, se vuoi, un promemoria che tace nei giorni in cui hai già letto.' },
        { icon: 'backup',  label: 'Backup',      title: 'La tua biblioteca in un file',
          body: 'Salva progressi, annotazioni, ripiani e, se vuoi, i libri stessi in un .zip dove scegli tu, e ripristinalo su un altro telefono. Balda non lo carica da nessuna parte.' },
        { icon: 'folder',  label: 'Importa',     title: 'Aprilo ovunque si trovi',
          body: 'Un libro su WhatsApp, nella posta o nei Download si apre con Balda. Oppure scegli singoli file o una cartella: l’app vede solo quello che le dai.' },
        { icon: 'tablet',  label: 'Tablet',      title: 'Si allarga bene',
          body: 'Su schermo largo il pannello delle annotazioni si apre accanto al testo invece di coprirlo, e la mappa di costanza passa da 16 a 52 settimane.' },
        { icon: 'offline', label: 'Offline',     title: 'Modalità aereo, stessa app',
          body: 'Nessun server e nessuna sincronizzazione che si blocca. Puoi tenere il telefono sempre offline e l’app funziona esattamente allo stesso modo.' },
        { icon: 'eyeoff',  label: 'Annunci',     title: 'Nessuno mentre leggi',
          body: 'Gli annunci stanno nelle schermate di navigazione. Dentro il libro niente banner né interruzioni a metà pagina, e nei primi giorni non compare nessun annuncio a schermo intero.' }
      ]
    },

    formats: {
      eyebrow: 'Formati',
      title: 'Quelli che hai già nella cartella dei download.',
      sub: 'Niente da convertire e nessun programma sul computer.',
      items: [
        { tag: 'EPUB',   what: 'ePub 2 e 3: annotazioni, ricerca e voce alta' },
        { tag: 'PDF',    what: 'Zoom con due dita; ricerca da Android 15' },
        { tag: 'TXT·MD', what: 'Testo semplice, anche ad alta voce' },
        { tag: 'CBZ',    what: 'Fumetti pagina per pagina' }
      ],
      note: 'I .cbr restano fuori di proposito: quasi tutti usano RAR5 e nessun lettore Android riesce ad aprirli, quindi l’app te lo dice all’importazione invece di lasciarti un fumetto che non si apre. FB2 e MOBI arrivano con la 1.5.'
    },

    privacy: {
      eyebrow: 'Privacy',
      titleA: 'I tuoi libri non escono',
      titleB: 'dal telefono.',
      sub: 'Nessun server, nessun account, nessuna sincronizzazione. La tua biblioteca, i tuoi progressi, le tue annotazioni e le tue statistiche restano sul telefono e non vengono inviati da nessuna parte. Escono gli annunci, i rapporti sugli arresti anomali se li lasci attivi e ciò che decidi di condividere, quando lo invii tu.',
      checks: [
        'Senza account né registrazione',
        'Nessun server nostro',
        'I tuoi libri non vengono mai caricati',
        'Progressi e note restano sul telefono',
        'Nessun permesso di memoria',
        'Backup in un file che tieni tu',
        'Rapporti di arresto disattivabili',
        'Nessuna pubblicità nel lettore'
      ],
      cta: 'Leggi l’informativa completa →'
    },

    cta: {
      title: 'Pronto ad aprire il primo libro.',
      sub: 'Gratis su Google Play, per Android 8 e superiori. In italiano, inglese, spagnolo, francese, tedesco e portoghese.',
      btn: 'Scarica da Google Play',
      btnSub: 'Compatibile con Android 8.0+'
    },

    footer: {
      tagline: 'I tuoi libri e la tua lettura non escono dal telefono.',
      copy: '© 2026 Balda · Daniel Barea',
      links: ['Informativa sulla privacy', 'Contatti', 'Google Play']
    }
  },

  pt: {
    dir: 'ltr', name: 'Português (Brasil)', flag: '🇧🇷', short: 'PT', htmlLang: 'pt-BR',

    nav: { features: 'Recursos', formats: 'Formatos', privacy: 'Privacidade', download: 'Baixar' },

    hero: {
      eyebrow: 'Android · Grátis · Offline',
      titleA: 'Sua biblioteca.',
      titleB: 'Sua estante.',
      titleC: 'Seu celular, e pronto.',
      sub: 'Balda é um leitor de EPUB, PDF, TXT e CBZ com uma estante de verdade para organizar, leitura em voz alta, anotações e estatísticas. Sem conta, sem nuvem e sem sincronização que falha: seus livros e sua leitura não saem do celular.',
      cta: 'Baixar grátis',
      ctaSub: 'No Google Play',
      secondary: 'Como funciona',
      chips: ['Android 8+', 'Sem conta', 'Funciona sem internet', '6 idiomas'],
      note: 'Grátis, com anúncios nas telas de navegação. Nenhum enquanto você lê.',
      shelfName: 'Lendo agora',
      shelfCount: '6 livros',
      shelfCaption: 'Arraste um livro de uma prateleira para outra. Como em casa.'
    },

    stats: {
      label: 'Balda em quatro números',
      a: { num: '0', unit: 'bytes',      cap: 'dos seus livros saem do celular' },
      b: { num: '5', unit: 'formatos',   cap: 'EPUB, PDF, TXT, MD e CBZ' },
      c: { num: '0', unit: 'contas',     cap: 'para criar antes de ler' },
      d: { num: '0', unit: 'permissões', cap: 'de acesso ao seu armazenamento' }
    },

    showcase: {
      eyebrow: 'Como funciona',
      title: 'Três passos e boa leitura.',
      sub: 'Nada de assistentes, varreduras ou cadastro. Você traz os arquivos e o app sai da frente.',
      steps: [
        { kicker: 'Passo 1', title: 'Traga seus livros',
          body: 'Toque neles no WhatsApp, no e-mail ou no gerenciador de arquivos e abra com o Balda, ou escolha arquivos ou uma pasta, que o app lembra. Ele não vasculha seu armazenamento. E, na primeira vez, dois clássicos no seu idioma já estão esperando.' },
        { kicker: 'Passo 2', title: 'Organize',
          body: 'Arraste cada livro para a sua prateleira. Cada prateleira tem nome e tema — clássico, moderno, natural, fantasia, biblioteca ou noturno — com sua madeira e sua tipografia de lombada.' },
        { kicker: 'Passo 3', title: 'Leia, ou ouça',
          body: 'O progresso, as anotações e as estatísticas se salvam sozinhos, no próprio celular. E se você preferir ouvir, o Balda lê o livro em voz alta, até com a tela apagada.' }
      ],
      phone: {
        bar: 'Capítulo 4',
        time: '21:40',
        title: 'A casa perto do farol',
        badge: '✓ Sem anúncios aqui dentro',
        page: 'Página 148 / 239',
        left: 'Faltam 41 min'
      }
    },

    features: {
      eyebrow: 'Recursos',
      title: 'Tudo o que você espera de um leitor, e a parte que os apps costumam tirar.',
      sub: 'Ter livros também é organizá-los, grifá-los, ouvi-los e saber quanto você leu.',
      items: [
        { icon: 'shelf',   label: 'Estante',      title: 'Prateleiras de verdade',
          body: 'Um móvel com prateleiras onde você arrasta os livros com o dedo. Nome e tema por prateleira, com sua madeira e sua tipografia de lombada.' },
        { icon: 'book',    label: 'Leitor',       title: 'Do seu jeito',
          body: 'Fonte, tamanho, entrelinha, margens e temas dia, noite, sépia e OLED. Vire a página com os botões de volume; a tela não apaga enquanto você lê.' },
        { icon: 'voice',   label: 'Voz alta',     title: 'Ele lê para você',
          body: 'Começa na linha que está na sua frente, destaca a frase falada e vira a página sozinho. Continua com a tela apagada e se controla pelos fones ou pela tela de bloqueio.' },
        { icon: 'search',  label: 'Busca',        title: 'Encontre qualquer trecho',
          body: 'Busque no livro sem se preocupar com acentos ou maiúsculas e pule de um resultado para outro. Em PDF, a partir do Android 15.' },
        { icon: 'marker',  label: 'Anotações',    title: 'Grife, anote, marque',
          body: 'Grife em cinco cores, deixe notas e marcadores e exporte quando quiser. Ao selecionar texto, o menu do sistema oferece dicionário e tradutor.' },
        { icon: 'chart',   label: 'Estatísticas', title: 'Sabe quanto você lê',
          body: 'Velocidade média, sequências, mapa de constância e gráficos por semana, calculados a partir das suas sessões reais de leitura.' },
        { icon: 'target',  label: 'Metas',        title: 'Metas que dá para ver',
          body: 'Uma meta por ano ou por período, avisando se você está no ritmo, no limite ou em risco. E, se quiser, um lembrete que não toca nos dias em que você já leu.' },
        { icon: 'backup',  label: 'Backup',       title: 'Sua biblioteca em um arquivo',
          body: 'Salve progresso, anotações, estantes e, se quiser, os próprios livros em um .zip onde você escolher, e restaure em outro celular. O Balda não envia isso para lugar nenhum.' },
        { icon: 'folder',  label: 'Importar',     title: 'Abra de onde estiver',
          body: 'Um livro no WhatsApp, no e-mail ou em Downloads abre com o Balda. Ou escolha arquivos avulsos ou uma pasta: o app só vê o que você entrega.' },
        { icon: 'tablet',  label: 'Tablet',       title: 'Aproveita a tela',
          body: 'Em tela larga, o painel de anotações abre ao lado do texto em vez de cobri-lo, e o mapa de constância passa de 16 para 52 semanas.' },
        { icon: 'offline', label: 'Offline',      title: 'Modo avião, mesmo app',
          body: 'Não há servidor nem sincronização para falhar. Deixe o celular sempre offline e o app funciona exatamente igual.' },
        { icon: 'eyeoff',  label: 'Anúncios',     title: 'Nenhum enquanto você lê',
          body: 'Os anúncios ficam nas telas de navegação. Dentro do livro não há banner nem interrupção no meio da página, e nos primeiros dias nenhum anúncio de tela cheia aparece.' }
      ]
    },

    formats: {
      eyebrow: 'Formatos',
      title: 'Os que já estão na sua pasta de downloads.',
      sub: 'Nada para converter e nenhum programa de computador no meio.',
      items: [
        { tag: 'EPUB',   what: 'ePub 2 e 3: anotações, busca e voz alta' },
        { tag: 'PDF',    what: 'Zoom com pinça; busca no Android 15+' },
        { tag: 'TXT·MD', what: 'Texto simples, também em voz alta' },
        { tag: 'CBZ',    what: 'Quadrinhos página por página' }
      ],
      note: 'Os .cbr ficam de fora de propósito: quase todos usam RAR5 e nenhum leitor Android consegue abri-los, então o app avisa na importação em vez de deixar você com um quadrinho que não abre. FB2 e MOBI chegam na versão 1.5.'
    },

    privacy: {
      eyebrow: 'Privacidade',
      titleA: 'Seus livros não saem',
      titleB: 'do celular.',
      sub: 'Sem servidor, sem conta e sem sincronização. Sua biblioteca, seu progresso, suas anotações e suas estatísticas ficam no celular e não são enviados para lugar nenhum. O que sai são os anúncios, os relatórios de falha se você deixá-los ativados e o que você decidir compartilhar, quando você mesmo envia.',
      checks: [
        'Sem conta nem cadastro',
        'Nenhum servidor próprio',
        'Seus livros nunca são enviados',
        'Progresso e notas ficam no celular',
        'Sem permissão de armazenamento',
        'Backup em um arquivo que fica com você',
        'Relatórios de falha com botão para desligar',
        'Sem publicidade dentro do leitor'
      ],
      cta: 'Ler a política completa →'
    },

    cta: {
      title: 'Pronto para abrir o primeiro livro.',
      sub: 'Grátis no Google Play, para Android 8 ou superior. Em português, inglês, espanhol, francês, alemão e italiano.',
      btn: 'Baixar no Google Play',
      btnSub: 'Compatível com Android 8.0+'
    },

    footer: {
      tagline: 'Seus livros e sua leitura não saem do celular.',
      copy: '© 2026 Balda · Daniel Barea',
      links: ['Política de privacidade', 'Contato', 'Google Play']
    }
  }
};
