/* Textos de la portada de Balda — español e inglés.
   Los dos idiomas que habla la app (res/values y res/values-es). Si algún día
   la app suma otro, este fichero y `i18n_policy.js` son los dos sitios que hay
   que tocar en la web. */
window.BV_I18N = {

  es: {
    dir: 'ltr', name: 'Español', flag: '🇪🇸',

    nav: { features: 'Funciones', formats: 'Formatos', privacy: 'Privacidad', download: 'Descargar' },

    hero: {
      eyebrow: 'Android · Gratis · Sin conexión',
      titleA: 'Tu biblioteca.',
      titleB: 'Tu estantería.',
      titleC: 'Tu móvil, y ya está.',
      sub: 'Balda es un lector de EPUB, PDF, TXT y CBZ con estantería de baldas, anotaciones y estadísticas. Sin cuenta, sin nube y sin sincronización que se caiga: tus libros y tu lectura no salen del móvil.',
      cta: 'Descargar gratis',
      ctaSub: 'En Google Play',
      secondary: 'Cómo funciona',
      chips: ['Android 8+', 'Sin cuenta', 'Funciona sin internet', 'Español e inglés'],
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
          body: 'Elige los ficheros uno a uno o concede una carpeta entera, que la app recuerda. No rastrea tu almacenamiento ni te pide permiso para leerlo.' },
        { kicker: 'Paso 2', title: 'Colócalos',
          body: 'Arrastra cada libro a su balda. Cada balda tiene nombre y temática —clásica, moderna, natural, fantasía, biblioteca o nocturna— con su madera y su tipografía de lomo.' },
        { kicker: 'Paso 3', title: 'Lee',
          body: 'El progreso, las anotaciones y las estadísticas se guardan solos, en el propio teléfono. Cierra la app cuando quieras: vuelves a la misma página.' }
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
      sub: 'Tener libros también es colocarlos, subrayarlos y saber cuánto has leído.',
      items: [
        { icon: 'shelf',   label: 'Estantería',  title: 'Baldas de verdad',
          body: 'Un mueble con baldas donde arrastras los libros con el dedo. Nombre y temática por balda, con su madera y su tipografía de lomo.' },
        { icon: 'book',    label: 'Lector',      title: 'A tu medida',
          body: 'Tipografía, tamaño, interlineado y márgenes. Temas día, noche, sepia y OLED. Desplazamiento continuo o paginado, como leas mejor.' },
        { icon: 'marker',  label: 'Anotaciones', title: 'Subraya, anota, marca',
          body: 'Selecciona texto para subrayarlo en cinco colores, dejar una nota o poner un marcador. Panel con filtros y exportación cuando quieras.' },
        { icon: 'chart',   label: 'Estadísticas',title: 'Sabe cuánto lees',
          body: 'Velocidad media, mapa de calor de constancia y gráficas por semana, calculadas desde tus sesiones reales de lectura.' },
        { icon: 'target',  label: 'Objetivos',   title: 'Metas que se ven',
          body: 'Una meta por año o por período, con aviso de si vas en camino, justo o a riesgo. Con widgets para la pantalla de inicio.' },
        { icon: 'tablet',  label: 'Tablet',      title: 'Se estira bien',
          body: 'En pantalla ancha el panel de anotaciones se abre al lado del texto en vez de taparlo, y el mapa de calor pasa de 16 a 52 semanas.' },
        { icon: 'offline', label: 'Sin conexión',title: 'Modo avión, igual',
          body: 'No hay servidor ni sincronización que se caiga. Puedes tener el móvil desconectado siempre y la app funciona exactamente igual.' },
        { icon: 'eyeoff',  label: 'Anuncios',    title: 'Ni uno mientras lees',
          body: 'Los anuncios viven en las pantallas de navegación. Dentro del libro no hay banner ni corte a mitad de página, y los primeros días no salta ninguno a pantalla completa.' },
        { icon: 'folder',  label: 'Importar',    title: 'Tú eliges qué entra',
          body: 'Ficheros sueltos o una carpeta concedida. La app no husmea tu almacenamiento: solo ve lo que le das.' }
      ]
    },

    formats: {
      eyebrow: 'Formatos',
      title: 'Los que ya tienes en la carpeta de descargas.',
      sub: 'Sin convertir nada y sin herramientas de escritorio por medio.',
      items: [
        { tag: 'EPUB',   what: 'ePub 2 y 3, con anotaciones' },
        { tag: 'PDF',    what: 'Con zoom y búsqueda de texto' },
        { tag: 'TXT·MD', what: 'Texto plano, paginado igual que el resto' },
        { tag: 'CBZ',    what: 'Cómics página a página' }
      ],
      note: 'Los .cbr se quedan fuera a propósito: casi todos usan RAR5 y no hay lector en Android capaz de abrirlos, así que la app te lo dice al importar en lugar de dejarte con un cómic que no abre. FB2 y MOBI llegan en la 1.5.'
    },

    privacy: {
      eyebrow: 'Privacidad',
      titleA: 'Tus libros no salen',
      titleB: 'del móvil.',
      sub: 'No hay servidor, no hay cuenta y no hay sincronización. Tu biblioteca, tu progreso, tus anotaciones y tus estadísticas viven en la base de datos del teléfono y no se envían a ningún sitio. Lo único que sale son los anuncios y, si lo dejas activado, los informes de fallo.',
      checks: [
        'Sin cuenta ni registro',
        'Sin servidor propio',
        'Tus libros nunca se suben',
        'Progreso y anotaciones, solo en tu móvil',
        'No pide permiso de almacenamiento',
        'Funciona entera en modo avión',
        'Informes de fallo con interruptor',
        'Sin publicidad dentro del lector'
      ],
      cta: 'Leer la política completa →'
    },

    cta: {
      title: 'Listo para abrir el primer libro.',
      sub: 'Gratis en Google Play, para Android 8 y superior. En español e inglés.',
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
    dir: 'ltr', name: 'English', flag: '🇬🇧',

    nav: { features: 'Features', formats: 'Formats', privacy: 'Privacy', download: 'Download' },

    hero: {
      eyebrow: 'Android · Free · Works offline',
      titleA: 'Your library.',
      titleB: 'Your bookshelf.',
      titleC: 'Your phone, and that is it.',
      sub: 'Balda is an EPUB, PDF, TXT and CBZ reader with a real shelf you arrange, highlights and reading stats. No account, no cloud, no sync to break: your books and your reading never leave the phone.',
      cta: 'Download free',
      ctaSub: 'On Google Play',
      secondary: 'How it works',
      chips: ['Android 8+', 'No account', 'Works with no internet', 'English and Spanish'],
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
          body: 'Pick files one by one or grant a whole folder, which the app remembers. It never crawls your storage or asks for permission to read it.' },
        { kicker: 'Step 2', title: 'Arrange them',
          body: 'Drag each book onto its shelf. Every shelf has a name and a theme — classic, modern, natural, fantasy, library or night — with its own wood and spine typeface.' },
        { kicker: 'Step 3', title: 'Read',
          body: 'Progress, highlights and stats save themselves, on the phone itself. Close the app whenever: you come back to the same page.' }
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
      sub: 'Owning books is also arranging them, marking them up and knowing how much you have read.',
      items: [
        { icon: 'shelf',   label: 'Bookcase',  title: 'Shelves you arrange',
          body: 'A real cabinet of shelves where you drag books with your finger. Each shelf gets a name and a theme, with its own wood and spine typeface.' },
        { icon: 'book',    label: 'Reader',    title: 'Set up your way',
          body: 'Typeface, size, line height and margins. Day, night, sepia and OLED themes. Continuous scroll or page turns, whichever you read better with.' },
        { icon: 'marker',  label: 'Highlights',title: 'Highlight, note, bookmark',
          body: 'Select text to highlight it in five colours, leave a note or drop a bookmark. A filtered panel holds them all, and you can export them any time.' },
        { icon: 'chart',   label: 'Stats',     title: 'It knows how much you read',
          body: 'Average speed, a consistency heatmap and weekly charts, all computed from your actual reading sessions on the device.' },
        { icon: 'target',  label: 'Goals',     title: 'Goals you can see',
          body: 'A target per year or per period, telling you whether you are on track, cutting it close or at risk. With home screen widgets.' },
        { icon: 'tablet',  label: 'Tablets',   title: 'It stretches properly',
          body: 'On a wide screen the highlights panel opens beside the text instead of covering it, and the heatmap grows from 16 weeks to 52.' },
        { icon: 'offline', label: 'Offline',   title: 'Airplane mode, same app',
          body: 'There is no server and no sync to fail. Keep the phone offline forever and the app behaves exactly the same.' },
        { icon: 'eyeoff',  label: 'Ads',       title: 'Not one while you read',
          body: 'Ads live on the browsing screens. Inside a book there is no banner and no interruption mid-page, and no full-screen ad pops up during the first few days.' },
        { icon: 'folder',  label: 'Importing', title: 'You choose what goes in',
          body: 'Single files or a folder you grant. The app does not snoop around your storage: it only sees what you hand it.' }
      ]
    },

    formats: {
      eyebrow: 'Formats',
      title: 'The ones already sitting in your downloads folder.',
      sub: 'Nothing to convert and no desktop tool in the middle.',
      items: [
        { tag: 'EPUB',   what: 'ePub 2 and 3, with highlights' },
        { tag: 'PDF',    what: 'With zoom and text search' },
        { tag: 'TXT·MD', what: 'Plain text, paginated like the rest' },
        { tag: 'CBZ',    what: 'Comics, page by page' }
      ],
      note: 'CBR is left out on purpose: nearly all of them use RAR5 and no Android reader can open those, so the app tells you at import time instead of handing you a comic that will not open. FB2 and MOBI arrive in 1.5.'
    },

    privacy: {
      eyebrow: 'Privacy',
      titleA: 'Your books never leave',
      titleB: 'the phone.',
      sub: 'No server, no account, no sync. Your library, your progress, your highlights and your stats live in the phone database and are never sent anywhere. The only things that leave are the ads and, if you leave it on, the crash reports.',
      checks: [
        'No account, no sign-up',
        'No server of our own',
        'Your books are never uploaded',
        'Progress and notes stay on the phone',
        'No storage permission requested',
        'Fully usable in airplane mode',
        'Crash reports have an off switch',
        'No advertising inside the reader'
      ],
      cta: 'Read the full policy →'
    },

    cta: {
      title: 'Ready to open the first book.',
      sub: 'Free on Google Play, for Android 8 and up. In English and Spanish.',
      btn: 'Get it on Google Play',
      btnSub: 'Works on Android 8.0+'
    },

    footer: {
      tagline: 'Your books and your reading never leave the phone.',
      copy: '© 2026 Balda · Daniel Barea',
      links: ['Privacy policy', 'Contact', 'Google Play']
    }
  }
};
