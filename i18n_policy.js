/* Política de privacidad de BookVault — español e inglés.

   Regla de este fichero: describe lo que la app hace HOY, no lo que podría
   hacer. Si se añade un SDK, se activa la compra sin anuncios o se suma un
   producto de Firebase, hay que tocar aquí, la ficha de «Seguridad de los
   datos» de Play y los textos del onboarding, los tres a la vez. */
window.BV_POLICY = {

  es: {
    dir: 'ltr', name: 'Español', flag: '🇪🇸',

    nav: { home: 'Inicio', policy: 'Privacidad', back: '← Volver a la app' },

    hero: {
      eyebrow: 'Política de privacidad',
      title: 'Tus libros. Tu lectura. Tu dispositivo.',
      sub: 'Tu biblioteca, tu progreso, tus anotaciones y tus estadísticas se quedan en el teléfono y nunca se envían. Lo único que sale son los anuncios y —si no lo apagas— los informes de fallo.',
      meta: 'Última actualización: 12 de septiembre de 2026',
      author: 'BookVault · por Daniel Barea',
      tldr: 'Sin cuenta · sin servidor propio · tus libros no se suben nunca · AdMob para los anuncios y Firebase para los fallos, con interruptor.'
    },

    toc: 'Índice',

    sections: [
      {
        id: 'principle', num: '01', kicker: 'El principio', title: 'Lo que significa «no sale del móvil»',
        body: 'BookVault es un lector de libros que funciona entero en tu dispositivo. No hay cuenta de usuario, no hay registro y no existe ningún servidor nuestro al que la app se conecte. Los libros que importas, por dónde vas, lo que subrayas y las estadísticas que genera tu lectura se guardan en la base de datos del propio teléfono y no viajan a ninguna parte.',
        callout: 'La frase es literal: el contenido de tus libros y tus datos de lectura nunca se transmiten. Lo que sí sale del dispositivo son los anuncios y los diagnósticos, y esta política dedica una sección a cada uno.'
      },
      {
        id: 'ondevice', num: '02', kicker: 'En tu dispositivo', title: 'Qué se guarda, y dónde se queda',
        body: 'Todo esto vive en el almacenamiento privado de la app —base de datos y preferencias— y solo es accesible desde tu dispositivo:',
        list: [
          'Tu biblioteca: título, autor, formato, portada y la ruta del fichero que tú elegiste',
          'El progreso de lectura de cada libro, página a página',
          'Tus sesiones de lectura, que son de donde salen las estadísticas y las predicciones',
          'Subrayados, notas y marcadores, con su color y su posición en el texto',
          'Colecciones, baldas de la estantería y objetivos de lectura',
          'Preferencias del lector: tipografía, tamaño, interlineado, márgenes y tema'
        ],
        callout: 'Nada de esta lista se envía a ningún servidor, ni al nuestro —que no existe— ni al de nadie. Se borra entero al desinstalar la app.',
        outro: 'Los ficheros de tus libros siguen donde tú los tenías: la app los lee desde la ubicación que le concediste, sin hacer copias en la nube.'
      },
      {
        id: 'offdevice', num: '03', kicker: 'Lo que sí sale', title: 'Los dos únicos servicios que reciben datos',
        body: 'BookVault usa dos SDK de Google que se ejecutan dentro de la app y hablan con los servidores de Google, no con los nuestros:',
        list: [
          'Google AdMob, para mostrar los anuncios que mantienen la app gratuita',
          'Firebase Crashlytics y Firebase Analytics, para saber que la app se ha roto y en qué pantalla'
        ],
        outro: 'No hay ningún otro. No usamos Firestore, ni Storage, ni Auth, ni mensajería: nada que pudiera sincronizar tu contenido. Las dos secciones siguientes detallan qué recoge cada uno.'
      },
      {
        id: 'ads', num: '04', kicker: 'Publicidad', title: 'Google AdMob',
        body: 'La app es gratuita y se sostiene con anuncios. Los sirve Google AdMob, que puede recoger el identificador de publicidad del dispositivo, datos técnicos (modelo, versión de Android, idioma), la dirección IP —de la que se deduce una ubicación aproximada, nunca precisa— y tus interacciones con los anuncios. Ese tratamiento lo hace Google como responsable, con sus propias políticas.',
        list: [
          'Banner en las pantallas de biblioteca, estantería, estadísticas y objetivos',
          'Un intersticial al cerrar un libro, y solo si ha habido lectura de verdad',
          'Anuncios con recompensa, siempre voluntarios, para desbloquear temas de balda durante 24 horas'
        ],
        callout: 'Dentro del lector no hay publicidad. Ni banner ni corte a mitad de página. Y durante los primeros días de uso no se muestra ningún anuncio.',
        warn: 'Puedes limitar el seguimiento publicitario o borrar tu identificador desde Ajustes de Android → Google → Anuncios. Al restablecerlo, los anuncios dejan de asociarse al identificador anterior.',
        links: [
          { label: 'Política de privacidad de Google', href: 'https://policies.google.com/privacy' },
          { label: 'Cómo usa Google los datos de AdMob', href: 'https://support.google.com/admob/answer/6128543' },
          { label: 'Configuración de anuncios de Google', href: 'https://adssettings.google.com' }
        ]
      },
      {
        id: 'diagnostics', num: '05', kicker: 'Diagnóstico', title: 'Firebase Crashlytics y Analytics',
        body: 'Cuando la app falla, Crashlytics envía un informe para poder arreglarlo. Ese informe incluye la traza del error, el modelo del dispositivo, la versión de Android y de la app, y un identificador de instalación que no te identifica como persona. Analytics registra eventos básicos de uso —aperturas de la app y pantallas vistas— de forma agregada.',
        callout: 'Ni Crashlytics ni Analytics reciben el contenido de tus libros, tus subrayados, tus notas, tu progreso ni qué estás leyendo. No existe ningún evento que envíe esa información.',
        warn: 'Hay un interruptor en Ajustes → Diagnóstico. Está activado de fábrica y, si lo apagas, la app aplica tu decisión en cada arranque antes de que se pueda enviar nada. Apagarlo no afecta a ninguna función de lectura.',
        links: [
          { label: 'Privacidad y seguridad en Firebase', href: 'https://firebase.google.com/support/privacy' },
          { label: 'Datos que recoge Crashlytics', href: 'https://firebase.google.com/support/privacy#crashlytics' }
        ]
      },
      {
        id: 'nocollect', num: '06', kicker: 'Lo que no recogemos', title: 'Datos que la app no pide ni envía',
        body: 'BookVault no recopila, almacena ni transmite ninguno de los siguientes datos:',
        nope: [
          'Tu nombre o identidad',
          'Tu correo electrónico',
          'Tu número de teléfono',
          'Ubicación precisa o GPS',
          'El contenido de tus libros',
          'Tus subrayados y notas',
          'Qué libro estás leyendo',
          'Contactos o agenda',
          'Fotos, micrófono o cámara',
          'Datos biométricos',
          'Historial de navegación',
          'Cuentas de otras aplicaciones'
        ]
      },
      {
        id: 'perms', num: '07', kicker: 'Permisos', title: 'Los permisos que declara la app',
        body: 'Estos son todos los permisos del manifiesto, sin excepción, y para qué sirve cada uno:',
        perms: [
          { icon: 'globe',  name: 'INTERNET',              desc: 'Descargar los anuncios y enviar los informes de fallo. Ninguna función de lectura lo necesita.' },
          { icon: 'wifi',   name: 'ACCESS_NETWORK_STATE',  desc: 'Saber si hay conexión antes de pedir un anuncio, para no gastar batería intentándolo sin red.' },
          { icon: 'bell',   name: 'POST_NOTIFICATIONS',    desc: 'Mostrar avisos locales, como el recordatorio de un objetivo cumplido. Puedes denegarlo y la app funciona igual.' }
        ],
        callout: 'BookVault no pide permiso de acceso al almacenamiento. Los libros entran por el selector del sistema —eliges un fichero o concedes una carpeta— y la app solo ve lo que tú le has dado.',
        outro: 'Esto no es un tecnicismo: significa que la app no puede recorrer tu galería, tus documentos ni tus descargas aunque quisiera.'
      },
      {
        id: 'payments', num: '08', kicker: 'Pagos', title: 'Compras y recompensas',
        body: 'Hoy la app es gratuita y no procesa ningún pago. Los temas de balda de pago se desbloquean viendo un anuncio con recompensa, algo voluntario que tú decides iniciar y que dura 24 horas.',
        outro: 'Si en el futuro se ofrece la compra «sin anuncios», la gestionará Google Play Billing de principio a fin: los datos de pago los trata Google y BookVault no llega a verlos ni a guardarlos. Lo único que se guardaría en el teléfono es un indicador cifrado de que la compra existe.'
      },
      {
        id: 'children', num: '09', kicker: 'Menores', title: 'Menores de edad',
        body: 'BookVault no está dirigida a menores de 13 años y no recopila conscientemente información de menores. Si eres madre, padre o tutor y crees que un menor a tu cargo ha facilitado datos personales a través de la app, escríbenos y lo resolveremos de inmediato.'
      },
      {
        id: 'rights', num: '10', kicker: 'Tus derechos', title: 'Control sobre tus datos',
        body: 'Como no tenemos servidor ni cuenta, no conservamos ningún dato tuyo del que puedas pedirnos copia o supresión: el control es directo y está en tus manos.',
        list: [
          'Borrar un libro, una anotación o toda la biblioteca desde la propia app',
          'Exportar tus anotaciones cuando quieras, en un fichero que se queda en tu dispositivo',
          'Apagar los diagnósticos en Ajustes → Diagnóstico',
          'Restablecer o borrar tu identificador de publicidad desde los ajustes de Android',
          'Desinstalar la app, lo que elimina la base de datos y las preferencias por completo'
        ],
        outro: 'Sobre los datos que tratan Google AdMob y Firebase como responsables, puedes ejercer tus derechos a través de los controles de tu cuenta de Google enlazados más arriba. Si tienes dudas, escríbenos y te ayudamos.'
      },
      {
        id: 'retention', num: '11', kicker: 'Retención', title: 'Cuánto duran los datos',
        body: 'Los datos locales duran lo que tú quieras: siguen en el dispositivo hasta que los borras o desinstalas la app. Nosotros no tenemos copia de nada, así que no hay nada que conservar de nuestro lado.',
        outro: 'Los datos que recogen AdMob, Crashlytics y Analytics los conserva Google según sus propias políticas de retención —los informes de fallo unos 90 días y los datos de Analytics hasta 14 meses, por defecto—, no nosotros.'
      },
      {
        id: 'security', num: '12', kicker: 'Seguridad', title: 'Cómo se protege lo que hay en el teléfono',
        body: 'La biblioteca y las preferencias viven en el almacenamiento privado de la app, al que el sistema Android impide acceder a otras aplicaciones. El estado de compra se guarda cifrado con AES-256-GCM mediante el almacén de claves del propio dispositivo.',
        outro: 'La app no abre ninguna conexión entrante ni expone tus datos en red. Dicho esto, ningún sistema es infalible: mantén el dispositivo actualizado y con bloqueo de pantalla.'
      },
      {
        id: 'changes', num: '13', kicker: 'Cambios', title: 'Cambios en esta política',
        body: 'Si la app cambia lo que hace con los datos —un SDK nuevo, la compra sin anuncios activa, otro producto de Firebase—, esta página se actualiza a la vez que la ficha de Google Play, y la fecha de arriba lo refleja. Vigente desde el 12 de septiembre de 2026.',
        outro: 'Al seguir usando la aplicación después de una actualización de esta política, aceptas la versión vigente.'
      },
      {
        id: 'contact', num: '14', kicker: 'Contacto', title: 'Escríbenos',
        body: 'Cualquier duda sobre esta política, sobre qué hace la app con tus datos o sobre cómo ejercer tus derechos, a esta dirección:',
        email: 'danibarea@gmail.com'
      }
    ],

    footer: {
      tagline: 'Tus libros y tu lectura no salen del móvil.',
      copy: '© 2026 BookVault · Daniel Barea',
      links: ['Inicio', 'Contacto', 'Google Play']
    }
  },

  en: {
    dir: 'ltr', name: 'English', flag: '🇬🇧',

    nav: { home: 'Home', policy: 'Privacy', back: '← Back to the app' },

    hero: {
      eyebrow: 'Privacy policy',
      title: 'Your books. Your reading. Your device.',
      sub: 'Your library, your progress, your highlights and your stats stay on the phone and are never sent anywhere. The only things that leave are the ads and — unless you turn it off — the crash reports.',
      meta: 'Last updated: 12 September 2026',
      author: 'BookVault · by Daniel Barea',
      tldr: 'No account · no server of our own · your books are never uploaded · AdMob for ads and Firebase for crashes, with an off switch.'
    },

    toc: 'Contents',

    sections: [
      {
        id: 'principle', num: '01', kicker: 'The principle', title: 'What "never leaves the phone" means',
        body: 'BookVault is a book reader that runs entirely on your device. There is no user account, no sign-up, and no server of ours for the app to talk to. The books you import, where you are in them, what you highlight and the stats your reading produces are stored in the phone database and travel nowhere.',
        callout: 'That sentence is literal: the contents of your books and your reading data are never transmitted. What does leave the device is advertising and diagnostics, and this policy gives each one its own section.'
      },
      {
        id: 'ondevice', num: '02', kicker: 'On your device', title: 'What is stored, and where it stays',
        body: 'All of this lives in the app private storage — database and preferences — reachable only from your device:',
        list: [
          'Your library: title, author, format, cover and the path of the file you picked',
          'Reading progress for every book, page by page',
          'Your reading sessions, which are where the stats and predictions come from',
          'Highlights, notes and bookmarks, with their colour and position in the text',
          'Collections, bookcase shelves and reading goals',
          'Reader preferences: typeface, size, line height, margins and theme'
        ],
        callout: 'Nothing on this list is sent to any server, ours — which does not exist — or anyone else. All of it is deleted when you uninstall the app.',
        outro: 'Your book files stay exactly where you had them: the app reads them from the location you granted, without making cloud copies.'
      },
      {
        id: 'offdevice', num: '03', kicker: 'What does leave', title: 'The only two services that receive data',
        body: 'BookVault uses two Google SDKs that run inside the app and talk to Google servers, not to ours:',
        list: [
          'Google AdMob, to show the ads that keep the app free',
          'Firebase Crashlytics and Firebase Analytics, to know the app broke and on which screen'
        ],
        outro: 'There is nothing else. No Firestore, no Storage, no Auth, no messaging: nothing that could sync your content. The next two sections spell out what each one collects.'
      },
      {
        id: 'ads', num: '04', kicker: 'Advertising', title: 'Google AdMob',
        body: 'The app is free and pays for itself with ads, served by Google AdMob. AdMob may collect the device advertising identifier, technical data (model, Android version, language), the IP address — from which an approximate, never precise, location is inferred — and your interactions with ads. Google carries out that processing as a controller, under its own policies.',
        list: [
          'A banner on the library, bookcase, stats and goals screens',
          'One interstitial when you close a book, and only if you actually read',
          'Rewarded ads, always opt-in, to unlock shelf themes for 24 hours'
        ],
        callout: 'There is no advertising inside the reader. No banner, no interruption mid-page. And during the first days of use no ads are shown at all.',
        warn: 'You can limit ad tracking or delete your identifier from Android Settings → Google → Ads. Resetting it stops ads from being tied to the previous identifier.',
        links: [
          { label: 'Google Privacy Policy', href: 'https://policies.google.com/privacy' },
          { label: 'How Google uses AdMob data', href: 'https://support.google.com/admob/answer/6128543' },
          { label: 'Google Ads Settings', href: 'https://adssettings.google.com' }
        ]
      },
      {
        id: 'diagnostics', num: '05', kicker: 'Diagnostics', title: 'Firebase Crashlytics and Analytics',
        body: 'When the app crashes, Crashlytics sends a report so it can be fixed. That report includes the stack trace, the device model, the Android and app versions, and an installation identifier that does not identify you as a person. Analytics records basic usage events — app opens and screens viewed — in aggregate.',
        callout: 'Neither Crashlytics nor Analytics receives the contents of your books, your highlights, your notes, your progress or what you are reading. No event exists that would send any of that.',
        warn: 'There is a switch in Settings → Diagnostics. It ships enabled, and if you turn it off the app applies your decision on every launch before anything can be sent. Turning it off affects no reading feature.',
        links: [
          { label: 'Privacy and security in Firebase', href: 'https://firebase.google.com/support/privacy' },
          { label: 'Data Crashlytics collects', href: 'https://firebase.google.com/support/privacy#crashlytics' }
        ]
      },
      {
        id: 'nocollect', num: '06', kicker: 'What we never collect', title: 'Data the app neither asks for nor sends',
        body: 'BookVault does not collect, store or transmit any of the following:',
        nope: [
          'Your name or identity',
          'Your email address',
          'Your phone number',
          'Precise or GPS location',
          'The contents of your books',
          'Your highlights and notes',
          'Which book you are reading',
          'Contacts or address book',
          'Photos, microphone or camera',
          'Biometric data',
          'Browsing history',
          'Accounts from other apps'
        ]
      },
      {
        id: 'perms', num: '07', kicker: 'Permissions', title: 'Every permission the app declares',
        body: 'These are all the permissions in the manifest, without exception, and what each is for:',
        perms: [
          { icon: 'globe',  name: 'INTERNET',              desc: 'Fetch ads and send crash reports. No reading feature needs it.' },
          { icon: 'wifi',   name: 'ACCESS_NETWORK_STATE',  desc: 'Check whether there is a connection before requesting an ad, so battery is not spent trying without a network.' },
          { icon: 'bell',   name: 'POST_NOTIFICATIONS',    desc: 'Show local notices, such as a completed reading goal. You can deny it and the app works the same.' }
        ],
        callout: 'BookVault does not request storage access permission. Books come in through the system picker — you pick a file or grant a folder — and the app only ever sees what you hand it.',
        outro: 'That is not a technicality: it means the app could not walk through your gallery, your documents or your downloads even if it wanted to.'
      },
      {
        id: 'payments', num: '08', kicker: 'Payments', title: 'Purchases and rewards',
        body: 'Today the app is free and processes no payments. Paid shelf themes are unlocked by watching a rewarded ad — voluntary, started by you, and lasting 24 hours.',
        outro: 'If an ad-free purchase is offered in the future, Google Play Billing will handle it end to end: payment details are processed by Google and BookVault never sees or stores them. The only thing kept on the phone would be an encrypted flag saying the purchase exists.'
      },
      {
        id: 'children', num: '09', kicker: 'Children', title: 'Children',
        body: 'BookVault is not directed at children under 13 and does not knowingly collect information from children. If you are a parent or guardian and believe a child in your care has provided personal data through the app, write to us and we will resolve it immediately.'
      },
      {
        id: 'rights', num: '10', kicker: 'Your rights', title: 'Control over your data',
        body: 'Since there is no server and no account, we hold no data of yours to give you a copy of or erase: control is direct and it is in your hands.',
        list: [
          'Delete a book, a highlight or the whole library from inside the app',
          'Export your highlights whenever you want, to a file that stays on your device',
          'Turn diagnostics off in Settings → Diagnostics',
          'Reset or delete your advertising identifier from Android settings',
          'Uninstall the app, which removes the database and preferences completely'
        ],
        outro: 'For the data processed by Google AdMob and Firebase as controllers, you can exercise your rights through the Google account controls linked above. If you are unsure, write to us and we will help.'
      },
      {
        id: 'retention', num: '11', kicker: 'Retention', title: 'How long data lasts',
        body: 'Local data lasts as long as you want it to: it stays on the device until you delete it or uninstall the app. We hold no copy of anything, so there is nothing to retain on our side.',
        outro: 'Data collected by AdMob, Crashlytics and Analytics is retained by Google under its own retention policies — crash reports for around 90 days and Analytics data for up to 14 months by default — not by us.'
      },
      {
        id: 'security', num: '12', kicker: 'Security', title: 'How what is on the phone is protected',
        body: 'The library and preferences live in the app private storage, which Android keeps out of reach of other applications. Purchase state is stored encrypted with AES-256-GCM using the device keystore.',
        outro: 'The app opens no incoming connections and exposes none of your data over the network. That said, no system is infallible: keep your device updated and locked.'
      },
      {
        id: 'changes', num: '13', kicker: 'Changes', title: 'Changes to this policy',
        body: 'If the app changes what it does with data — a new SDK, the ad-free purchase going live, another Firebase product — this page is updated at the same time as the Google Play listing, and the date above reflects it. Effective from 12 September 2026.',
        outro: 'By continuing to use the app after this policy is updated, you accept the version then in force.'
      },
      {
        id: 'contact', num: '14', kicker: 'Contact', title: 'Write to us',
        body: 'Any question about this policy, about what the app does with your data, or about exercising your rights, to this address:',
        email: 'danibarea@gmail.com'
      }
    ],

    footer: {
      tagline: 'Your books and your reading never leave the phone.',
      copy: '© 2026 BookVault · Daniel Barea',
      links: ['Home', 'Contact', 'Google Play']
    }
  }
};
