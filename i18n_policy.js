/* Política de privacidad de Balda — los seis idiomas de la app: español, inglés,
   francés, alemán, italiano y portugués de Brasil.

   Regla de este fichero: describe lo que la app hace HOY, no lo que podría
   hacer. Si se añade un SDK, se activa la compra sin anuncios, se suma un
   producto de Firebase o cambian los permisos del manifiesto, hay que tocar aquí
   (en los seis idiomas), la ficha de «Seguridad de los datos» de Play y los
   textos del onboarding, los tres a la vez.

   La lista de permisos es la del manifiesto FUSIONADO (el de la app más los que
   añaden las librerías de Google): app/build/intermediates/merged_manifest/.
   Los nombres de menú (Ajustes → Diagnóstico…) son los de cada strings.xml. */
window.BV_POLICY = {

  es: {
    dir: 'ltr', name: 'Español', flag: '🇪🇸', short: 'ES', htmlLang: 'es',

    nav: { home: 'Inicio', policy: 'Privacidad', back: '← Volver a la app' },

    hero: {
      eyebrow: 'Política de privacidad',
      title: 'Tus libros. Tu lectura. Tu dispositivo.',
      sub: 'Tu biblioteca, tu progreso, tus anotaciones y tus estadísticas se quedan en el teléfono y nunca se envían. Lo único que sale son los anuncios, los informes de fallo —si no los apagas— y lo que tú decidas enviar.',
      meta: 'Última actualización: 24 de septiembre de 2026',
      author: 'Balda · por Daniel Barea',
      tldr: 'Sin cuenta · sin servidor propio · tus libros no se suben nunca · AdMob para los anuncios y Firebase para los fallos, con interruptor · la copia de seguridad y lo que compartes van adonde tú digas.'
    },

    toc: 'Índice',

    sections: [
      {
        id: 'principle', num: '01', kicker: 'El principio', title: 'Lo que significa «no sale del móvil»',
        body: 'Balda es un lector de libros que funciona entero en tu dispositivo. No hay cuenta de usuario, no hay registro y no existe ningún servidor nuestro al que la app se conecte. Los libros que importas, por dónde vas, lo que subrayas y las estadísticas que genera tu lectura se guardan en la base de datos del propio teléfono y no viajan a ninguna parte.',
        callout: 'La frase es literal: el contenido de tus libros y tus datos de lectura nunca se transmiten a ningún servidor nuestro ni de terceros por iniciativa de la app. Lo que sí sale del dispositivo son los anuncios, los diagnósticos y lo que tú decides enviar, y esta política dedica una sección a cada cosa.'
      },
      {
        id: 'ondevice', num: '02', kicker: 'En tu dispositivo', title: 'Qué se guarda, y dónde se queda',
        body: 'Todo esto vive en el almacenamiento privado de la app —base de datos, preferencias y ficheros— y solo es accesible desde tu dispositivo:',
        list: [
          'Tu biblioteca: título, autor, formato, portada y una copia de cada libro que importas',
          'El progreso de lectura de cada libro, página a página',
          'Tus sesiones de lectura, que son de donde salen las estadísticas, las rachas y las predicciones',
          'Subrayados, notas y marcadores, con su color y su posición en el texto',
          'Colecciones, baldas de la estantería y objetivos de lectura',
          'Preferencias: tipografía, tamaño, interlineado, márgenes, tema, velocidad de la voz alta y, si lo activas, la hora del recordatorio',
          'Mientras escuchas un libro, el audio de las próximas frases, en una carpeta temporal que se vacía a medida que suenan'
        ],
        callout: 'Nada de esta lista se envía a ningún servidor, ni al nuestro —que no existe— ni al de nadie. Se borra entero al desinstalar la app.',
        outro: 'Al importar un libro, la app guarda una copia en su almacenamiento privado para que siga abriéndose aunque muevas o borres el original. Esa copia tampoco sale del teléfono y se elimina al borrar el libro de la biblioteca.'
      },
      {
        id: 'offdevice', num: '03', kicker: 'Lo que sí sale', title: 'Los dos únicos servicios que reciben datos',
        body: 'Balda usa dos SDK de Google que se ejecutan dentro de la app y hablan con los servidores de Google, no con los nuestros:',
        list: [
          'Google AdMob, para mostrar los anuncios que mantienen la app gratuita',
          'Firebase Crashlytics y Firebase Analytics, para saber que la app se ha roto y en qué pantalla'
        ],
        outro: 'No hay ningún otro. No usamos Firestore, ni Storage, ni Auth, ni mensajería: nada que pudiera sincronizar tu contenido. Aparte de estos dos servicios, solo sale lo que tú envías, que se explica en la sección siguiente.'
      },
      {
        id: 'yours', num: '04', kicker: 'Lo que envías tú', title: 'Lo que sale solo si lo decides tú',
        body: 'Algunas funciones sacan datos de Balda, siempre porque tú lo pides y hacia donde tú eliges:',
        list: [
          'Copia de seguridad: un fichero .zip con tu biblioteca —y, si lo eliges, los propios libros— que guardas donde quieras con el selector de Android. Si eliges una carpeta de Google Drive u otra nube, la copia queda en ese servicio, bajo su política; Balda no la sube a ningún sitio',
          'Compartir: las tarjetas de racha, meta, lecturas del mes o del año, las citas y las anotaciones exportadas salen por la hoja de compartir de Android, hacia la app que elijas y solo cuando pulsas «Compartir». Las tarjetas que muestran qué lees tienen un interruptor para ocultar títulos y portadas',
          'Abrir con: cuando abres un libro desde otra app (WhatsApp, el correo, el gestor de archivos), Balda recibe ese fichero y guarda una copia en el teléfono. No envía nada de vuelta',
          'Diccionario y traducción: al seleccionar texto, el menú de Android ofrece las apps que tengas instaladas. El texto seleccionado llega solo a la que tú pulses',
          'Reseña: alguna vez, al cerrar un libro, puede aparecer el cuadro de valoración de Google Play. Lo muestra y lo gestiona Google Play; si escribes una reseña, la publica Google con tu cuenta de Play'
        ],
        warn: 'Lectura en voz alta: para leerte un libro, Balda le pasa el texto de cada frase al motor de voz de Android que tengas instalado —Servicios de voz de Google, el de Samsung u otro— y reproduce el audio que devuelve. Con la voz descargada en el teléfono, todo ocurre en el dispositivo. Si tu motor usa voces en línea, ese texto lo procesa su proveedor según su propia política; puedes descargar la voz o cambiar de motor en los ajustes de Android → Texto a voz. Balda no envía el texto a ningún servidor.'
      },
      {
        id: 'ads', num: '05', kicker: 'Publicidad', title: 'Google AdMob',
        body: 'La app es gratuita y se sostiene con anuncios. Los sirve Google AdMob, que puede recoger el identificador de publicidad del dispositivo, datos técnicos (modelo, versión de Android, idioma), la dirección IP —de la que se deduce una ubicación aproximada, nunca precisa— y tus interacciones con los anuncios. Ese tratamiento lo hace Google como responsable, con sus propias políticas.',
        body2: 'Antes de pedir el primer anuncio, la app te enseña un formulario de consentimiento. Lo gestiona la plataforma de mensajes de usuario de Google, la CMP certificada que exige AdMob, y aparece a quien se encuentra en el Espacio Económico Europeo, el Reino Unido o Suiza. Ahí decides si aceptas los anuncios personalizados o prefieres anuncios no personalizados. Hasta que respondas, la app no inicializa el SDK de anuncios ni hace una sola petición: no verás publicidad sin que se te haya preguntado antes.',
        list: [
          'Banner en las pantallas de biblioteca, estantería, estadísticas y objetivos',
          'Un intersticial al cerrar un libro, y solo si ha habido lectura de verdad',
          'Anuncios con recompensa, siempre voluntarios, para desbloquear temas de balda durante 24 horas'
        ],
        callout: 'Dentro del lector no hay publicidad. Ni banner ni corte a mitad de página. Y durante los primeros días de uso no salta ningún anuncio a pantalla completa —solo verás el vídeo que tú pidas para desbloquear un tema—; los banners de las pantallas de navegación sí aparecen desde el principio.',
        warn: 'Puedes cambiar de opinión cuando quieras: en Ajustes → Publicidad → Opciones de privacidad de los anuncios se reabre el mismo formulario, y lo que elijas allí sustituye a tu respuesta anterior. Esa entrada solo aparece donde el formulario es obligatorio, así que si no la ves es que en tu región no se te llegó a pedir consentimiento. Aparte de eso, desde Ajustes de Android → Google → Anuncios puedes limitar el seguimiento publicitario o borrar tu identificador; al restablecerlo, los anuncios dejan de asociarse al anterior.',
        links: [
          { label: 'Política de privacidad de Google', href: 'https://policies.google.com/privacy' },
          { label: 'Cómo usa Google los datos de AdMob', href: 'https://support.google.com/admob/answer/6128543' },
          { label: 'Configuración de anuncios de Google', href: 'https://adssettings.google.com' }
        ]
      },
      {
        id: 'diagnostics', num: '06', kicker: 'Diagnóstico', title: 'Firebase Crashlytics y Analytics',
        body: 'Cuando la app falla, Crashlytics envía un informe para poder arreglarlo. Ese informe incluye la traza del error, el modelo del dispositivo, la versión de Android y de la app, y un identificador de instalación que no te identifica como persona. En los fallos que la app captura por su cuenta —al importar o abrir un libro—, las rutas de fichero se borran del informe antes de enviarlo, porque el nombre de un fichero suele ser el título de un libro. Analytics registra, de forma agregada, aperturas de la app, pantallas vistas y qué funciones se usan —por ejemplo, que se compartió una tarjeta, que se abrió un libro desde otra app o que se activó el recordatorio—.',
        callout: 'Ni Crashlytics ni Analytics reciben el contenido de tus libros, sus títulos, tus subrayados, tus notas, tu progreso ni qué estás leyendo. De un libro abierto desde otra app solo se registra el formato (EPUB, PDF…); de lo que compartes, solo el tipo de tarjeta.',
        warn: 'Hay un interruptor en Ajustes → Diagnóstico. Está activado de fábrica y, si lo apagas, la app aplica tu decisión en cada arranque antes de que se pueda enviar nada. Apagarlo no afecta a ninguna función de lectura.',
        links: [
          { label: 'Privacidad y seguridad en Firebase', href: 'https://firebase.google.com/support/privacy' },
          { label: 'Datos que recoge Crashlytics', href: 'https://firebase.google.com/support/privacy#crashlytics' }
        ]
      },
      {
        id: 'nocollect', num: '07', kicker: 'Lo que no recogemos', title: 'Datos que la app no pide ni envía',
        body: 'Balda no recopila, almacena ni transmite ninguno de los siguientes datos:',
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
        id: 'perms', num: '08', kicker: 'Permisos', title: 'Los permisos que declara la app',
        body: 'Estos son todos los permisos que acaba declarando la app —los suyos y los que añaden las librerías de Google que usa—, y para qué sirve cada uno:',
        perms: [
          { icon: 'globe', name: 'INTERNET',             desc: 'Descargar los anuncios y enviar los informes de fallo. Ninguna función de lectura lo necesita.' },
          { icon: 'wifi',  name: 'ACCESS_NETWORK_STATE', desc: 'Saber si hay conexión antes de pedir un anuncio, para no gastar batería intentándolo sin red.' },
          { icon: 'bell',  name: 'POST_NOTIFICATIONS',   desc: 'El recordatorio de lectura, si lo activas. Se pide al activarlo, nunca al abrir la app; puedes denegarlo y la app funciona igual.' },
          { icon: 'play',  name: 'FOREGROUND_SERVICE · MEDIA_PLAYBACK', desc: 'Seguir leyendo en voz alta con la pantalla apagada, con los mandos en la notificación. Solo mientras escuchas un libro.' },
          { icon: 'moon',  name: 'WAKE_LOCK',            desc: 'Que el teléfono no se duerma entre frase y frase mientras escuchas un libro, y que terminen las tareas programadas (widgets y recordatorio).' },
          { icon: 'ad',    name: 'AD_ID · ACCESS_ADSERVICES_*', desc: 'Los añade el SDK de AdMob: leer el identificador de publicidad y usar las API de publicidad de Android. Puedes borrar o limitar el identificador en los ajustes de Android.' },
          { icon: 'cart',  name: 'BILLING',              desc: 'Lo añade la librería de pagos de Google Play. Hoy no se usa: la compra sin anuncios no está activa.' },
          { icon: 'link',  name: 'BIND_GET_INSTALL_REFERRER_SERVICE', desc: 'Lo añade Firebase Analytics para saber si la app se instaló desde Google Play. No recibe nada de tu biblioteca.' }
        ],
        callout: 'Balda no pide permiso de acceso al almacenamiento. Los libros entran por el selector del sistema —eliges un fichero o concedes una carpeta— o porque los abres con Balda desde otra app, y la app solo ve lo que tú le has dado.',
        outro: 'Esto no es un tecnicismo: significa que la app no puede recorrer tu galería, tus documentos ni tus descargas aunque quisiera. Queda además un permiso interno de AndroidX (DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION) que no da acceso a nada: impide que otras apps envíen avisos a Balda.'
      },
      {
        id: 'payments', num: '09', kicker: 'Pagos', title: 'Compras y recompensas',
        body: 'Hoy la app es gratuita y no procesa ningún pago. Los temas de balda de pago se desbloquean viendo un anuncio con recompensa, algo voluntario que tú decides iniciar y que dura 24 horas.',
        outro: 'Si en el futuro se ofrece la compra «sin anuncios», la gestionará Google Play Billing de principio a fin: los datos de pago los trata Google y Balda no llega a verlos ni a guardarlos. Lo único que se guardaría en el teléfono es un indicador cifrado de que la compra existe.'
      },
      {
        id: 'children', num: '10', kicker: 'Menores', title: 'Menores de edad',
        body: 'Balda no está dirigida a menores de 13 años y no recopila conscientemente información de menores. Si eres madre, padre o tutor y crees que un menor a tu cargo ha facilitado datos personales a través de la app, escríbenos y lo resolveremos de inmediato.'
      },
      {
        id: 'rights', num: '11', kicker: 'Tus derechos', title: 'Control sobre tus datos',
        body: 'Como no tenemos servidor ni cuenta, no conservamos ningún dato tuyo del que puedas pedirnos copia o supresión: el control es directo y está en tus manos.',
        list: [
          'Borrar un libro, una anotación o toda la biblioteca desde la propia app',
          'Exportar tus anotaciones cuando quieras, en un fichero que se queda en tu dispositivo',
          'Guardar una copia de seguridad de toda tu biblioteca en un fichero y restaurarla en otro móvil',
          'Apagar los diagnósticos en Ajustes → Diagnóstico',
          'Restablecer o borrar tu identificador de publicidad desde los ajustes de Android',
          'Desinstalar la app, lo que elimina la base de datos, las preferencias y las copias de los libros por completo'
        ],
        outro: 'Sobre los datos que tratan Google AdMob y Firebase como responsables, puedes ejercer tus derechos a través de los controles de tu cuenta de Google enlazados más arriba. Si tienes dudas, escríbenos y te ayudamos.'
      },
      {
        id: 'retention', num: '12', kicker: 'Retención', title: 'Cuánto duran los datos',
        body: 'Los datos locales duran lo que tú quieras: siguen en el dispositivo hasta que los borras o desinstalas la app. El audio de la lectura en voz alta se borra nada más sonar, y todo el que quede, al parar. Nosotros no tenemos copia de nada, así que no hay nada que conservar de nuestro lado.',
        outro: 'Los datos que recogen AdMob, Crashlytics y Analytics los conserva Google según sus propias políticas de retención —los informes de fallo unos 90 días y los datos de Analytics hasta 14 meses, por defecto—, no nosotros.'
      },
      {
        id: 'security', num: '13', kicker: 'Seguridad', title: 'Cómo se protege lo que hay en el teléfono',
        body: 'La biblioteca y las preferencias viven en el almacenamiento privado de la app, al que el sistema Android impide acceder a otras aplicaciones. El estado de compra se guarda cifrado con AES-256-GCM mediante el almacén de claves del propio dispositivo.',
        warn: 'La copia de seguridad es un fichero .zip sin cifrar: quien lo tenga puede ver tu biblioteca y tus anotaciones, así que guárdalo en un sitio de tu confianza. No incluye el estado de compra, que depende de las claves de este teléfono.',
        outro: 'La app no abre ninguna conexión entrante ni expone tus datos en red. Dicho esto, ningún sistema es infalible: mantén el dispositivo actualizado y con bloqueo de pantalla.'
      },
      {
        id: 'changes', num: '14', kicker: 'Cambios', title: 'Cambios en esta política',
        body: 'Si la app cambia lo que hace con los datos —un SDK nuevo, la compra sin anuncios activa, otro producto de Firebase, un permiso nuevo—, esta página se actualiza a la vez que la ficha de Google Play, y la fecha de arriba lo refleja. Vigente desde el 24 de septiembre de 2026.',
        outro: 'Al seguir usando la aplicación después de una actualización de esta política, aceptas la versión vigente.'
      },
      {
        id: 'contact', num: '15', kicker: 'Contacto', title: 'Escríbenos',
        body: 'Cualquier duda sobre esta política, sobre qué hace la app con tus datos o sobre cómo ejercer tus derechos, a esta dirección:',
        email: 'danibarea@gmail.com'
      }
    ],

    footer: {
      tagline: 'Tus libros y tu lectura no salen del móvil.',
      copy: '© 2026 Balda · Daniel Barea',
      links: ['Inicio', 'Contacto', 'Google Play']
    }
  },

  en: {
    dir: 'ltr', name: 'English', flag: '🇬🇧', short: 'EN', htmlLang: 'en',

    nav: { home: 'Home', policy: 'Privacy', back: '← Back to the app' },

    hero: {
      eyebrow: 'Privacy policy',
      title: 'Your books. Your reading. Your device.',
      sub: 'Your library, your progress, your highlights and your stats stay on the phone and are never sent anywhere. The only things that leave are the ads, the crash reports — unless you turn them off — and whatever you choose to send.',
      meta: 'Last updated: 24 September 2026',
      author: 'Balda · by Daniel Barea',
      tldr: 'No account · no server of our own · your books are never uploaded · AdMob for ads and Firebase for crashes, with an off switch · backups and what you share go wherever you say.'
    },

    toc: 'Contents',

    sections: [
      {
        id: 'principle', num: '01', kicker: 'The principle', title: 'What "never leaves the phone" means',
        body: 'Balda is a book reader that runs entirely on your device. There is no user account, no sign-up, and no server of ours for the app to talk to. The books you import, where you are in them, what you highlight and the stats your reading produces are stored in the phone database and travel nowhere.',
        callout: 'That sentence is literal: the app never transmits the contents of your books or your reading data to any server, ours or anyone else’s, on its own initiative. What does leave the device is advertising, diagnostics and whatever you decide to send, and this policy gives each one its own section.'
      },
      {
        id: 'ondevice', num: '02', kicker: 'On your device', title: 'What is stored, and where it stays',
        body: 'All of this lives in the app private storage — database, preferences and files — reachable only from your device:',
        list: [
          'Your library: title, author, format, cover and a copy of every book you import',
          'Reading progress for every book, page by page',
          'Your reading sessions, which are where the stats, streaks and predictions come from',
          'Highlights, notes and bookmarks, with their colour and position in the text',
          'Collections, bookcase shelves and reading goals',
          'Preferences: typeface, size, line height, margins, theme, read-aloud speed and, if you turn it on, the reminder time',
          'While you listen to a book, the audio for the next sentences, in a temporary folder that empties as they play'
        ],
        callout: 'Nothing on this list is sent to any server, ours — which does not exist — or anyone else. All of it is deleted when you uninstall the app.',
        outro: 'When you import a book, the app keeps a copy in its private storage so it still opens if you move or delete the original. That copy never leaves the phone either, and it is removed when you delete the book from your library.'
      },
      {
        id: 'offdevice', num: '03', kicker: 'What does leave', title: 'The only two services that receive data',
        body: 'Balda uses two Google SDKs that run inside the app and talk to Google servers, not to ours:',
        list: [
          'Google AdMob, to show the ads that keep the app free',
          'Firebase Crashlytics and Firebase Analytics, to know the app broke and on which screen'
        ],
        outro: 'There is nothing else. No Firestore, no Storage, no Auth, no messaging: nothing that could sync your content. Apart from these two services, the only things that leave are the ones you send, explained in the next section.'
      },
      {
        id: 'yours', num: '04', kicker: 'What you send', title: 'What leaves only if you decide',
        body: 'Some features move data out of Balda, always because you ask and to wherever you choose:',
        list: [
          'Backup: a .zip file with your library — and, if you choose, the books themselves — that you save anywhere through the Android file picker. If you pick a Google Drive folder or another cloud, the backup lives in that service, under its policy; Balda uploads it nowhere',
          'Sharing: streak, goal, month and year cards, quotes and exported highlights go out through the Android share sheet, to the app you pick, and only when you tap "Share". The cards that show what you read have a switch to hide titles and covers',
          'Open with: when you open a book from another app (WhatsApp, email, the file manager), Balda receives that file and keeps a copy on the phone. It sends nothing back',
          'Dictionary and translation: when you select text, the Android menu offers the apps you have installed. The selected text only reaches the one you tap',
          'Review: now and then, when you close a book, the Google Play rating dialog may appear. Google Play shows and handles it; if you write a review, Google publishes it with your Play account'
        ],
        warn: 'Read-aloud: to read a book to you, Balda passes the text of each sentence to the Android text-to-speech engine you have installed — Google Speech Services, Samsung’s or another — and plays back the audio it returns. With the voice downloaded to the phone, all of it happens on the device. If your engine uses online voices, that text is processed by its provider under its own policy; you can download the voice or switch engines in Android settings → Text-to-speech. Balda sends the text to no server.'
      },
      {
        id: 'ads', num: '05', kicker: 'Advertising', title: 'Google AdMob',
        body: 'The app is free and pays for itself with ads, served by Google AdMob. AdMob may collect the device advertising identifier, technical data (model, Android version, language), the IP address — from which an approximate, never precise, location is inferred — and your interactions with ads. Google carries out that processing as a controller, under its own policies.',
        body2: 'Before the first ad is requested, the app shows you a consent form. It is handled by Google’s User Messaging Platform, the certified CMP that AdMob requires, and it appears to anyone in the European Economic Area, the United Kingdom or Switzerland. There you choose whether to accept personalised ads or to get non-personalised ones instead. Until you answer, the app initialises no ad SDK and makes no ad request at all: you will not be shown advertising without having been asked first.',
        list: [
          'A banner on the library, bookcase, stats and goals screens',
          'One interstitial when you close a book, and only if you actually read',
          'Rewarded ads, always opt-in, to unlock shelf themes for 24 hours'
        ],
        callout: 'There is no advertising inside the reader. No banner, no interruption mid-page. And during the first days of use no full-screen ad pops up at all — only the video you choose to watch to unlock a theme; the banners on the browsing screens do appear from the start.',
        warn: 'You can change your mind whenever you like: Settings → Ads → Ad privacy options reopens the same form, and whatever you choose there replaces your earlier answer. That entry only appears where the form is required, so if you cannot see it, consent was never asked for in your region. Separately, from Android Settings → Google → Ads you can limit ad tracking or delete your identifier; resetting it stops ads from being tied to the previous one.',
        links: [
          { label: 'Google Privacy Policy', href: 'https://policies.google.com/privacy' },
          { label: 'How Google uses AdMob data', href: 'https://support.google.com/admob/answer/6128543' },
          { label: 'Google Ads Settings', href: 'https://adssettings.google.com' }
        ]
      },
      {
        id: 'diagnostics', num: '06', kicker: 'Diagnostics', title: 'Firebase Crashlytics and Analytics',
        body: 'When the app crashes, Crashlytics sends a report so it can be fixed. That report includes the stack trace, the device model, the Android and app versions, and an installation identifier that does not identify you as a person. For the errors the app catches itself — when importing or opening a book — file paths are stripped from the report before it is sent, because a file name is usually a book title. Analytics records, in aggregate, app opens, screens viewed and which features get used — for example, that a card was shared, a book was opened from another app or the reminder was turned on.',
        callout: 'Neither Crashlytics nor Analytics receives the contents of your books, their titles, your highlights, your notes, your progress or what you are reading. For a book opened from another app only the format is recorded (EPUB, PDF…); for what you share, only the type of card.',
        warn: 'There is a switch in Settings → Diagnostics. It ships enabled, and if you turn it off the app applies your decision on every launch before anything can be sent. Turning it off affects no reading feature.',
        links: [
          { label: 'Privacy and security in Firebase', href: 'https://firebase.google.com/support/privacy' },
          { label: 'Data Crashlytics collects', href: 'https://firebase.google.com/support/privacy#crashlytics' }
        ]
      },
      {
        id: 'nocollect', num: '07', kicker: 'What we never collect', title: 'Data the app neither asks for nor sends',
        body: 'Balda does not collect, store or transmit any of the following:',
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
        id: 'perms', num: '08', kicker: 'Permissions', title: 'Every permission the app declares',
        body: 'These are all the permissions the app ends up declaring — its own and the ones added by the Google libraries it uses — and what each is for:',
        perms: [
          { icon: 'globe', name: 'INTERNET',             desc: 'Fetch ads and send crash reports. No reading feature needs it.' },
          { icon: 'wifi',  name: 'ACCESS_NETWORK_STATE', desc: 'Check whether there is a connection before requesting an ad, so battery is not spent trying without a network.' },
          { icon: 'bell',  name: 'POST_NOTIFICATIONS',   desc: 'The reading reminder, if you turn it on. It is requested when you turn it on, never when the app opens; you can deny it and the app works the same.' },
          { icon: 'play',  name: 'FOREGROUND_SERVICE · MEDIA_PLAYBACK', desc: 'Keep reading aloud with the screen off, with the controls in the notification. Only while you listen to a book.' },
          { icon: 'moon',  name: 'WAKE_LOCK',            desc: 'Keep the phone from sleeping between sentences while you listen to a book, and let scheduled tasks (widgets and reminder) finish.' },
          { icon: 'ad',    name: 'AD_ID · ACCESS_ADSERVICES_*', desc: 'Added by the AdMob SDK: read the advertising identifier and use Android’s advertising APIs. You can delete or limit the identifier in Android settings.' },
          { icon: 'cart',  name: 'BILLING',              desc: 'Added by the Google Play billing library. Unused today: the ad-free purchase is not live.' },
          { icon: 'link',  name: 'BIND_GET_INSTALL_REFERRER_SERVICE', desc: 'Added by Firebase Analytics to know whether the app was installed from Google Play. It receives nothing from your library.' }
        ],
        callout: 'Balda does not request storage access permission. Books come in through the system picker — you pick a file or grant a folder — or because you open them with Balda from another app, and the app only ever sees what you hand it.',
        outro: 'That is not a technicality: it means the app could not walk through your gallery, your documents or your downloads even if it wanted to. There is also an internal AndroidX permission (DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION) that grants access to nothing: it stops other apps from sending notices to Balda.'
      },
      {
        id: 'payments', num: '09', kicker: 'Payments', title: 'Purchases and rewards',
        body: 'Today the app is free and processes no payments. Paid shelf themes are unlocked by watching a rewarded ad — voluntary, started by you, and lasting 24 hours.',
        outro: 'If an ad-free purchase is offered in the future, Google Play Billing will handle it end to end: payment details are processed by Google and Balda never sees or stores them. The only thing kept on the phone would be an encrypted flag saying the purchase exists.'
      },
      {
        id: 'children', num: '10', kicker: 'Children', title: 'Children',
        body: 'Balda is not directed at children under 13 and does not knowingly collect information from children. If you are a parent or guardian and believe a child in your care has provided personal data through the app, write to us and we will resolve it immediately.'
      },
      {
        id: 'rights', num: '11', kicker: 'Your rights', title: 'Control over your data',
        body: 'Since there is no server and no account, we hold no data of yours to give you a copy of or erase: control is direct and it is in your hands.',
        list: [
          'Delete a book, a highlight or the whole library from inside the app',
          'Export your highlights whenever you want, to a file that stays on your device',
          'Save a backup of your whole library to a file and restore it on another phone',
          'Turn diagnostics off in Settings → Diagnostics',
          'Reset or delete your advertising identifier from Android settings',
          'Uninstall the app, which removes the database, preferences and book copies completely'
        ],
        outro: 'For the data processed by Google AdMob and Firebase as controllers, you can exercise your rights through the Google account controls linked above. If you are unsure, write to us and we will help.'
      },
      {
        id: 'retention', num: '12', kicker: 'Retention', title: 'How long data lasts',
        body: 'Local data lasts as long as you want it to: it stays on the device until you delete it or uninstall the app. Read-aloud audio is deleted as soon as it plays, and whatever is left when you stop. We hold no copy of anything, so there is nothing to retain on our side.',
        outro: 'Data collected by AdMob, Crashlytics and Analytics is retained by Google under its own retention policies — crash reports for around 90 days and Analytics data for up to 14 months by default — not by us.'
      },
      {
        id: 'security', num: '13', kicker: 'Security', title: 'How what is on the phone is protected',
        body: 'The library and preferences live in the app private storage, which Android keeps out of reach of other applications. Purchase state is stored encrypted with AES-256-GCM using the device keystore.',
        warn: 'The backup is an unencrypted .zip file: whoever has it can see your library and your highlights, so keep it somewhere you trust. It does not include the purchase state, which depends on this phone’s keys.',
        outro: 'The app opens no incoming connections and exposes none of your data over the network. That said, no system is infallible: keep your device updated and locked.'
      },
      {
        id: 'changes', num: '14', kicker: 'Changes', title: 'Changes to this policy',
        body: 'If the app changes what it does with data — a new SDK, the ad-free purchase going live, another Firebase product, a new permission — this page is updated at the same time as the Google Play listing, and the date above reflects it. Effective from 24 September 2026.',
        outro: 'By continuing to use the app after this policy is updated, you accept the version then in force.'
      },
      {
        id: 'contact', num: '15', kicker: 'Contact', title: 'Write to us',
        body: 'Any question about this policy, about what the app does with your data, or about exercising your rights, to this address:',
        email: 'danibarea@gmail.com'
      }
    ],

    footer: {
      tagline: 'Your books and your reading never leave the phone.',
      copy: '© 2026 Balda · Daniel Barea',
      links: ['Home', 'Contact', 'Google Play']
    }
  },

  fr: {
    dir: 'ltr', name: 'Français', flag: '🇫🇷', short: 'FR', htmlLang: 'fr',

    nav: { home: 'Accueil', policy: 'Confidentialité', back: '← Retour à l’appli' },

    hero: {
      eyebrow: 'Politique de confidentialité',
      title: 'Vos livres. Votre lecture. Votre appareil.',
      sub: 'Votre bibliothèque, votre progression, vos annotations et vos statistiques restent sur le téléphone et ne sont jamais envoyées. Ce qui sort : les publicités, les rapports de plantage — sauf si vous les désactivez — et ce que vous choisissez d’envoyer.',
      meta: 'Dernière mise à jour : 24 septembre 2026',
      author: 'Balda · par Daniel Barea',
      tldr: 'Sans compte · aucun serveur à nous · vos livres ne sont jamais envoyés · AdMob pour la publicité et Firebase pour les plantages, désactivable · la sauvegarde et ce que vous partagez vont où vous le décidez.'
    },

    toc: 'Sommaire',

    sections: [
      {
        id: 'principle', num: '01', kicker: 'Le principe', title: 'Ce que « ne quitte pas le téléphone » veut dire',
        body: 'Balda est une liseuse qui fonctionne entièrement sur votre appareil. Il n’y a ni compte utilisateur, ni inscription, ni serveur à nous auquel l’application se connecterait. Les livres que vous importez, l’endroit où vous en êtes, ce que vous surlignez et les statistiques de votre lecture sont enregistrés dans la base de données du téléphone et ne vont nulle part.',
        callout: 'La phrase est à prendre au pied de la lettre : l’application ne transmet jamais d’elle-même le contenu de vos livres ni vos données de lecture à un serveur, le nôtre ou celui de quelqu’un d’autre. Ce qui sort de l’appareil, ce sont la publicité, les diagnostics et ce que vous décidez d’envoyer, et chacun a sa section dans cette politique.'
      },
      {
        id: 'ondevice', num: '02', kicker: 'Sur votre appareil', title: 'Ce qui est enregistré, et où ça reste',
        body: 'Tout ceci vit dans le stockage privé de l’application — base de données, préférences et fichiers — accessible uniquement depuis votre appareil :',
        list: [
          'Votre bibliothèque : titre, auteur, format, couverture et une copie de chaque livre importé',
          'La progression de lecture de chaque livre, page par page',
          'Vos sessions de lecture, d’où viennent les statistiques, les séries et les prévisions',
          'Surlignages, notes et signets, avec leur couleur et leur position dans le texte',
          'Collections, étagères et objectifs de lecture',
          'Préférences : police, taille, interligne, marges, thème, vitesse de la voix haute et, si vous l’activez, l’heure du rappel',
          'Pendant que vous écoutez un livre, l’audio des phrases suivantes, dans un dossier temporaire qui se vide au fur et à mesure'
        ],
        callout: 'Rien de cette liste n’est envoyé à un serveur, ni au nôtre — qui n’existe pas — ni à celui de quiconque. Tout est effacé quand vous désinstallez l’application.',
        outro: 'Quand vous importez un livre, l’application en garde une copie dans son stockage privé, pour qu’il s’ouvre même si vous déplacez ou supprimez l’original. Cette copie ne quitte pas non plus le téléphone et disparaît quand vous retirez le livre de la bibliothèque.'
      },
      {
        id: 'offdevice', num: '03', kicker: 'Ce qui sort', title: 'Les deux seuls services qui reçoivent des données',
        body: 'Balda utilise deux SDK de Google qui s’exécutent dans l’application et communiquent avec les serveurs de Google, pas avec les nôtres :',
        list: [
          'Google AdMob, pour afficher les publicités qui financent la gratuité de l’application',
          'Firebase Crashlytics et Firebase Analytics, pour savoir que l’application a planté et sur quel écran'
        ],
        outro: 'Il n’y en a aucun autre. Ni Firestore, ni Storage, ni Auth, ni messagerie : rien qui puisse synchroniser votre contenu. En dehors de ces deux services, seul sort ce que vous envoyez vous-même, expliqué dans la section suivante.'
      },
      {
        id: 'yours', num: '04', kicker: 'Ce que vous envoyez', title: 'Ce qui ne sort que si vous le décidez',
        body: 'Certaines fonctions font sortir des données de Balda, toujours à votre demande et vers l’endroit que vous choisissez :',
        list: [
          'Sauvegarde : un fichier .zip avec votre bibliothèque — et, si vous le souhaitez, les livres eux-mêmes — que vous enregistrez où vous voulez via le sélecteur d’Android. Si vous choisissez un dossier Google Drive ou un autre cloud, la sauvegarde reste dans ce service, selon sa politique ; Balda ne l’envoie nulle part',
          'Partage : les cartes de série, d’objectif, du mois ou de l’année, les citations et les annotations exportées passent par le menu de partage d’Android, vers l’application que vous choisissez et seulement quand vous touchez « Partager ». Les cartes qui montrent ce que vous lisez ont un interrupteur pour masquer titres et couvertures',
          'Ouvrir avec : quand vous ouvrez un livre depuis une autre application (WhatsApp, e-mail, gestionnaire de fichiers), Balda reçoit ce fichier et en garde une copie sur le téléphone. Elle ne renvoie rien',
          'Dictionnaire et traduction : quand vous sélectionnez du texte, le menu d’Android propose les applications installées. Le texte sélectionné n’arrive qu’à celle que vous touchez',
          'Avis : de temps en temps, à la fermeture d’un livre, la fenêtre de notation de Google Play peut apparaître. Google Play l’affiche et la gère ; si vous rédigez un avis, Google le publie avec votre compte Play'
        ],
        warn: 'Lecture à voix haute : pour vous lire un livre, Balda transmet le texte de chaque phrase au moteur de synthèse vocale d’Android installé — Services vocaux de Google, celui de Samsung ou un autre — et lit l’audio qu’il renvoie. Avec la voix téléchargée sur le téléphone, tout se passe sur l’appareil. Si votre moteur utilise des voix en ligne, ce texte est traité par son fournisseur selon sa propre politique ; vous pouvez télécharger la voix ou changer de moteur dans les paramètres Android → Synthèse vocale. Balda n’envoie ce texte à aucun serveur.'
      },
      {
        id: 'ads', num: '05', kicker: 'Publicité', title: 'Google AdMob',
        body: 'L’application est gratuite et se finance par la publicité, diffusée par Google AdMob. AdMob peut collecter l’identifiant publicitaire de l’appareil, des données techniques (modèle, version d’Android, langue), l’adresse IP — dont on déduit une localisation approximative, jamais précise — et vos interactions avec les annonces. Google effectue ce traitement en tant que responsable, selon ses propres règles.',
        body2: 'Avant la première demande d’annonce, l’application vous présente un formulaire de consentement. Il est géré par la plateforme de messages aux utilisateurs de Google, la CMP certifiée exigée par AdMob, et il s’affiche pour toute personne se trouvant dans l’Espace économique européen, au Royaume-Uni ou en Suisse. Vous y choisissez d’accepter les annonces personnalisées ou de recevoir des annonces non personnalisées. Tant que vous n’avez pas répondu, l’application n’initialise aucun SDK publicitaire et ne fait aucune demande : vous ne verrez pas de publicité sans qu’on vous ait demandé votre avis.',
        list: [
          'Une bannière sur les écrans bibliothèque, étagères, statistiques et objectifs',
          'Un interstitiel à la fermeture d’un livre, et seulement s’il y a eu une vraie lecture',
          'Des annonces avec récompense, toujours volontaires, pour débloquer des thèmes d’étagère pendant 24 heures'
        ],
        callout: 'Aucune publicité dans la liseuse. Ni bannière, ni interruption en pleine page. Et pendant les premiers jours, aucune annonce plein écran ne s’affiche — seulement la vidéo que vous choisissez de regarder pour débloquer un thème ; les bannières des écrans de navigation, elles, apparaissent dès le début.',
        warn: 'Vous pouvez changer d’avis quand vous voulez : Réglages → Publicité → Confidentialité des annonces rouvre le même formulaire, et votre nouveau choix remplace l’ancien. Cette entrée n’apparaît que là où le formulaire est obligatoire : si vous ne la voyez pas, votre consentement n’a pas été demandé dans votre région. Par ailleurs, depuis Paramètres Android → Google → Annonces, vous pouvez limiter le suivi publicitaire ou supprimer votre identifiant ; une fois réinitialisé, les annonces ne sont plus associées à l’ancien.',
        links: [
          { label: 'Règles de confidentialité de Google', href: 'https://policies.google.com/privacy' },
          { label: 'Comment Google utilise les données AdMob', href: 'https://support.google.com/admob/answer/6128543' },
          { label: 'Paramètres des annonces Google', href: 'https://adssettings.google.com' }
        ]
      },
      {
        id: 'diagnostics', num: '06', kicker: 'Diagnostic', title: 'Firebase Crashlytics et Analytics',
        body: 'Quand l’application plante, Crashlytics envoie un rapport pour pouvoir corriger le problème. Ce rapport contient la trace de l’erreur, le modèle de l’appareil, les versions d’Android et de l’application, et un identifiant d’installation qui ne vous identifie pas en tant que personne. Pour les erreurs que l’application intercepte elle-même — à l’import ou à l’ouverture d’un livre —, les chemins de fichier sont retirés du rapport avant l’envoi, car le nom d’un fichier est souvent le titre d’un livre. Analytics enregistre, de façon agrégée, les ouvertures de l’application, les écrans vus et les fonctions utilisées — par exemple, qu’une carte a été partagée, qu’un livre a été ouvert depuis une autre application ou que le rappel a été activé.',
        callout: 'Ni Crashlytics ni Analytics ne reçoivent le contenu de vos livres, leurs titres, vos surlignages, vos notes, votre progression ou ce que vous lisez. Pour un livre ouvert depuis une autre application, seul le format est enregistré (EPUB, PDF…) ; pour ce que vous partagez, seul le type de carte.',
        warn: 'Un interrupteur se trouve dans Réglages → Diagnostic. Il est activé par défaut et, si vous le coupez, l’application applique votre choix à chaque démarrage avant que quoi que ce soit puisse être envoyé. Le couper n’affecte aucune fonction de lecture.',
        links: [
          { label: 'Confidentialité et sécurité dans Firebase', href: 'https://firebase.google.com/support/privacy' },
          { label: 'Données collectées par Crashlytics', href: 'https://firebase.google.com/support/privacy#crashlytics' }
        ]
      },
      {
        id: 'nocollect', num: '07', kicker: 'Ce que nous ne collectons pas', title: 'Des données que l’application ne demande ni n’envoie',
        body: 'Balda ne collecte, ne stocke ni ne transmet aucune des données suivantes :',
        nope: [
          'Votre nom ou votre identité',
          'Votre adresse e-mail',
          'Votre numéro de téléphone',
          'Une localisation précise ou GPS',
          'Le contenu de vos livres',
          'Vos surlignages et vos notes',
          'Le livre que vous lisez',
          'Vos contacts',
          'Photos, micro ou caméra',
          'Données biométriques',
          'Historique de navigation',
          'Comptes d’autres applications'
        ]
      },
      {
        id: 'perms', num: '08', kicker: 'Autorisations', title: 'Les autorisations que déclare l’application',
        body: 'Voici toutes les autorisations que l’application finit par déclarer — les siennes et celles qu’ajoutent les bibliothèques Google qu’elle utilise — et à quoi sert chacune :',
        perms: [
          { icon: 'globe', name: 'INTERNET',             desc: 'Télécharger les annonces et envoyer les rapports de plantage. Aucune fonction de lecture n’en a besoin.' },
          { icon: 'wifi',  name: 'ACCESS_NETWORK_STATE', desc: 'Savoir s’il y a une connexion avant de demander une annonce, pour ne pas gaspiller la batterie sans réseau.' },
          { icon: 'bell',  name: 'POST_NOTIFICATIONS',   desc: 'Le rappel de lecture, si vous l’activez. Elle est demandée à l’activation, jamais à l’ouverture de l’application ; vous pouvez la refuser et tout fonctionne pareil.' },
          { icon: 'play',  name: 'FOREGROUND_SERVICE · MEDIA_PLAYBACK', desc: 'Continuer la lecture à voix haute écran éteint, avec les commandes dans la notification. Seulement pendant que vous écoutez un livre.' },
          { icon: 'moon',  name: 'WAKE_LOCK',            desc: 'Empêcher le téléphone de s’endormir entre deux phrases pendant que vous écoutez un livre, et laisser finir les tâches programmées (widgets et rappel).' },
          { icon: 'ad',    name: 'AD_ID · ACCESS_ADSERVICES_*', desc: 'Ajoutées par le SDK AdMob : lire l’identifiant publicitaire et utiliser les API publicitaires d’Android. Vous pouvez supprimer ou limiter l’identifiant dans les paramètres Android.' },
          { icon: 'cart',  name: 'BILLING',              desc: 'Ajoutée par la bibliothèque de paiement de Google Play. Inutilisée aujourd’hui : l’achat sans publicité n’est pas actif.' },
          { icon: 'link',  name: 'BIND_GET_INSTALL_REFERRER_SERVICE', desc: 'Ajoutée par Firebase Analytics pour savoir si l’application a été installée depuis Google Play. Elle ne reçoit rien de votre bibliothèque.' }
        ],
        callout: 'Balda ne demande pas d’autorisation d’accès au stockage. Les livres arrivent par le sélecteur du système — vous choisissez un fichier ou autorisez un dossier — ou parce que vous les ouvrez avec Balda depuis une autre application, et l’application ne voit que ce que vous lui donnez.',
        outro: 'Ce n’est pas un détail technique : l’application ne pourrait pas parcourir votre galerie, vos documents ou vos téléchargements, même si elle le voulait. Il reste aussi une autorisation interne d’AndroidX (DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION) qui ne donne accès à rien : elle empêche d’autres applications d’envoyer des signaux à Balda.'
      },
      {
        id: 'payments', num: '09', kicker: 'Paiements', title: 'Achats et récompenses',
        body: 'Aujourd’hui, l’application est gratuite et ne traite aucun paiement. Les thèmes d’étagère payants se débloquent en regardant une annonce avec récompense — un choix volontaire, lancé par vous, qui dure 24 heures.',
        outro: 'Si un achat « sans publicité » est proposé un jour, Google Play Billing le gérera de bout en bout : les données de paiement sont traitées par Google et Balda ne les voit ni ne les enregistre. Seul un indicateur chiffré signalant l’existence de l’achat serait conservé sur le téléphone.'
      },
      {
        id: 'children', num: '10', kicker: 'Mineurs', title: 'Mineurs',
        body: 'Balda ne s’adresse pas aux enfants de moins de 13 ans et ne collecte pas sciemment d’informations les concernant. Si vous êtes parent ou tuteur et pensez qu’un enfant dont vous avez la charge a fourni des données personnelles via l’application, écrivez-nous et nous réglerons la question immédiatement.'
      },
      {
        id: 'rights', num: '11', kicker: 'Vos droits', title: 'Le contrôle de vos données',
        body: 'Comme il n’y a ni serveur ni compte, nous ne détenons aucune donnée vous concernant dont vous pourriez demander une copie ou la suppression : le contrôle est direct et entre vos mains.',
        list: [
          'Supprimer un livre, une annotation ou toute la bibliothèque depuis l’application',
          'Exporter vos annotations quand vous voulez, dans un fichier qui reste sur votre appareil',
          'Enregistrer une sauvegarde de toute votre bibliothèque dans un fichier et la restaurer sur un autre téléphone',
          'Couper les diagnostics dans Réglages → Diagnostic',
          'Réinitialiser ou supprimer votre identifiant publicitaire dans les paramètres Android',
          'Désinstaller l’application, ce qui efface complètement la base de données, les préférences et les copies des livres'
        ],
        outro: 'Pour les données traitées par Google AdMob et Firebase en tant que responsables, vous pouvez exercer vos droits via les paramètres de votre compte Google indiqués plus haut. En cas de doute, écrivez-nous et nous vous aiderons.'
      },
      {
        id: 'retention', num: '12', kicker: 'Conservation', title: 'Combien de temps durent les données',
        body: 'Les données locales durent aussi longtemps que vous le souhaitez : elles restent sur l’appareil jusqu’à ce que vous les supprimiez ou désinstalliez l’application. L’audio de la lecture à voix haute est effacé dès qu’il a été lu, et le reste à l’arrêt. Nous n’avons copie de rien, il n’y a donc rien à conserver de notre côté.',
        outro: 'Les données collectées par AdMob, Crashlytics et Analytics sont conservées par Google selon ses propres règles — environ 90 jours pour les rapports de plantage et jusqu’à 14 mois pour Analytics, par défaut — et non par nous.'
      },
      {
        id: 'security', num: '13', kicker: 'Sécurité', title: 'Comment est protégé ce qui est sur le téléphone',
        body: 'La bibliothèque et les préférences vivent dans le stockage privé de l’application, qu’Android rend inaccessible aux autres applications. L’état d’achat est chiffré en AES-256-GCM à l’aide du trousseau de clés de l’appareil.',
        warn: 'La sauvegarde est un fichier .zip non chiffré : quiconque l’a peut voir votre bibliothèque et vos annotations, gardez-la donc dans un endroit de confiance. Elle n’inclut pas l’état d’achat, qui dépend des clés de ce téléphone.',
        outro: 'L’application n’ouvre aucune connexion entrante et n’expose aucune de vos données sur le réseau. Cela dit, aucun système n’est infaillible : gardez votre appareil à jour et verrouillé.'
      },
      {
        id: 'changes', num: '14', kicker: 'Modifications', title: 'Modifications de cette politique',
        body: 'Si l’application change ce qu’elle fait des données — un nouveau SDK, l’achat sans publicité activé, un autre produit Firebase, une nouvelle autorisation —, cette page est mise à jour en même temps que la fiche Google Play, et la date ci-dessus en témoigne. En vigueur depuis le 24 septembre 2026.',
        outro: 'En continuant à utiliser l’application après une mise à jour de cette politique, vous acceptez la version en vigueur.'
      },
      {
        id: 'contact', num: '15', kicker: 'Contact', title: 'Écrivez-nous',
        body: 'Pour toute question sur cette politique, sur ce que l’application fait de vos données ou sur l’exercice de vos droits, à cette adresse :',
        email: 'danibarea@gmail.com'
      }
    ],

    footer: {
      tagline: 'Vos livres et votre lecture ne quittent pas le téléphone.',
      copy: '© 2026 Balda · Daniel Barea',
      links: ['Accueil', 'Contact', 'Google Play']
    }
  },

  de: {
    dir: 'ltr', name: 'Deutsch', flag: '🇩🇪', short: 'DE', htmlLang: 'de',

    nav: { home: 'Startseite', policy: 'Datenschutz', back: '← Zurück zur App' },

    hero: {
      eyebrow: 'Datenschutzerklärung',
      title: 'Deine Bücher. Dein Lesen. Dein Gerät.',
      sub: 'Deine Bibliothek, dein Fortschritt, deine Markierungen und deine Statistiken bleiben auf dem Handy und werden nie gesendet. Was rausgeht: die Werbung, die Absturzberichte – wenn du sie nicht abschaltest – und was du selbst verschickst.',
      meta: 'Zuletzt aktualisiert: 24. September 2026',
      author: 'Balda · von Daniel Barea',
      tldr: 'Kein Konto · kein eigener Server · deine Bücher werden nie hochgeladen · AdMob für Werbung und Firebase für Abstürze, abschaltbar · Sicherungen und Geteiltes gehen dahin, wohin du willst.'
    },

    toc: 'Inhalt',

    sections: [
      {
        id: 'principle', num: '01', kicker: 'Das Prinzip', title: 'Was „verlässt das Handy nicht“ bedeutet',
        body: 'Balda ist ein Reader, der komplett auf deinem Gerät läuft. Es gibt kein Benutzerkonto, keine Anmeldung und keinen eigenen Server, mit dem sich die App verbinden würde. Die Bücher, die du importierst, wo du darin stehst, was du markierst und die Statistiken, die dein Lesen erzeugt, werden in der Datenbank des Handys gespeichert und gehen nirgendwohin.',
        callout: 'Der Satz ist wörtlich gemeint: Die App übermittelt den Inhalt deiner Bücher und deine Lesedaten nie von sich aus an einen Server, weder an unseren noch an den von jemand anderem. Was das Gerät verlässt, sind Werbung, Diagnosedaten und das, was du selbst verschickst – und jedes davon hat hier einen eigenen Abschnitt.'
      },
      {
        id: 'ondevice', num: '02', kicker: 'Auf deinem Gerät', title: 'Was gespeichert wird und wo es bleibt',
        body: 'All das liegt im privaten Speicher der App – Datenbank, Einstellungen und Dateien – und ist nur von deinem Gerät aus erreichbar:',
        list: [
          'Deine Bibliothek: Titel, Autor, Format, Cover und eine Kopie jedes importierten Buchs',
          'Der Lesefortschritt jedes Buchs, Seite für Seite',
          'Deine Lesesitzungen, aus denen Statistiken, Lesesträhnen und Prognosen entstehen',
          'Markierungen, Notizen und Lesezeichen mit Farbe und Position im Text',
          'Sammlungen, Regalbretter und Leseziele',
          'Einstellungen: Schrift, Größe, Zeilenabstand, Ränder, Thema, Vorlesetempo und, wenn du sie einschaltest, die Uhrzeit der Erinnerung',
          'Während du einem Buch zuhörst, der Ton der nächsten Sätze, in einem temporären Ordner, der sich beim Abspielen leert'
        ],
        callout: 'Nichts aus dieser Liste wird an einen Server gesendet – weder an unseren, den es nicht gibt, noch an irgendeinen anderen. Beim Deinstallieren der App wird alles gelöscht.',
        outro: 'Wenn du ein Buch importierst, legt die App eine Kopie in ihrem privaten Speicher ab, damit es sich auch öffnen lässt, wenn du das Original verschiebst oder löschst. Auch diese Kopie verlässt das Handy nicht und wird entfernt, wenn du das Buch aus der Bibliothek löschst.'
      },
      {
        id: 'offdevice', num: '03', kicker: 'Was rausgeht', title: 'Die einzigen zwei Dienste, die Daten erhalten',
        body: 'Balda nutzt zwei SDKs von Google, die in der App laufen und mit Servern von Google sprechen, nicht mit unseren:',
        list: [
          'Google AdMob, um die Werbung anzuzeigen, die die App kostenlos hält',
          'Firebase Crashlytics und Firebase Analytics, um zu erfahren, dass die App abgestürzt ist und auf welchem Bildschirm'
        ],
        outro: 'Weitere gibt es nicht. Kein Firestore, kein Storage, kein Auth, kein Messaging: nichts, was deine Inhalte synchronisieren könnte. Abgesehen von diesen beiden Diensten geht nur raus, was du selbst verschickst – erklärt im nächsten Abschnitt.'
      },
      {
        id: 'yours', num: '04', kicker: 'Was du verschickst', title: 'Was nur rausgeht, wenn du es willst',
        body: 'Einige Funktionen bringen Daten aus Balda heraus – immer, weil du es willst, und dorthin, wohin du willst:',
        list: [
          'Sicherung: eine .zip-Datei mit deiner Bibliothek – und auf Wunsch den Büchern selbst –, die du über die Dateiauswahl von Android speicherst, wo du möchtest. Wählst du einen Ordner in Google Drive oder einer anderen Cloud, liegt die Sicherung bei diesem Dienst, unter dessen Richtlinien; Balda lädt sie nirgendwo hoch',
          'Teilen: Karten zu Lesesträhne, Ziel, Monat oder Jahr, Zitate und exportierte Markierungen gehen über das Teilen-Menü von Android an die App deiner Wahl, und nur, wenn du auf „Teilen“ tippst. Karten, die zeigen, was du liest, haben einen Schalter, um Titel und Cover auszublenden',
          'Öffnen mit: Wenn du ein Buch aus einer anderen App öffnest (WhatsApp, E-Mail, Dateimanager), erhält Balda diese Datei und legt eine Kopie auf dem Handy ab. Zurück wird nichts gesendet',
          'Wörterbuch und Übersetzung: Wenn du Text markierst, bietet das Android-Menü die installierten Apps an. Der markierte Text erreicht nur die, die du antippst',
          'Bewertung: Ab und zu kann beim Schließen eines Buchs der Bewertungsdialog von Google Play erscheinen. Google Play zeigt und verwaltet ihn; schreibst du eine Rezension, veröffentlicht Google sie mit deinem Play-Konto'
        ],
        warn: 'Vorlesen: Um dir ein Buch vorzulesen, gibt Balda den Text jedes Satzes an die installierte Sprachausgabe von Android weiter – Sprachdienste von Google, die von Samsung oder eine andere – und spielt den Ton ab, den sie zurückgibt. Ist die Stimme auf dem Handy heruntergeladen, passiert alles auf dem Gerät. Nutzt deine Sprachausgabe Online-Stimmen, verarbeitet ihr Anbieter diesen Text nach seinen eigenen Richtlinien; du kannst die Stimme herunterladen oder die Sprachausgabe wechseln unter Android-Einstellungen → Sprachausgabe. Balda sendet den Text an keinen Server.'
      },
      {
        id: 'ads', num: '05', kicker: 'Werbung', title: 'Google AdMob',
        body: 'Die App ist kostenlos und finanziert sich über Werbung, ausgeliefert von Google AdMob. AdMob kann die Werbe-ID des Geräts, technische Daten (Modell, Android-Version, Sprache), die IP-Adresse – aus der ein ungefährer, nie genauer Standort abgeleitet wird – und deine Interaktionen mit Anzeigen erfassen. Google verarbeitet diese Daten als Verantwortlicher nach eigenen Richtlinien.',
        body2: 'Bevor die erste Anzeige angefordert wird, zeigt dir die App ein Einwilligungsformular. Es wird über die User Messaging Platform von Google verwaltet, die zertifizierte CMP, die AdMob verlangt, und erscheint für alle im Europäischen Wirtschaftsraum, im Vereinigten Königreich oder in der Schweiz. Dort entscheidest du, ob du personalisierte Anzeigen akzeptierst oder lieber nicht personalisierte bekommst. Solange du nicht geantwortet hast, initialisiert die App kein Werbe-SDK und stellt keine einzige Anfrage: Du siehst keine Werbung, ohne vorher gefragt worden zu sein.',
        list: [
          'Ein Banner auf den Seiten Bibliothek, Regal, Statistik und Ziele',
          'Eine Interstitial-Anzeige beim Schließen eines Buchs, und nur, wenn wirklich gelesen wurde',
          'Anzeigen mit Belohnung, immer freiwillig, um Regalthemen für 24 Stunden freizuschalten'
        ],
        callout: 'Im Reader gibt es keine Werbung. Kein Banner, keine Unterbrechung mitten auf der Seite. Und in den ersten Tagen erscheint überhaupt keine Vollbildwerbung – nur das Video, das du selbst startest, um ein Thema freizuschalten; die Banner auf den Übersichtsseiten erscheinen dagegen von Anfang an.',
        warn: 'Du kannst deine Meinung jederzeit ändern: Unter Einstellungen → Werbung → Datenschutzoptionen für Werbung öffnet sich dasselbe Formular erneut, und deine neue Wahl ersetzt die alte. Der Eintrag erscheint nur dort, wo das Formular vorgeschrieben ist – siehst du ihn nicht, wurde in deiner Region keine Einwilligung abgefragt. Außerdem kannst du unter Android-Einstellungen → Google → Werbung das Anzeigen-Tracking einschränken oder deine ID löschen; nach dem Zurücksetzen werden Anzeigen nicht mehr mit der alten verknüpft.',
        links: [
          { label: 'Datenschutzerklärung von Google', href: 'https://policies.google.com/privacy' },
          { label: 'Wie Google AdMob-Daten nutzt', href: 'https://support.google.com/admob/answer/6128543' },
          { label: 'Google-Anzeigeneinstellungen', href: 'https://adssettings.google.com' }
        ]
      },
      {
        id: 'diagnostics', num: '06', kicker: 'Diagnose', title: 'Firebase Crashlytics und Analytics',
        body: 'Wenn die App abstürzt, sendet Crashlytics einen Bericht, damit der Fehler behoben werden kann. Er enthält den Stacktrace, das Gerätemodell, die Android- und App-Version sowie eine Installations-ID, die dich nicht als Person identifiziert. Bei Fehlern, die die App selbst abfängt – beim Importieren oder Öffnen eines Buchs –, werden Dateipfade vor dem Senden aus dem Bericht entfernt, weil ein Dateiname meist ein Buchtitel ist. Analytics erfasst zusammengefasst App-Starts, aufgerufene Bildschirme und genutzte Funktionen – zum Beispiel, dass eine Karte geteilt, ein Buch aus einer anderen App geöffnet oder die Erinnerung eingeschaltet wurde.',
        callout: 'Weder Crashlytics noch Analytics erhalten den Inhalt deiner Bücher, ihre Titel, deine Markierungen, deine Notizen, deinen Fortschritt oder das, was du liest. Bei einem Buch aus einer anderen App wird nur das Format erfasst (EPUB, PDF …), bei Geteiltem nur die Art der Karte.',
        warn: 'Unter Einstellungen → Diagnose gibt es einen Schalter. Er ist ab Werk eingeschaltet; schaltest du ihn aus, wendet die App deine Entscheidung bei jedem Start an, bevor irgendetwas gesendet werden kann. Das Ausschalten beeinträchtigt keine Lesefunktion.',
        links: [
          { label: 'Datenschutz und Sicherheit bei Firebase', href: 'https://firebase.google.com/support/privacy' },
          { label: 'Welche Daten Crashlytics erfasst', href: 'https://firebase.google.com/support/privacy#crashlytics' }
        ]
      },
      {
        id: 'nocollect', num: '07', kicker: 'Was wir nicht erfassen', title: 'Daten, die die App weder abfragt noch sendet',
        body: 'Balda erfasst, speichert und übermittelt keine der folgenden Daten:',
        nope: [
          'Deinen Namen oder deine Identität',
          'Deine E-Mail-Adresse',
          'Deine Telefonnummer',
          'Genauen Standort oder GPS',
          'Den Inhalt deiner Bücher',
          'Deine Markierungen und Notizen',
          'Welches Buch du liest',
          'Kontakte oder Adressbuch',
          'Fotos, Mikrofon oder Kamera',
          'Biometrische Daten',
          'Browserverlauf',
          'Konten anderer Apps'
        ]
      },
      {
        id: 'perms', num: '08', kicker: 'Berechtigungen', title: 'Die Berechtigungen, die die App angibt',
        body: 'Das sind alle Berechtigungen, die die App am Ende angibt – ihre eigenen und die, die die genutzten Google-Bibliotheken hinzufügen –, und wofür jede dient:',
        perms: [
          { icon: 'globe', name: 'INTERNET',             desc: 'Werbung laden und Absturzberichte senden. Keine Lesefunktion braucht sie.' },
          { icon: 'wifi',  name: 'ACCESS_NETWORK_STATE', desc: 'Vor einer Werbeanfrage prüfen, ob eine Verbindung besteht, damit ohne Netz kein Akku verschwendet wird.' },
          { icon: 'bell',  name: 'POST_NOTIFICATIONS',   desc: 'Die Leseerinnerung, wenn du sie einschaltest. Sie wird beim Einschalten abgefragt, nie beim Öffnen der App; du kannst sie ablehnen, und die App funktioniert genauso.' },
          { icon: 'play',  name: 'FOREGROUND_SERVICE · MEDIA_PLAYBACK', desc: 'Bei ausgeschaltetem Bildschirm weiter vorlesen, mit der Steuerung in der Benachrichtigung. Nur, während du einem Buch zuhörst.' },
          { icon: 'moon',  name: 'WAKE_LOCK',            desc: 'Verhindern, dass das Handy zwischen zwei Sätzen einschläft, während du einem Buch zuhörst, und geplante Aufgaben (Widgets und Erinnerung) zu Ende laufen lassen.' },
          { icon: 'ad',    name: 'AD_ID · ACCESS_ADSERVICES_*', desc: 'Vom AdMob-SDK hinzugefügt: die Werbe-ID lesen und die Werbe-APIs von Android nutzen. Du kannst die ID in den Android-Einstellungen löschen oder einschränken.' },
          { icon: 'cart',  name: 'BILLING',              desc: 'Von der Zahlungsbibliothek von Google Play hinzugefügt. Heute ungenutzt: Der Kauf ohne Werbung ist nicht aktiv.' },
          { icon: 'link',  name: 'BIND_GET_INSTALL_REFERRER_SERVICE', desc: 'Von Firebase Analytics hinzugefügt, um zu erfahren, ob die App über Google Play installiert wurde. Sie erhält nichts aus deiner Bibliothek.' }
        ],
        callout: 'Balda fragt keine Berechtigung für den Speicherzugriff ab. Bücher kommen über die Dateiauswahl des Systems – du wählst eine Datei oder gibst einen Ordner frei – oder weil du sie aus einer anderen App mit Balda öffnest, und die App sieht nur, was du ihr gibst.',
        outro: 'Das ist keine Formalie: Die App könnte deine Galerie, deine Dokumente oder deine Downloads gar nicht durchsuchen, selbst wenn sie wollte. Dazu kommt eine interne AndroidX-Berechtigung (DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION), die auf nichts Zugriff gibt: Sie verhindert, dass andere Apps Signale an Balda schicken.'
      },
      {
        id: 'payments', num: '09', kicker: 'Zahlungen', title: 'Käufe und Belohnungen',
        body: 'Heute ist die App kostenlos und verarbeitet keine Zahlungen. Kostenpflichtige Regalthemen werden durch eine Anzeige mit Belohnung freigeschaltet – freiwillig, von dir gestartet und 24 Stunden gültig.',
        outro: 'Sollte künftig ein Kauf „ohne Werbung“ angeboten werden, wickelt Google Play Billing ihn vollständig ab: Zahlungsdaten verarbeitet Google, Balda sieht und speichert sie nie. Auf dem Handy würde nur eine verschlüsselte Markierung liegen, dass der Kauf existiert.'
      },
      {
        id: 'children', num: '10', kicker: 'Minderjährige', title: 'Minderjährige',
        body: 'Balda richtet sich nicht an Kinder unter 13 Jahren und erfasst wissentlich keine Daten von Kindern. Wenn du Elternteil oder Erziehungsberechtigte:r bist und glaubst, dass ein Kind in deiner Obhut über die App personenbezogene Daten angegeben hat, schreib uns, und wir kümmern uns sofort darum.'
      },
      {
        id: 'rights', num: '11', kicker: 'Deine Rechte', title: 'Kontrolle über deine Daten',
        body: 'Da es keinen Server und kein Konto gibt, speichern wir keine Daten von dir, von denen du eine Kopie oder die Löschung verlangen könntest: Die Kontrolle liegt direkt bei dir.',
        list: [
          'Ein Buch, eine Markierung oder die ganze Bibliothek in der App löschen',
          'Deine Markierungen jederzeit in eine Datei exportieren, die auf deinem Gerät bleibt',
          'Eine Sicherung deiner ganzen Bibliothek in eine Datei speichern und auf einem anderen Handy wiederherstellen',
          'Die Diagnose unter Einstellungen → Diagnose ausschalten',
          'Deine Werbe-ID in den Android-Einstellungen zurücksetzen oder löschen',
          'Die App deinstallieren, womit Datenbank, Einstellungen und Buchkopien vollständig gelöscht werden'
        ],
        outro: 'Für die Daten, die Google AdMob und Firebase als Verantwortliche verarbeiten, kannst du deine Rechte über die oben verlinkten Einstellungen deines Google-Kontos ausüben. Wenn du unsicher bist, schreib uns, wir helfen dir.'
      },
      {
        id: 'retention', num: '12', kicker: 'Aufbewahrung', title: 'Wie lange Daten bleiben',
        body: 'Lokale Daten bleiben, so lange du willst: auf dem Gerät, bis du sie löschst oder die App deinstallierst. Der Ton beim Vorlesen wird gelöscht, sobald er abgespielt ist, und der Rest beim Stoppen. Wir haben von nichts eine Kopie, also gibt es bei uns nichts aufzubewahren.',
        outro: 'Die von AdMob, Crashlytics und Analytics erfassten Daten bewahrt Google nach eigenen Richtlinien auf – Absturzberichte standardmäßig etwa 90 Tage, Analytics-Daten bis zu 14 Monate –, nicht wir.'
      },
      {
        id: 'security', num: '13', kicker: 'Sicherheit', title: 'Wie geschützt ist, was auf dem Handy liegt',
        body: 'Bibliothek und Einstellungen liegen im privaten Speicher der App, auf den Android anderen Apps keinen Zugriff gibt. Der Kaufstatus wird mit AES-256-GCM über den Schlüsselspeicher des Geräts verschlüsselt.',
        warn: 'Die Sicherung ist eine unverschlüsselte .zip-Datei: Wer sie hat, kann deine Bibliothek und deine Markierungen sehen, also bewahre sie an einem Ort auf, dem du vertraust. Sie enthält nicht den Kaufstatus, der an die Schlüssel dieses Handys gebunden ist.',
        outro: 'Die App öffnet keine eingehenden Verbindungen und stellt keine deiner Daten im Netz bereit. Trotzdem ist kein System unfehlbar: Halte dein Gerät aktuell und gesperrt.'
      },
      {
        id: 'changes', num: '14', kicker: 'Änderungen', title: 'Änderungen dieser Erklärung',
        body: 'Ändert die App, was sie mit Daten macht – ein neues SDK, der aktivierte Kauf ohne Werbung, ein weiteres Firebase-Produkt, eine neue Berechtigung –, wird diese Seite zusammen mit dem Google-Play-Eintrag aktualisiert, und das Datum oben zeigt es an. Gültig ab dem 24. September 2026.',
        outro: 'Wenn du die App nach einer Aktualisierung dieser Erklärung weiter nutzt, akzeptierst du die dann gültige Fassung.'
      },
      {
        id: 'contact', num: '15', kicker: 'Kontakt', title: 'Schreib uns',
        body: 'Fragen zu dieser Erklärung, dazu, was die App mit deinen Daten macht, oder dazu, wie du deine Rechte ausübst, an diese Adresse:',
        email: 'danibarea@gmail.com'
      }
    ],

    footer: {
      tagline: 'Deine Bücher und dein Lesen verlassen das Handy nicht.',
      copy: '© 2026 Balda · Daniel Barea',
      links: ['Startseite', 'Kontakt', 'Google Play']
    }
  },

  it: {
    dir: 'ltr', name: 'Italiano', flag: '🇮🇹', short: 'IT', htmlLang: 'it',

    nav: { home: 'Home', policy: 'Privacy', back: '← Torna all’app' },

    hero: {
      eyebrow: 'Informativa sulla privacy',
      title: 'I tuoi libri. La tua lettura. Il tuo dispositivo.',
      sub: 'La tua biblioteca, i tuoi progressi, le tue annotazioni e le tue statistiche restano sul telefono e non vengono mai inviati. Escono solo gli annunci, i rapporti sugli arresti anomali — se non li disattivi — e ciò che scegli di inviare tu.',
      meta: 'Ultimo aggiornamento: 24 settembre 2026',
      author: 'Balda · di Daniel Barea',
      tldr: 'Senza account · nessun server nostro · i tuoi libri non vengono mai caricati · AdMob per gli annunci e Firebase per gli arresti, disattivabile · il backup e ciò che condividi vanno dove dici tu.'
    },

    toc: 'Indice',

    sections: [
      {
        id: 'principle', num: '01', kicker: 'Il principio', title: 'Cosa significa «non esce dal telefono»',
        body: 'Balda è un lettore di libri che funziona interamente sul tuo dispositivo. Non ci sono account utente, registrazioni né un nostro server a cui l’app si colleghi. I libri che importi, il punto in cui sei arrivato, ciò che sottolinei e le statistiche della tua lettura sono salvati nel database del telefono e non vanno da nessuna parte.',
        callout: 'La frase va presa alla lettera: l’app non trasmette mai di sua iniziativa il contenuto dei tuoi libri né i tuoi dati di lettura a un server, nostro o di altri. Dal dispositivo escono la pubblicità, la diagnostica e ciò che decidi di inviare tu, e questa informativa dedica una sezione a ciascuno.'
      },
      {
        id: 'ondevice', num: '02', kicker: 'Sul tuo dispositivo', title: 'Cosa viene salvato, e dove resta',
        body: 'Tutto questo vive nella memoria privata dell’app — database, preferenze e file — accessibile solo dal tuo dispositivo:',
        list: [
          'La tua biblioteca: titolo, autore, formato, copertina e una copia di ogni libro importato',
          'I progressi di lettura di ogni libro, pagina per pagina',
          'Le tue sessioni di lettura, da cui nascono statistiche, serie di giorni e previsioni',
          'Sottolineature, note e segnalibri, con il loro colore e la posizione nel testo',
          'Collezioni, ripiani della libreria e obiettivi di lettura',
          'Preferenze: carattere, dimensione, interlinea, margini, tema, velocità della voce e, se lo attivi, l’orario del promemoria',
          'Mentre ascolti un libro, l’audio delle frasi successive, in una cartella temporanea che si svuota man mano che vengono lette'
        ],
        callout: 'Niente di questo elenco viene inviato a un server, né al nostro — che non esiste — né a quello di altri. Si cancella tutto disinstallando l’app.',
        outro: 'Quando importi un libro, l’app ne tiene una copia nella memoria privata, così si apre anche se sposti o elimini l’originale. Anche questa copia non esce dal telefono e viene eliminata quando togli il libro dalla biblioteca.'
      },
      {
        id: 'offdevice', num: '03', kicker: 'Cosa esce', title: 'Gli unici due servizi che ricevono dati',
        body: 'Balda usa due SDK di Google che girano dentro l’app e parlano con i server di Google, non con i nostri:',
        list: [
          'Google AdMob, per mostrare gli annunci che mantengono l’app gratuita',
          'Firebase Crashlytics e Firebase Analytics, per sapere che l’app si è bloccata e su quale schermata'
        ],
        outro: 'Non ce ne sono altri. Niente Firestore, Storage, Auth o messaggistica: nulla che possa sincronizzare i tuoi contenuti. Oltre a questi due servizi, esce solo ciò che invii tu, spiegato nella sezione successiva.'
      },
      {
        id: 'yours', num: '04', kicker: 'Ciò che invii tu', title: 'Cosa esce solo se lo decidi tu',
        body: 'Alcune funzioni portano dati fuori da Balda, sempre perché lo chiedi tu e verso dove scegli tu:',
        list: [
          'Backup: un file .zip con la tua biblioteca — e, se vuoi, i libri stessi — che salvi dove preferisci con il selettore di Android. Se scegli una cartella di Google Drive o di un altro cloud, il backup resta in quel servizio, secondo la sua informativa; Balda non lo carica da nessuna parte',
          'Condivisione: le schede di serie, obiettivo, mese o anno, le citazioni e le annotazioni esportate escono dal menu di condivisione di Android, verso l’app che scegli e solo quando tocchi «Condividi». Le schede che mostrano cosa leggi hanno un interruttore per nascondere titoli e copertine',
          'Apri con: quando apri un libro da un’altra app (WhatsApp, posta, gestore di file), Balda riceve quel file e ne tiene una copia sul telefono. Non rimanda indietro nulla',
          'Dizionario e traduzione: selezionando del testo, il menu di Android propone le app installate. Il testo selezionato arriva solo a quella che tocchi',
          'Recensione: ogni tanto, chiudendo un libro, può comparire la finestra di valutazione di Google Play. La mostra e la gestisce Google Play; se scrivi una recensione, Google la pubblica con il tuo account Play'
        ],
        warn: 'Lettura ad alta voce: per leggerti un libro, Balda passa il testo di ogni frase al motore di sintesi vocale di Android che hai installato — Servizi vocali di Google, quello di Samsung o un altro — e riproduce l’audio che restituisce. Con la voce scaricata sul telefono, tutto avviene sul dispositivo. Se il tuo motore usa voci online, quel testo viene elaborato dal suo fornitore secondo la sua informativa; puoi scaricare la voce o cambiare motore nelle impostazioni di Android → Sintesi vocale. Balda non invia il testo a nessun server.'
      },
      {
        id: 'ads', num: '05', kicker: 'Pubblicità', title: 'Google AdMob',
        body: 'L’app è gratuita e si sostiene con gli annunci, forniti da Google AdMob. AdMob può raccogliere l’identificativo pubblicitario del dispositivo, dati tecnici (modello, versione di Android, lingua), l’indirizzo IP — da cui si ricava una posizione approssimativa, mai precisa — e le tue interazioni con gli annunci. Google effettua questo trattamento come titolare, secondo le proprie norme.',
        body2: 'Prima di richiedere il primo annuncio, l’app ti mostra un modulo di consenso. È gestito dalla piattaforma di messaggistica per gli utenti di Google, la CMP certificata richiesta da AdMob, e compare a chi si trova nello Spazio economico europeo, nel Regno Unito o in Svizzera. Lì scegli se accettare gli annunci personalizzati o ricevere annunci non personalizzati. Finché non rispondi, l’app non inizializza alcun SDK pubblicitario né fa una sola richiesta: non vedrai pubblicità senza che ti sia stato chiesto prima.',
        list: [
          'Un banner nelle schermate biblioteca, libreria, statistiche e obiettivi',
          'Un interstitial quando chiudi un libro, e solo se hai letto davvero',
          'Annunci con premio, sempre volontari, per sbloccare temi dei ripiani per 24 ore'
        ],
        callout: 'Nel lettore non c’è pubblicità. Né banner né interruzioni a metà pagina. E nei primi giorni non compare alcun annuncio a schermo intero — solo il video che scegli di guardare per sbloccare un tema; i banner nelle schermate di navigazione invece compaiono fin dall’inizio.',
        warn: 'Puoi cambiare idea quando vuoi: Impostazioni → Pubblicità → Opzioni di privacy per gli annunci riapre lo stesso modulo, e la nuova scelta sostituisce la precedente. Quella voce compare solo dove il modulo è obbligatorio: se non la vedi, nella tua regione il consenso non ti è stato chiesto. Inoltre, da Impostazioni di Android → Google → Annunci puoi limitare il tracciamento pubblicitario o eliminare il tuo identificativo; una volta reimpostato, gli annunci non sono più associati al precedente.',
        links: [
          { label: 'Norme sulla privacy di Google', href: 'https://policies.google.com/privacy' },
          { label: 'Come Google usa i dati di AdMob', href: 'https://support.google.com/admob/answer/6128543' },
          { label: 'Impostazioni annunci di Google', href: 'https://adssettings.google.com' }
        ]
      },
      {
        id: 'diagnostics', num: '06', kicker: 'Diagnostica', title: 'Firebase Crashlytics e Analytics',
        body: 'Quando l’app si blocca, Crashlytics invia un rapporto per poterla correggere. Il rapporto contiene la traccia dell’errore, il modello del dispositivo, le versioni di Android e dell’app e un identificativo di installazione che non ti identifica come persona. Negli errori che l’app intercetta da sé — quando importa o apre un libro —, i percorsi dei file vengono tolti dal rapporto prima dell’invio, perché il nome di un file di solito è il titolo di un libro. Analytics registra, in forma aggregata, le aperture dell’app, le schermate viste e le funzioni usate — per esempio, che è stata condivisa una scheda, che un libro è stato aperto da un’altra app o che è stato attivato il promemoria.',
        callout: 'Né Crashlytics né Analytics ricevono il contenuto dei tuoi libri, i loro titoli, le tue sottolineature, le tue note, i tuoi progressi o cosa stai leggendo. Di un libro aperto da un’altra app si registra solo il formato (EPUB, PDF…); di ciò che condividi, solo il tipo di scheda.',
        warn: 'C’è un interruttore in Impostazioni → Diagnostica. È attivo di serie e, se lo spegni, l’app applica la tua scelta a ogni avvio prima che si possa inviare qualsiasi cosa. Spegnerlo non influisce su nessuna funzione di lettura.',
        links: [
          { label: 'Privacy e sicurezza in Firebase', href: 'https://firebase.google.com/support/privacy' },
          { label: 'Dati raccolti da Crashlytics', href: 'https://firebase.google.com/support/privacy#crashlytics' }
        ]
      },
      {
        id: 'nocollect', num: '07', kicker: 'Ciò che non raccogliamo', title: 'Dati che l’app non chiede né invia',
        body: 'Balda non raccoglie, conserva né trasmette nessuno dei seguenti dati:',
        nope: [
          'Il tuo nome o la tua identità',
          'Il tuo indirizzo email',
          'Il tuo numero di telefono',
          'Posizione precisa o GPS',
          'Il contenuto dei tuoi libri',
          'Le tue sottolineature e note',
          'Quale libro stai leggendo',
          'Contatti o rubrica',
          'Foto, microfono o fotocamera',
          'Dati biometrici',
          'Cronologia di navigazione',
          'Account di altre app'
        ]
      },
      {
        id: 'perms', num: '08', kicker: 'Permessi', title: 'I permessi che l’app dichiara',
        body: 'Questi sono tutti i permessi che l’app finisce per dichiarare — i suoi e quelli aggiunti dalle librerie di Google che usa — e a cosa serve ciascuno:',
        perms: [
          { icon: 'globe', name: 'INTERNET',             desc: 'Scaricare gli annunci e inviare i rapporti sugli arresti anomali. Nessuna funzione di lettura ne ha bisogno.' },
          { icon: 'wifi',  name: 'ACCESS_NETWORK_STATE', desc: 'Sapere se c’è connessione prima di chiedere un annuncio, per non sprecare batteria senza rete.' },
          { icon: 'bell',  name: 'POST_NOTIFICATIONS',   desc: 'Il promemoria di lettura, se lo attivi. Viene chiesto quando lo attivi, mai all’apertura dell’app; puoi negarlo e l’app funziona allo stesso modo.' },
          { icon: 'play',  name: 'FOREGROUND_SERVICE · MEDIA_PLAYBACK', desc: 'Continuare a leggere ad alta voce a schermo spento, con i comandi nella notifica. Solo mentre ascolti un libro.' },
          { icon: 'moon',  name: 'WAKE_LOCK',            desc: 'Evitare che il telefono si addormenti tra una frase e l’altra mentre ascolti un libro, e lasciare finire le attività programmate (widget e promemoria).' },
          { icon: 'ad',    name: 'AD_ID · ACCESS_ADSERVICES_*', desc: 'Aggiunti dall’SDK di AdMob: leggere l’identificativo pubblicitario e usare le API pubblicitarie di Android. Puoi eliminare o limitare l’identificativo nelle impostazioni di Android.' },
          { icon: 'cart',  name: 'BILLING',              desc: 'Aggiunto dalla libreria di pagamento di Google Play. Oggi non è usato: l’acquisto senza pubblicità non è attivo.' },
          { icon: 'link',  name: 'BIND_GET_INSTALL_REFERRER_SERVICE', desc: 'Aggiunto da Firebase Analytics per sapere se l’app è stata installata da Google Play. Non riceve nulla della tua biblioteca.' }
        ],
        callout: 'Balda non chiede il permesso di accesso alla memoria. I libri entrano dal selettore di sistema — scegli un file o concedi una cartella — oppure perché li apri con Balda da un’altra app, e l’app vede solo quello che le dai.',
        outro: 'Non è un tecnicismo: significa che l’app non potrebbe scorrere la tua galleria, i tuoi documenti o i tuoi download nemmeno volendo. C’è poi un permesso interno di AndroidX (DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION) che non dà accesso a nulla: impedisce ad altre app di inviare segnali a Balda.'
      },
      {
        id: 'payments', num: '09', kicker: 'Pagamenti', title: 'Acquisti e premi',
        body: 'Oggi l’app è gratuita e non elabora alcun pagamento. I temi a pagamento dei ripiani si sbloccano guardando un annuncio con premio: una scelta volontaria, avviata da te, che dura 24 ore.',
        outro: 'Se in futuro verrà offerto l’acquisto «senza pubblicità», lo gestirà Google Play Billing dall’inizio alla fine: i dati di pagamento li tratta Google e Balda non li vede né li conserva. Sul telefono resterebbe solo un indicatore cifrato dell’esistenza dell’acquisto.'
      },
      {
        id: 'children', num: '10', kicker: 'Minori', title: 'Minori',
        body: 'Balda non è rivolta ai minori di 13 anni e non raccoglie consapevolmente informazioni sui minori. Se sei un genitore o un tutore e pensi che un minore a tuo carico abbia fornito dati personali tramite l’app, scrivici e risolveremo subito.'
      },
      {
        id: 'rights', num: '11', kicker: 'I tuoi diritti', title: 'Il controllo sui tuoi dati',
        body: 'Poiché non ci sono server né account, non conserviamo alcun tuo dato di cui tu possa chiederci copia o cancellazione: il controllo è diretto e nelle tue mani.',
        list: [
          'Eliminare un libro, un’annotazione o l’intera biblioteca dall’app',
          'Esportare le tue annotazioni quando vuoi, in un file che resta sul tuo dispositivo',
          'Salvare un backup di tutta la tua biblioteca in un file e ripristinarlo su un altro telefono',
          'Spegnere la diagnostica in Impostazioni → Diagnostica',
          'Reimpostare o eliminare l’identificativo pubblicitario dalle impostazioni di Android',
          'Disinstallare l’app, che elimina completamente database, preferenze e copie dei libri'
        ],
        outro: 'Per i dati trattati da Google AdMob e Firebase come titolari, puoi esercitare i tuoi diritti tramite i controlli del tuo account Google indicati sopra. Se hai dubbi, scrivici e ti aiutiamo.'
      },
      {
        id: 'retention', num: '12', kicker: 'Conservazione', title: 'Quanto durano i dati',
        body: 'I dati locali durano quanto vuoi tu: restano sul dispositivo finché non li elimini o disinstalli l’app. L’audio della lettura ad alta voce si cancella appena riprodotto, e quello rimasto quando ti fermi. Non abbiamo copia di nulla, quindi dalla nostra parte non c’è niente da conservare.',
        outro: 'I dati raccolti da AdMob, Crashlytics e Analytics li conserva Google secondo le proprie norme — i rapporti sugli arresti anomali circa 90 giorni e i dati di Analytics fino a 14 mesi, per impostazione predefinita —, non noi.'
      },
      {
        id: 'security', num: '13', kicker: 'Sicurezza', title: 'Come è protetto ciò che sta sul telefono',
        body: 'La biblioteca e le preferenze vivono nella memoria privata dell’app, a cui Android impedisce l’accesso alle altre app. Lo stato dell’acquisto è cifrato con AES-256-GCM tramite l’archivio chiavi del dispositivo.',
        warn: 'Il backup è un file .zip non cifrato: chi lo possiede può vedere la tua biblioteca e le tue annotazioni, quindi conservalo in un posto di cui ti fidi. Non include lo stato dell’acquisto, che dipende dalle chiavi di questo telefono.',
        outro: 'L’app non apre connessioni in entrata e non espone i tuoi dati in rete. Detto questo, nessun sistema è infallibile: tieni il dispositivo aggiornato e bloccato.'
      },
      {
        id: 'changes', num: '14', kicker: 'Modifiche', title: 'Modifiche a questa informativa',
        body: 'Se l’app cambia ciò che fa con i dati — un nuovo SDK, l’acquisto senza pubblicità attivo, un altro prodotto Firebase, un nuovo permesso —, questa pagina viene aggiornata insieme alla scheda di Google Play e la data in alto lo indica. In vigore dal 24 settembre 2026.',
        outro: 'Continuando a usare l’app dopo un aggiornamento di questa informativa, accetti la versione in vigore.'
      },
      {
        id: 'contact', num: '15', kicker: 'Contatti', title: 'Scrivici',
        body: 'Per qualsiasi domanda su questa informativa, su cosa fa l’app con i tuoi dati o su come esercitare i tuoi diritti, a questo indirizzo:',
        email: 'danibarea@gmail.com'
      }
    ],

    footer: {
      tagline: 'I tuoi libri e la tua lettura non escono dal telefono.',
      copy: '© 2026 Balda · Daniel Barea',
      links: ['Home', 'Contatti', 'Google Play']
    }
  },

  pt: {
    dir: 'ltr', name: 'Português (Brasil)', flag: '🇧🇷', short: 'PT', htmlLang: 'pt-BR',

    nav: { home: 'Início', policy: 'Privacidade', back: '← Voltar ao app' },

    hero: {
      eyebrow: 'Política de privacidade',
      title: 'Seus livros. Sua leitura. Seu dispositivo.',
      sub: 'Sua biblioteca, seu progresso, suas anotações e suas estatísticas ficam no celular e nunca são enviados. Só saem os anúncios, os relatórios de falha — se você não os desligar — e o que você decidir enviar.',
      meta: 'Última atualização: 24 de setembro de 2026',
      author: 'Balda · por Daniel Barea',
      tldr: 'Sem conta · nenhum servidor próprio · seus livros nunca são enviados · AdMob para os anúncios e Firebase para as falhas, com botão para desligar · o backup e o que você compartilha vão para onde você mandar.'
    },

    toc: 'Índice',

    sections: [
      {
        id: 'principle', num: '01', kicker: 'O princípio', title: 'O que «não sai do celular» significa',
        body: 'Balda é um leitor de livros que funciona inteiro no seu dispositivo. Não há conta de usuário, cadastro nem servidor nosso ao qual o app se conecte. Os livros que você importa, onde você parou, o que você grifa e as estatísticas da sua leitura ficam no banco de dados do próprio celular e não vão para lugar nenhum.',
        callout: 'A frase é literal: o app nunca transmite por conta própria o conteúdo dos seus livros nem seus dados de leitura para um servidor, nosso ou de terceiros. O que sai do dispositivo são os anúncios, os diagnósticos e o que você decide enviar, e esta política dedica uma seção a cada um.'
      },
      {
        id: 'ondevice', num: '02', kicker: 'No seu dispositivo', title: 'O que é guardado, e onde fica',
        body: 'Tudo isto vive no armazenamento privado do app — banco de dados, preferências e arquivos — e só pode ser acessado do seu dispositivo:',
        list: [
          'Sua biblioteca: título, autor, formato, capa e uma cópia de cada livro que você importa',
          'O progresso de leitura de cada livro, página por página',
          'Suas sessões de leitura, de onde saem as estatísticas, as sequências e as previsões',
          'Grifos, notas e marcadores, com a cor e a posição no texto',
          'Coleções, prateleiras da estante e metas de leitura',
          'Preferências: fonte, tamanho, entrelinha, margens, tema, velocidade da voz e, se você ativar, o horário do lembrete',
          'Enquanto você ouve um livro, o áudio das próximas frases, em uma pasta temporária que se esvazia conforme tocam'
        ],
        callout: 'Nada desta lista é enviado para servidor algum, nem para o nosso — que não existe — nem para o de ninguém. Tudo é apagado ao desinstalar o app.',
        outro: 'Ao importar um livro, o app guarda uma cópia no armazenamento privado para que ele continue abrindo mesmo se você mover ou apagar o original. Essa cópia também não sai do celular e é removida quando você apaga o livro da biblioteca.'
      },
      {
        id: 'offdevice', num: '03', kicker: 'O que sai', title: 'Os dois únicos serviços que recebem dados',
        body: 'Balda usa dois SDKs do Google que rodam dentro do app e falam com os servidores do Google, não com os nossos:',
        list: [
          'Google AdMob, para mostrar os anúncios que mantêm o app gratuito',
          'Firebase Crashlytics e Firebase Analytics, para saber que o app falhou e em qual tela'
        ],
        outro: 'Não há nenhum outro. Nada de Firestore, Storage, Auth ou mensagens: nada que possa sincronizar o seu conteúdo. Além desses dois serviços, só sai o que você envia, explicado na próxima seção.'
      },
      {
        id: 'yours', num: '04', kicker: 'O que você envia', title: 'O que só sai se você decidir',
        body: 'Alguns recursos tiram dados do Balda, sempre porque você pede e para onde você escolhe:',
        list: [
          'Backup: um arquivo .zip com sua biblioteca — e, se você quiser, os próprios livros — que você salva onde quiser pelo seletor do Android. Se escolher uma pasta do Google Drive ou de outra nuvem, o backup fica nesse serviço, sob a política dele; o Balda não o envia para lugar nenhum',
          'Compartilhar: os cards de sequência, meta, mês ou ano, as citações e as anotações exportadas saem pela planilha de compartilhamento do Android, para o app que você escolher e só quando você toca em «Compartilhar». Os cards que mostram o que você lê têm um botão para esconder títulos e capas',
          'Abrir com: quando você abre um livro a partir de outro app (WhatsApp, e-mail, gerenciador de arquivos), o Balda recebe esse arquivo e guarda uma cópia no celular. Não envia nada de volta',
          'Dicionário e tradução: ao selecionar texto, o menu do Android oferece os apps que você tem instalados. O texto selecionado só chega ao que você tocar',
          'Avaliação: de vez em quando, ao fechar um livro, pode aparecer a caixa de avaliação do Google Play. Quem a mostra e gerencia é o Google Play; se você escrever uma avaliação, o Google a publica com sua conta do Play'
        ],
        warn: 'Leitura em voz alta: para ler um livro para você, o Balda passa o texto de cada frase ao mecanismo de voz do Android que você tem instalado — Serviços de voz do Google, o da Samsung ou outro — e toca o áudio que ele devolve. Com a voz baixada no celular, tudo acontece no dispositivo. Se o seu mecanismo usar vozes on-line, esse texto é processado pelo fornecedor dele, segundo a política dele; você pode baixar a voz ou trocar de mecanismo nas configurações do Android → Conversão de texto em voz. O Balda não envia o texto para servidor algum.'
      },
      {
        id: 'ads', num: '05', kicker: 'Publicidade', title: 'Google AdMob',
        body: 'O app é gratuito e se mantém com anúncios, veiculados pelo Google AdMob. O AdMob pode coletar o identificador de publicidade do dispositivo, dados técnicos (modelo, versão do Android, idioma), o endereço IP — do qual se deduz uma localização aproximada, nunca precisa — e suas interações com os anúncios. O Google faz esse tratamento como controlador, segundo suas próprias políticas.',
        body2: 'Antes de pedir o primeiro anúncio, o app mostra um formulário de consentimento. Ele é gerenciado pela plataforma de mensagens para usuários do Google, a CMP certificada exigida pelo AdMob, e aparece para quem está no Espaço Econômico Europeu, no Reino Unido ou na Suíça. Ali você decide se aceita anúncios personalizados ou prefere anúncios não personalizados. Até você responder, o app não inicializa nenhum SDK de anúncios nem faz um único pedido: você não verá publicidade sem ter sido consultado antes.',
        list: [
          'Um banner nas telas de biblioteca, estante, estatísticas e metas',
          'Um intersticial ao fechar um livro, e só se houve leitura de verdade',
          'Anúncios premiados, sempre voluntários, para desbloquear temas de prateleira por 24 horas'
        ],
        callout: 'Dentro do leitor não há publicidade. Nem banner nem interrupção no meio da página. E nos primeiros dias de uso nenhum anúncio de tela cheia aparece — só o vídeo que você escolher assistir para desbloquear um tema; os banners das telas de navegação aparecem desde o início.',
        warn: 'Você pode mudar de ideia quando quiser: em Configurações → Anúncios → Opções de privacidade de anúncios o mesmo formulário é reaberto, e o que você escolher substitui a resposta anterior. Essa opção só aparece onde o formulário é obrigatório; se você não a vê, o consentimento não foi pedido na sua região. Além disso, em Configurações do Android → Google → Anúncios você pode limitar o rastreamento de anúncios ou apagar seu identificador; ao redefini-lo, os anúncios deixam de ser associados ao anterior.',
        links: [
          { label: 'Política de Privacidade do Google', href: 'https://policies.google.com/privacy' },
          { label: 'Como o Google usa os dados do AdMob', href: 'https://support.google.com/admob/answer/6128543' },
          { label: 'Configurações de anúncios do Google', href: 'https://adssettings.google.com' }
        ]
      },
      {
        id: 'diagnostics', num: '06', kicker: 'Diagnóstico', title: 'Firebase Crashlytics e Analytics',
        body: 'Quando o app falha, o Crashlytics envia um relatório para que o problema seja corrigido. Esse relatório inclui o rastreamento do erro, o modelo do dispositivo, as versões do Android e do app e um identificador de instalação que não identifica você como pessoa. Nas falhas que o próprio app captura — ao importar ou abrir um livro —, os caminhos de arquivo são removidos do relatório antes do envio, porque o nome de um arquivo costuma ser o título de um livro. O Analytics registra, de forma agregada, aberturas do app, telas vistas e recursos usados — por exemplo, que um card foi compartilhado, que um livro foi aberto a partir de outro app ou que o lembrete foi ativado.',
        callout: 'Nem o Crashlytics nem o Analytics recebem o conteúdo dos seus livros, os títulos, seus grifos, suas notas, seu progresso ou o que você está lendo. De um livro aberto a partir de outro app só se registra o formato (EPUB, PDF…); do que você compartilha, só o tipo de card.',
        warn: 'Há um botão em Configurações → Diagnóstico. Ele vem ativado e, se você desligar, o app aplica sua decisão a cada inicialização antes que qualquer coisa possa ser enviada. Desligar não afeta nenhum recurso de leitura.',
        links: [
          { label: 'Privacidade e segurança no Firebase', href: 'https://firebase.google.com/support/privacy' },
          { label: 'Dados que o Crashlytics coleta', href: 'https://firebase.google.com/support/privacy#crashlytics' }
        ]
      },
      {
        id: 'nocollect', num: '07', kicker: 'O que não coletamos', title: 'Dados que o app não pede nem envia',
        body: 'O Balda não coleta, armazena nem transmite nenhum dos seguintes dados:',
        nope: [
          'Seu nome ou identidade',
          'Seu e-mail',
          'Seu número de telefone',
          'Localização precisa ou GPS',
          'O conteúdo dos seus livros',
          'Seus grifos e notas',
          'Qual livro você está lendo',
          'Contatos ou agenda',
          'Fotos, microfone ou câmera',
          'Dados biométricos',
          'Histórico de navegação',
          'Contas de outros apps'
        ]
      },
      {
        id: 'perms', num: '08', kicker: 'Permissões', title: 'As permissões que o app declara',
        body: 'Estas são todas as permissões que o app acaba declarando — as dele e as que as bibliotecas do Google que ele usa acrescentam —, e para que serve cada uma:',
        perms: [
          { icon: 'globe', name: 'INTERNET',             desc: 'Baixar os anúncios e enviar os relatórios de falha. Nenhum recurso de leitura precisa dela.' },
          { icon: 'wifi',  name: 'ACCESS_NETWORK_STATE', desc: 'Saber se há conexão antes de pedir um anúncio, para não gastar bateria tentando sem rede.' },
          { icon: 'bell',  name: 'POST_NOTIFICATIONS',   desc: 'O lembrete de leitura, se você ativar. É pedida ao ativar, nunca ao abrir o app; você pode negar e o app funciona igual.' },
          { icon: 'play',  name: 'FOREGROUND_SERVICE · MEDIA_PLAYBACK', desc: 'Continuar lendo em voz alta com a tela apagada, com os controles na notificação. Só enquanto você ouve um livro.' },
          { icon: 'moon',  name: 'WAKE_LOCK',            desc: 'Evitar que o celular durma entre uma frase e outra enquanto você ouve um livro, e deixar terminar as tarefas programadas (widgets e lembrete).' },
          { icon: 'ad',    name: 'AD_ID · ACCESS_ADSERVICES_*', desc: 'Acrescentadas pelo SDK do AdMob: ler o identificador de publicidade e usar as APIs de publicidade do Android. Você pode apagar ou limitar o identificador nas configurações do Android.' },
          { icon: 'cart',  name: 'BILLING',              desc: 'Acrescentada pela biblioteca de pagamentos do Google Play. Hoje não é usada: a compra sem anúncios não está ativa.' },
          { icon: 'link',  name: 'BIND_GET_INSTALL_REFERRER_SERVICE', desc: 'Acrescentada pelo Firebase Analytics para saber se o app foi instalado pelo Google Play. Não recebe nada da sua biblioteca.' }
        ],
        callout: 'O Balda não pede permissão de acesso ao armazenamento. Os livros entram pelo seletor do sistema — você escolhe um arquivo ou libera uma pasta — ou porque você os abre com o Balda a partir de outro app, e o app só vê o que você entrega.',
        outro: 'Isso não é detalhe técnico: significa que o app não conseguiria percorrer sua galeria, seus documentos ou seus downloads nem se quisesse. Há ainda uma permissão interna do AndroidX (DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION) que não dá acesso a nada: impede que outros apps enviem avisos ao Balda.'
      },
      {
        id: 'payments', num: '09', kicker: 'Pagamentos', title: 'Compras e recompensas',
        body: 'Hoje o app é gratuito e não processa nenhum pagamento. Os temas de prateleira pagos são desbloqueados assistindo a um anúncio premiado — algo voluntário, iniciado por você, que dura 24 horas.',
        outro: 'Se no futuro for oferecida a compra «sem anúncios», o Google Play Billing cuidará dela do começo ao fim: os dados de pagamento são tratados pelo Google e o Balda não os vê nem os guarda. No celular ficaria só um indicador criptografado de que a compra existe.'
      },
      {
        id: 'children', num: '10', kicker: 'Menores', title: 'Menores de idade',
        body: 'O Balda não é destinado a menores de 13 anos e não coleta intencionalmente informações de menores. Se você é pai, mãe ou responsável e acredita que um menor sob seus cuidados forneceu dados pessoais pelo app, escreva para nós e resolveremos imediatamente.'
      },
      {
        id: 'rights', num: '11', kicker: 'Seus direitos', title: 'Controle sobre seus dados',
        body: 'Como não temos servidor nem conta, não guardamos nenhum dado seu do qual você possa pedir cópia ou exclusão: o controle é direto e está nas suas mãos.',
        list: [
          'Apagar um livro, uma anotação ou a biblioteca inteira pelo próprio app',
          'Exportar suas anotações quando quiser, em um arquivo que fica no seu dispositivo',
          'Salvar um backup de toda a sua biblioteca em um arquivo e restaurá-lo em outro celular',
          'Desligar os diagnósticos em Configurações → Diagnóstico',
          'Redefinir ou apagar seu identificador de publicidade nas configurações do Android',
          'Desinstalar o app, o que apaga por completo o banco de dados, as preferências e as cópias dos livros'
        ],
        outro: 'Sobre os dados que o Google AdMob e o Firebase tratam como controladores, você pode exercer seus direitos pelos controles da sua conta do Google indicados acima. Se tiver dúvidas, escreva para nós e ajudamos.'
      },
      {
        id: 'retention', num: '12', kicker: 'Retenção', title: 'Por quanto tempo os dados duram',
        body: 'Os dados locais duram o quanto você quiser: ficam no dispositivo até você apagá-los ou desinstalar o app. O áudio da leitura em voz alta é apagado assim que toca, e o que sobrar, ao parar. Não temos cópia de nada, então não há nada a guardar do nosso lado.',
        outro: 'Os dados coletados pelo AdMob, Crashlytics e Analytics são mantidos pelo Google segundo as próprias políticas de retenção — os relatórios de falha por cerca de 90 dias e os dados do Analytics por até 14 meses, por padrão —, não por nós.'
      },
      {
        id: 'security', num: '13', kicker: 'Segurança', title: 'Como é protegido o que está no celular',
        body: 'A biblioteca e as preferências vivem no armazenamento privado do app, que o Android mantém fora do alcance de outros apps. O estado da compra é criptografado com AES-256-GCM usando o repositório de chaves do próprio dispositivo.',
        warn: 'O backup é um arquivo .zip sem criptografia: quem o tiver pode ver sua biblioteca e suas anotações, então guarde-o em um lugar de confiança. Ele não inclui o estado da compra, que depende das chaves deste celular.',
        outro: 'O app não abre conexões de entrada nem expõe seus dados na rede. Dito isso, nenhum sistema é infalível: mantenha o dispositivo atualizado e com bloqueio de tela.'
      },
      {
        id: 'changes', num: '14', kicker: 'Alterações', title: 'Alterações nesta política',
        body: 'Se o app mudar o que faz com os dados — um SDK novo, a compra sem anúncios ativada, outro produto do Firebase, uma permissão nova —, esta página é atualizada junto com a página do Google Play, e a data acima mostra isso. Em vigor desde 24 de setembro de 2026.',
        outro: 'Ao continuar usando o app depois de uma atualização desta política, você aceita a versão em vigor.'
      },
      {
        id: 'contact', num: '15', kicker: 'Contato', title: 'Escreva para nós',
        body: 'Qualquer dúvida sobre esta política, sobre o que o app faz com seus dados ou sobre como exercer seus direitos, neste endereço:',
        email: 'danibarea@gmail.com'
      }
    ],

    footer: {
      tagline: 'Seus livros e sua leitura não saem do celular.',
      copy: '© 2026 Balda · Daniel Barea',
      links: ['Início', 'Contato', 'Google Play']
    }
  }
};
