/* =====================================================================
   TEMPORADAS DE NOSOTROS — ARCHIVO DE CONFIGURACIÓN
   ---------------------------------------------------------------------
   ÚNICO archivo que hay que editar por cliente.
   - Todo lo que aparece entre corchetes [ASÍ] es un dato [PENDIENTE].
   - Las fotos van en /assets/fotos/ (WebP recomendado, 1600px de ancho
     para portadas y 800px para miniaturas). Si una ruta queda vacía ""
     se muestra una portada generada automáticamente.
   - Los textos usan ${P.nombreB}, ${P.ciudad}, etc. para rellenarse solos.
   ===================================================================== */
window.TDN = (function () {

  /* -------------------------------------------------------------
     1. DATOS DE LA PAREJA  [PENDIENTE: reemplazar todo]
     ------------------------------------------------------------- */
  const P = {
    // DEMO: datos de ejemplo inventados, reemplazar con los del cliente
    nombreA: "Diego",                 // Quien regala
    nombreB: "Sofía",                 // Quien recibe (protagonista)
    apodos: ["Bonita", "Sofi"],     // El primero se usa en textos; todos valen como respuesta
    fechaInicio: "2021-03-20",        // AAAA-MM-DD (también es la respuesta del código secreto)
    aniosManual: 0,                   // Si quieres forzar los años juntos, pon un número (> 0)
    ciudad: "Guadalajara",            // Ciudad donde se conocieron
    primeraCita: "Café Palermo",
    cancion: "Baila Mi Corazón",
    artista: "Belanova",
    viajes: ["Puerto Vallarta", "Guanajuato", "Cancún"],   // En orden cronológico
    dificiles: ["Los meses a distancia en la pandemia", "La mudanza a una ciudad nueva"],
    anecdota: "Nos quedamos encerrados fuera del depa, en pijama, a las 2 de la mañana",
    culpableAnecdota: 0,              // 0 = A, 1 = B, 2 = "Los dos" (respuesta correcta del quiz de la T6)
    gustosB: ["Café de olla", "Atardeceres", "Series de misterio", "Tacos al pastor"],
    suenos: ["Conocer Japón", "Adoptar un perrito", "Tener nuestra casa"],
    mensajeFinal: "Gracias por elegirme todos los días, incluso los difíciles. Contigo aprendí que el amor no es una película perfecta: es una serie larga, con capítulos chistosos, otros que duelen y muchos que quiero repetir. Esta temporada apenas empieza y no me imagino a nadie más como protagonista. Te amo, Bonita."
  };

  // --- Valores calculados (no tocar) ---
  const inicio = new Date(P.fechaInicio + "T00:00:00");
  P.anioInicio = inicio.getFullYear();
  P.anios = P.aniosManual || Math.max(1, Math.floor((Date.now() - inicio) / 31557600000));
  P.fechaCodigo = String(inicio.getDate()).padStart(2, "0") +
                  String(inicio.getMonth() + 1).padStart(2, "0") + P.anioInicio; // DDMMAAAA
  P.apodo = P.apodos[0];

  /* -------------------------------------------------------------
     2. FOTOS  [PENDIENTE: rutas tipo "assets/fotos/hero.webp"]
     ------------------------------------------------------------- */
  const F = {
    hero: "assets/fotos/hero.webp",                   // La foto más significativa (portada principal)
    perfilB: "assets/fotos/perfil-b.webp",            // Avatar del perfil de B (cuadrada)
    perfilPareja: "assets/fotos/perfil-pareja.webp",  // Avatar "Tú y yo" (cuadrada)
    t0: "assets/fotos/t0.webp", t1: "assets/fotos/t1.webp", t2: "assets/fotos/t2.webp",
    t3: "assets/fotos/t3-concierto.webp", t4: "assets/fotos/t4.webp", t5: "assets/fotos/t5.webp",
    t6: "assets/fotos/t6.webp", t7: "assets/fotos/t7.webp", final: "assets/fotos/final.webp",
    puzzle: "assets/fotos/puzzle.webp",               // Foto para el rompecabezas (cuadrada, mín. 900x900)
    puzzle2: "",
    postCreditos: "assets/fotos/post-creditos.webp"
  };

  /* -------------------------------------------------------------
     3. AUDIO / VIDEO  [PENDIENTE]
     ------------------------------------------------------------- */
  const M = {
    intro: "assets/audio/intro.mp3", // Sonido del logo; sustituye este archivo para otro cliente
    temporadas: [       // Un archivo por temporada (0–7); se pueden reemplazar sin cambiar el código
      "assets/audio/temporada-0.mp3", "assets/audio/temporada-1.mp3",
      "assets/audio/temporada-2.mp3", "assets/audio/temporada-3.mp3",
      "assets/audio/temporada-4.mp3", "assets/audio/temporada-5.mp3",
      "assets/audio/temporada-6.mp3", "assets/audio/temporada-7.mp3"
    ],
    canciones: [        // Título visible de la canción asignada a cada temporada
      "Can't Help Falling In Love — Elvis Presley",
      "Just The Way You Are — Bruno Mars",
      "Your Song — Rita Ora",
      "Baila Mi Corazón — Belanova",
      "Al Aire — Morat",
      "You & I — One Direction",
      "you! — LANY",
      "Lover — Taylor Swift"
    ],
    musica: "",         // Música de respaldo si una temporada no tiene archivo
    videoFinal: "assets/video/final.mp4", // Video oculto de la Temporada Final: MP4 local o enlace de YouTube
    audioRemitente: ""  // Nota de voz de A (se reproduce en la Temporada Final). Vacío = no se muestra
  };

  /* -------------------------------------------------------------
     4. ACCESO, ESTRENO Y NOTIFICACIÓN
     ------------------------------------------------------------- */
  const acceso = {
    demo: true,                         // true = cualquier contraseña, fecha o respuesta es válida (solo para demostración). Poner false al entregar
    password: "bonita",                 // "" = sin contraseña
    pistaPassword: "Cómo te digo siempre (en minúsculas)",
    estreno: ""                         // "2026-02-14T20:00:00" (hora local). "" = disponible ya
  };

  const notificacion = {
    whatsapp: "",   // [PENDIENTE] Número con código de país, solo dígitos: "5215512345678"
    email: "",      // [PENDIENTE] Respaldo si no hay WhatsApp
    endpoint: ""    // Opcional: URL que recibe un POST JSON (ej. "https://formsubmit.co/ajax/tu@correo.com")
  };

  const sitio = {
    url: "",                       // [PENDIENTE] URL pública final (se usa en el QR imprimible)
    coincidencia: 98,              // "98% para ti"
    clasificacion: "+13",          // Etiqueta de edad
    clasificacionTexto: "Romance, besos, cursilería",
    heroTag: "NUEVA TEMPORADA",    // o "ESTRENO"
    heroTop: "N.º 1 en tu corazón hoy",
    sinopsis: `${P.nombreB} y ${P.nombreA} protagonizan la historia que empezó en ${P.ciudad}. ` +
              `${P.anios} ${P.anios === 1 ? "año" : "años"}, risas, viajes y alguna tormenta. ` +
              `Una serie original hecha solo para ti, ${P.apodo}.`,
    generos: ["Romántica", "Comedia", "Basada en hechos reales"],
    filaRecomendada: "Nuestro primer año" // Título usado en "Porque viste '…'"
  };

  /* -------------------------------------------------------------
     5. TEMPORADAS Y EPISODIOS
     ---------------------------------------------------------------
     Cada episodio:
       titulo, descripcion, duracion (segundos simulados, 60–120)
       escenas: [{ img, poster, texto: [frase1, frase2] }]
       Cada escena ocupa una parte igual del episodio; sus frases se alternan sin detener el video.
       interaccion: { tipo, ... }        → juego independiente en juegos.html
       recompensa: texto que se desbloquea al terminar
     Tipos de interacción disponibles:
       quiz · memory · puzzle · sopa · rascar · codigo · ordenar · adivinanza · completar
     ------------------------------------------------------------- */
  const temporadas = [
    /* ---------------- TEMPORADA 0 ---------------- */
    {
      num: 0, titulo: "Piloto: Antes de Nosotros", anio: P.anioInicio - 1, clasificacion: "TP",
      imagen: F.t0, musica: M.temporadas[0], top10: false,
      sinopsis: `Dos vidas paralelas que aún no se cruzan. ${P.nombreA} en su mundo, ${P.nombreB} en el suyo. ` +
                `Nadie sabe todavía que el guion ya estaba escrito.`,
      episodios: [{
        titulo: "Dos historias paralelas", duracion: 70,
        descripcion: `Antes de ser "nosotros", había dos personas que no sabían que se estaban buscando.`,
        escenas: [
          { img: "assets/video/guadalajara.mp4", poster: "assets/fotos/escenas/s00.webp", texto: [`${P.ciudad}. Dos historias avanzaban por separado.`, `Sin saberlo, caminaban hacia el mismo capítulo.`] },
          { img: "assets/video/escenas/esc00.mp4", poster: "assets/fotos/escenas/s01.webp", texto: [`${P.nombreA} tenía sus rutinas y sus planes.`, `Creía que no le faltaba nada.`] },
          { img: "assets/video/antes-ana.mp4", poster: "assets/fotos/escenas/s02.webp", texto: [`${P.nombreB} también estaba escribiendo su propia historia.`, `Ninguno conocía aún el nombre del otro.`] },
          { img: "assets/video/escenas/esc02.mp4", poster: "assets/fotos/escenas/s03.webp", texto: [`Dos vidas. La misma ciudad.`, `Una coincidencia esperando su momento.`] },
          { img: "assets/video/escenas/esc01.mp4", poster: "assets/fotos/escenas/s04.webp", texto: [`Parece un día más...`, `Pero el siguiente episodio lo cambia todo.`] }
        ],
        interaccion: {
          tipo: "completar", frase: "Todo estaba a punto de empezar en ___",
          opciones: [P.ciudad, "Marte", "Una telenovela"], correcta: 0,
          ok: `Exacto. ${P.ciudad}, la locación del piloto.`
        },
        recompensa: "Desbloqueaste: el permiso oficial para empezar la serie 🎬"
      }]
    },

    /* ---------------- TEMPORADA 1 ---------------- */
    {
      num: 1, titulo: "El Encuentro", anio: P.anioInicio, clasificacion: "TP",
      imagen: F.t1, musica: M.temporadas[1], top10: true,
      sinopsis: `En ${P.ciudad}, una mirada lo cambia todo. ${P.nombreA} no sabe qué decir; ` +
                `${P.nombreB} no sabe que ya le gusta. La química es innegable.`,
      episodios: [
        {
          titulo: "La primera mirada", duracion: 75,
          descripcion: `${P.ciudad}. Un día cualquiera que dejó de serlo.`,
          escenas: [
            { img: "assets/video/escenas/n05.mp4", poster: "assets/fotos/escenas/s05.webp", texto: [`${P.ciudad}. Parecía un día cualquiera.`, `Hasta que entraste en cuadro.`] },
            { img: "assets/video/escenas/n06b.mp4", poster: "assets/fotos/escenas/s06b.webp", texto: [`La ciudad siguió a su ritmo.`, `Nosotros nos detuvimos un segundo.`] },
            { img: "assets/video/encuentro.mp4", poster: "assets/fotos/escenas/s07.webp", texto: [`Primero fue una mirada.`, `Luego un «hola» que sonó diferente.`] },
            { img: "assets/video/escenas/esc03.mp4", poster: "assets/fotos/escenas/s08.webp", texto: [`¿Tú también lo notaste?`, `${P.nombreA} supo que quería volver a verte.`] },
            { img: "assets/video/escenas/n09.mp4", poster: "assets/fotos/escenas/s09.webp", texto: [`Esa noche cada quien tomó su camino.`, `Pero algo ya nos había encontrado.`] }
          ],
          interaccion: {
            tipo: "adivinanza",
            texto: "Llegó sin avisar, se quedó sin pedir permiso y desde entonces no se ha ido. ¿Qué es?",
            respuestas: ["amor", "el amor", "tu", "tú", "nosotros", P.nombreB, ...P.apodos],
            pista: "Cuatro letras. Empieza con A.",
            ok: "Exacto: el amor (y tú)."
          },
          recompensa: "Cupón: un abrazo de 30 segundos sin soltar 🤗"
        },
        {
          titulo: "El primer mensaje", duracion: 75,
          descripcion: "Una fecha que se volvió contraseña, aniversario y excusa para celebrar.",
          escenas: [
            { img: "assets/video/escenas/n10.mp4", poster: "assets/fotos/escenas/s10.webp", texto: [`El teléfono estaba ahí.`, `Faltaba reunir valor para escribir.`] },
            { img: "assets/video/escenas/esc04.mp4", poster: "assets/fotos/escenas/s11.webp", texto: [`Escribir. Borrar. Volver a escribir.`, `Al final, ${P.nombreA} pulsó enviar.`] },
            { img: "assets/video/escenas/n12.mp4", poster: "assets/fotos/escenas/s12.webp", texto: [`Ahora tocaba esperar.`, `Cada notificación parecía importante.`] },
            { img: "assets/video/primer-mensaje.mp4", poster: "assets/fotos/escenas/s13.webp", texto: [`Entonces llegó tu respuesta.`, `Y la conversación ya no quiso terminar.`] },
            { img: "assets/video/escenas/esc05.mp4", poster: "assets/fotos/escenas/s14.webp", texto: [`Ese día quedó marcado en el calendario.`, `El primero de muchos que celebraríamos.`] }
          ],
          interaccion: {
            tipo: "codigo", modo: "fecha",
            pregunta: "Introduce el código secreto: la fecha en que empezó todo",
            placeholder: "DDMMAAAA",
            respuestas: [P.fechaCodigo],
            pista: `Es el día en que se estrenó esta serie (${P.anioInicio}).`,
            ok: "Código aceptado. Esa fecha es nuestra."
          },
          recompensa: "Desbloqueaste: Temporada 2 — La Primera Cita 💌"
        }
      ]
    },

    /* ---------------- TEMPORADA 2 ---------------- */
    {
      num: 2, titulo: "La Primera Cita", anio: P.anioInicio, clasificacion: "TP",
      imagen: F.t2, musica: M.temporadas[2], top10: true,
      sinopsis: `Nervios, ropa elegida tres veces y una mesa en ${P.primeraCita}. ` +
                `La primera cita que se convirtió en la primera de muchas.`,
      episodios: [
        {
          titulo: "Mesa para dos", duracion: 80,
          descripcion: "Los nervios, la ropa elegida tres veces y una conversación que no queríamos terminar.",
          escenas: [
            { img: "assets/video/preparativos.mp4", poster: "assets/fotos/escenas/s15.webp", texto: [`Primera cita. Tres cambios de ropa.`, `Y los nervios que no cabían en el espejo.`] },
            { img: "assets/video/escenas/n16.mp4", poster: "assets/fotos/escenas/s16.webp", texto: [`Un último vistazo antes de salir.`, `¿Y si esto resultaba ser especial?`] },
            { img: "assets/video/escenas/esc07.mp4", poster: "assets/fotos/escenas/s17.webp", texto: [`En ${P.primeraCita} esperaba una mesa para dos.`, `El café se sirvió. Las manos seguían temblando.`] },
            { img: "assets/video/primera-cita.mp4", poster: "assets/fotos/escenas/s18.webp", texto: [`La primera risa rompió el hielo.`, `La conversación tomó su propio rumbo.`] },
            { img: "assets/video/escenas/esc08.mp4", poster: "assets/fotos/escenas/s19.webp", texto: [`Pedimos unos minutos más.`, `Ninguno quería despedirse todavía.`] }
          ],
          interaccion: {
            tipo: "quiz", pregunta: "¿Dónde fue nuestra primera cita?",
            opciones: [P.primeraCita, "Un cine en Plaza Galerías", "La taquería de la esquina"], correcta: 0,
            ok: `¡Sí! ${P.primeraCita}. Lugar sagrado desde entonces.`
          },
          recompensa: "Cupón: repetimos la primera cita, mismo lugar 🍽️"
        },
        {
          titulo: "Lo que nos hizo clic", duracion: 75,
          descripcion: "Pequeñas cosas que se repiten hasta volverse nuestras.",
          escenas: [
            { img: "assets/video/escenas/n20.mp4", poster: "assets/fotos/escenas/s20.webp", texto: [`Después vinieron los encuentros sin plan.`, `Y el deseo de repetirlos.`] },
            { img: "assets/video/cafe.mp4", poster: "assets/fotos/escenas/s21.webp", texto: [`Un café compartido parecía poca cosa.`, `Hasta que se volvió parte de nosotros.`] },
            { img: "assets/video/cotidiano.mp4", poster: "assets/fotos/escenas/s22.webp", texto: [`Aprendimos a estar juntos en silencio.`, `También a reírnos de cualquier detalle.`] },
            { img: "assets/video/escenas/n23.mp4", poster: "assets/fotos/escenas/s23.webp", texto: [`Lo casual se volvió costumbre.`, `Y la costumbre empezó a sentirse como hogar.`] },
            { img: "assets/video/escenas/esc16.mp4", poster: "assets/fotos/escenas/s24.webp", texto: [`No hubo un gran anuncio.`, `Solo un día en que ya éramos «nosotros».`] }
          ],
          interaccion: {
            tipo: "memory", titulo: "Encuentra las 6 parejas",
            // Emojis o rutas de imagen ("assets/fotos/m1.webp"). Exactamente 6.
            pares: ["💌", "🎬", "🍿", "✈️", "🎵", "🌙"],
            ok: "¡Todas las parejas! Como nosotros: hechos para encajar."
          },
          recompensa: "Desbloqueaste: maratón de películas, tú eliges 🍿"
        }
      ]
    },

    /* ---------------- TEMPORADA 3 ---------------- */
    {
      num: 3, titulo: "Nuestra Canción", anio: P.anioInicio, clasificacion: "TP",
      imagen: F.t3, musica: M.temporadas[3], top10: false,
      sinopsis: `Hay canciones que se escuchan y otras que se viven. "${P.cancion}" dejó de ser una canción ` +
                `para convertirse en un lugar al que volver.`,
      episodios: [
        {
          titulo: "Play", duracion: 70,
          descripcion: `"${P.cancion}" empezó a sonar y ya nunca fue solo una canción.`,
          escenas: [
            { img: "assets/video/vinilo.mp4", poster: "assets/fotos/escenas/s25.webp", texto: [`Alguien puso música.`, `Y entonces empezó «${P.cancion}».`] },
            { img: "assets/video/escenas/esc09.mp4", poster: "assets/fotos/escenas/s26.webp", texto: [`Tal vez el mundo siguió como siempre.`, `Para mí, ese instante quedó grabado.`] },
            { img: "assets/video/baile-nuestra-cancion.mp4", poster: "assets/fotos/escenas/s27.webp", texto: [`Nos miramos cuando llegó el coro.`, `Sin decirlo, elegimos nuestra canción.`] },
            { img: "assets/video/escenas/n28.mp4", poster: "assets/fotos/escenas/s28.webp", texto: [`Desde entonces, suena distinto.`, `Cada nota me lleva de vuelta a ti.`] },
            { img: "assets/video/escenas/n29.mp4", poster: "assets/fotos/escenas/s29.webp", texto: [`Dale play otra vez.`, `Esta escena siempre merece repetirse.`] }
          ],
          interaccion: {
            tipo: "completar", frase: "Nuestra canción es ___",
            respuestas: [P.cancion], // Sin "opciones" = hay que escribirla
            pista: `La canta ${P.artista}.`,
            ok: `"${P.cancion}". Dale play cuando quieras.`
          },
          recompensa: "Cupón: bailamos nuestra canción en la sala 💃"
        },
        {
          titulo: "Lo que te hace sonreír", duracion: 75,
          descripcion: `Un episodio dedicado a todo lo que le gusta a ${P.nombreB}.`,
          escenas: [
            { img: "assets/video/escenas/n30.mp4", poster: "assets/fotos/escenas/s30.webp", texto: [`Empieza con tu café de olla.`, `Me gusta cómo cambia tu cara con el primer sorbo.`] },
            { img: "assets/video/pizza.mp4", poster: "assets/fotos/escenas/s31.webp", texto: [`Después vienen las ganas de comer juntos.`, `Aunque terminemos robándonos el último bocado.`] },
            { img: "assets/video/escenas/n32.mp4", poster: "assets/fotos/escenas/s32.webp", texto: [`Conozco tus gustos de memoria.`, `Y todavía me encanta descubrir otros nuevos.`] },
            { img: "assets/video/escenas/esc10.mp4", poster: "assets/fotos/escenas/s33.webp", texto: [`Hay días en que basta una tontería.`, `Entonces aparece esa sonrisa tuya.`] },
            { img: "assets/video/risas-juntos.mp4", poster: "assets/fotos/escenas/s34.webp", texto: [`Quiero seguir provocándola.`, `Un capítulo a la vez.`] }
          ],
          interaccion: {
            tipo: "sopa", titulo: "Encuentra las palabras escondidas",
            // 5–8 palabras, solo letras A-Z, sin espacios, máx. 10 letras
            palabras: ["CAFE", "TACOS", "PLAYA", "PERRITO", "SERIES", "BESOS", "JAPON"],
            ok: "¡Todas encontradas! Te conoces tan bien como yo."
          },
          recompensa: "Desbloqueaste: un día entero de tus cosas favoritas ☕"
        }
      ]
    },

    /* ---------------- TEMPORADA 4 ---------------- */
    {
      num: 4, titulo: "Kilómetros", anio: P.anioInicio + 1, clasificacion: "TP",
      imagen: F.t4, musica: M.temporadas[4], top10: true,
      sinopsis: `${P.viajes.join(", ")}. Maletas, aeropuertos y fotos borrosas. ` +
                `Descubrimos que el mejor destino es viajar juntos.`,
      episodios: [
        {
          titulo: "Destino: tú", duracion: 80,
          descripcion: `De ${P.viajes[0]} a donde haga falta.`,
          escenas: [
            { img: "assets/video/vuelo.mp4", poster: "assets/fotos/escenas/s35.webp", texto: [`Hicimos maletas sin saber qué nos esperaba.`, `El primer destino fue ${P.viajes[0]}.`] },
            { img: "assets/video/playa.mp4", poster: "assets/fotos/escenas/s36.webp", texto: [`El mar apareció frente a nosotros.`, `Y la primera foto salió movida, como siempre.`] },
            { img: "assets/video/escenas/esc12.mp4", poster: "assets/fotos/escenas/s37.webp", texto: [`Después vino ${P.viajes[1]}.`, `Calles nuevas, la misma compañía.`] },
            { img: "assets/video/foto-viaje.mp4", poster: "assets/fotos/escenas/s38.webp", texto: [`Guardamos imágenes para acordarnos.`, `Aunque lo mejor pasó fuera de cuadro.`] },
            { img: "assets/video/escenas/n39.mp4", poster: "assets/fotos/escenas/s39.webp", texto: [`También llegó ${P.viajes[2]}.`, `Cambia el lugar; contigo, siempre me siento en casa.`] }
          ],
          interaccion: {
            tipo: "puzzle", titulo: "Arma la foto del viaje",
            imagen: F.puzzle, // Vacío = imagen generada
            ok: "¡Recuerdo restaurado!"
          },
          recompensa: "Cupón: escapada de fin de semana, destino sorpresa ✈️"
        },
        {
          titulo: "Bitácora", duracion: 75,
          descripcion: "Nuestra historia en orden cronológico (o casi).",
          escenas: [
            { img: "assets/video/escenas/esc19b.mp4", poster: "assets/fotos/escenas/s40.webp", texto: [`Abrimos el álbum.`, `Cada foto recuerda una versión de nosotros.`] },
            { img: "assets/video/escenas/n41.mp4", poster: "assets/fotos/escenas/s41.webp", texto: [`La primera página empieza en ${P.ciudad}.`, `Ahí todavía no sabíamos el final.`] },
            { img: "assets/video/escenas/n42.mp4", poster: "assets/fotos/escenas/s42.webp", texto: [`Luego está aquella cita en ${P.primeraCita}.`, `Una mesa pequeña para una historia enorme.`] },
            { img: "assets/video/escenas/esc13.mp4", poster: "assets/fotos/escenas/s43.webp", texto: [`Pasamos páginas y aparecen los viajes.`, `Más caminos, más recuerdos que ordenar.`] },
            { img: "assets/video/viaje-juntos.mp4", poster: "assets/fotos/escenas/s44.webp", texto: [`Mira dónde estamos ahora.`, `Cada paso nos trajo hasta aquí.`] }
          ],
          interaccion: {
            tipo: "ordenar", titulo: "Ordena nuestra historia",
            // En el orden CORRECTO; se muestran desordenados
            eventos: [
              `Nos conocimos en ${P.ciudad}`,
              `Primera cita en ${P.primeraCita}`,
              `Viaje a ${P.viajes[0]}`,
              `Viaje a ${P.viajes[1]}`,
              `Este aniversario`
            ],
            ok: "Línea del tiempo perfecta."
          },
          recompensa: "Desbloqueaste: álbum de fotos impreso de nuestros viajes 📸"
        }
      ]
    },

    /* ---------------- TEMPORADA 5 ---------------- */
    {
      num: 5, titulo: "Tormentas", anio: P.anioInicio + 1, clasificacion: "+13",
      imagen: F.t5, musica: M.temporadas[5], top10: false,
      sinopsis: `No todo fue fácil: ${P.dificiles.join(" y ")}. ` +
                `La temporada más difícil, y la que demostró que lo nuestro aguanta cualquier clima.`,
      episodios: [
        {
          titulo: "Lluvia", duracion: 80,
          descripcion: "Hubo días grises. Este episodio es sobre cómo los atravesamos.",
          escenas: [
            { img: "assets/video/llamada-lluvia.mp4", poster: "assets/fotos/escenas/s45.webp", texto: [`Hubo días que parecían no terminar.`, `${P.dificiles[0]} nos puso a prueba.`] },
            { img: "assets/video/dias-dificiles.mp4", poster: "assets/fotos/escenas/s46.webp", texto: [`A veces no supimos qué decir.`, `El silencio se hizo demasiado largo.`] },
            { img: "assets/video/escenas/esc14.mp4", poster: "assets/fotos/escenas/s47.webp", texto: [`Entonces volvimos a hablarnos.`, `De frente, incluso con miedo.`] },
            { img: "assets/video/reencuentro.mp4", poster: "assets/fotos/escenas/s48.webp", texto: [`Elegimos acercarnos otra vez.`, `No para olvidar: para seguir juntos.`] },
            { img: "assets/video/escenas/esc15.mp4", poster: "assets/fotos/escenas/s49.webp", texto: [`La tormenta no desapareció de golpe.`, `Pero ya no la cruzábamos solos.`] }
          ],
          interaccion: {
            tipo: "rascar", titulo: "Rasca para revelar",
            revelar: `Incluso en "${P.dificiles[0]}", te elegí. Y te volvería a elegir.`,
            imagen: "assets/fotos/e13-1.webp", // Opcional: foto debajo del rasca
            ok: "Siempre."
          },
          recompensa: "Cupón: un día sin preocupaciones, yo me encargo de todo ☔"
        },
        {
          titulo: "Después de la tormenta", duracion: 75,
          descripcion: "Lo que queda cuando pasa: más confianza y un apodo que nadie más usa.",
          escenas: [
            { img: "assets/video/mudanza.mp4", poster: "assets/fotos/escenas/s50.webp", texto: [`Luego vino otra prueba: ${P.dificiles[1]}.`, `Cajas por todas partes y mucho por resolver.`] },
            { img: "assets/video/escenas/n51.mp4", poster: "assets/fotos/escenas/s51.webp", texto: [`Hubo cansancio y dudas.`, `También descubrimos cuánto podíamos apoyarnos.`] },
            { img: "assets/video/escenas/n52.mp4", poster: "assets/fotos/escenas/s52.webp", texto: [`Un abrazo no arregló todo.`, `Pero nos recordó por qué valía la pena.`] },
            { img: "assets/video/escenas/esc20.mp4", poster: "assets/fotos/escenas/s53.webp", texto: [`Poco a poco regresó la calma.`, `Hasta apareció ese apodo que solo yo uso.`] },
            { img: "assets/video/escenas/n54.mp4", poster: "assets/fotos/escenas/s54.webp", texto: [`Salimos del otro lado.`, `Más cerca que antes.`] }
          ],
          interaccion: {
            tipo: "codigo", modo: "texto",
            pregunta: "Código secreto: ¿cómo te digo cuando nadie nos escucha?",
            placeholder: "Escribe el apodo",
            respuestas: P.apodos,
            pista: `Empieza con "${String(P.apodo).replace(/[^\p{L}]/gu, "").charAt(0)}".`,
            ok: `${P.apodo}. Solo yo te digo así.`
          },
          recompensa: "Desbloqueaste: Temporada 6 — Tomas Falsas 😂"
        }
      ]
    },

    /* ---------------- TEMPORADA 6 ---------------- */
    {
      num: 6, titulo: "Tomas Falsas", anio: P.anioInicio + 2, clasificacion: "TP",
      imagen: F.t6, musica: M.temporadas[6], top10: false,
      sinopsis: `Ninguna serie está completa sin bloopers. Incluye: ${P.anecdota}. ` +
                `Advertencia: puede causar risa incontrolable.`,
      episodios: [
        {
          titulo: "La vez que…", duracion: 70,
          descripcion: "La anécdota que contamos en cada reunión (y nadie nos cree).",
          escenas: [
            { img: "assets/video/escenas/n55.mp4", poster: "assets/fotos/escenas/s55.webp", texto: [`Eran las dos de la mañana.`, `La ciudad seguía despierta. Nosotros queríamos entrar.`] },
            { img: "assets/video/escenas/n56.mp4", poster: "assets/fotos/escenas/s56.webp", texto: [`Y entonces descubrimos el problema.`, `${P.anecdota}.`] },
            { img: "assets/video/escenas/n57.mp4", poster: "assets/fotos/escenas/s57.webp", texto: [`Probamos llamar. Luego volver a probar.`, `Cada idea era peor que la anterior.`] },
            { img: "assets/video/escenas/esc19.mp4", poster: "assets/fotos/escenas/s58.webp", texto: [`Al final, no pudimos evitar reírnos.`, `En pijama y sin un plan mejor.`] },
            { img: "assets/video/escenas/esc17.mp4", poster: "assets/fotos/escenas/s59.webp", texto: [`Hoy lo contamos como si fuera una película.`, `Y todavía discutimos de quién fue la culpa.`] }
          ],
          interaccion: {
            tipo: "quiz", pregunta: `"${P.anecdota}". ¿Quién tuvo la culpa?`,
            opciones: [P.nombreA, P.nombreB, "Los dos (obviamente)"], correcta: P.culpableAnecdota,
            ok: "Respuesta correcta. Caso cerrado."
          },
          recompensa: "Cupón: noche de comedia y tu comida favorita 🍕"
        },
        {
          titulo: "Risas enlatadas", duracion: 70,
          descripcion: "Ataques de risa, caras raras y fotos que nunca subiremos.",
          escenas: [
            { img: "assets/video/escenas/n60.mp4", poster: "assets/fotos/escenas/s60.webp", texto: [`A veces el plan sale mal.`, `Y ahí empieza la mejor parte.`] },
            { img: "assets/video/escenas/n61.mp4", poster: "assets/fotos/escenas/s61.webp", texto: [`Una foto movida. Otra con los ojos cerrados.`, `Terminamos guardándolas todas.`] },
            { img: "assets/video/escenas/n62.mp4", poster: "assets/fotos/escenas/s62.webp", texto: [`Las caras raras no necesitan filtro.`, `Son nuestras tomas favoritas.`] },
            { img: "assets/video/escenas/n63.mp4", poster: "assets/fotos/escenas/s63.webp", texto: [`Hicimos una pausa para comer.`, `Y apareció otra historia que no sabremos contar serios.`] },
            { img: "assets/video/escenas/n64.mp4", poster: "assets/fotos/escenas/s64.webp", texto: [`Si esta serie tiene bloopers...`, `Quiero seguir grabándolos contigo.`] }
          ],
          interaccion: {
            tipo: "completar", frase: "Nadie me hace reír como ___",
            respuestas: [P.nombreB, ...P.apodos, "tu", "tú", "ti"],
            pista: "Está leyendo esto ahora mismo.",
            ok: "Nadie. Jamás."
          },
          recompensa: "Desbloqueaste: Temporada 7 — Lo que Viene 🌅"
        }
      ]
    },

    /* ---------------- TEMPORADA 7 ---------------- */
    {
      num: 7, titulo: "Lo que Viene", anio: new Date().getFullYear(), clasificacion: "TP",
      imagen: F.t7, musica: M.temporadas[7], top10: true,
      sinopsis: `${P.suenos.join(", ")}. La temporada que aún estamos escribiendo. ` +
                `Spoiler: tiene final feliz.`,
      episodios: [
        {
          titulo: "Planes", duracion: 75,
          descripcion: "Lo que soñamos cuando nadie nos escucha.",
          escenas: [
            { img: "assets/video/atardecer.mp4", poster: "assets/fotos/escenas/s65.webp", texto: [`Lo mejor de esta serie...`, `es que todavía estamos escribiéndola.`] },
            { img: "assets/video/tokio.mp4", poster: "assets/fotos/escenas/s66.webp", texto: [`Primer sueño en la lista: ${P.suenos[0]}.`, `Ya imaginamos cómo sería llegar juntos.`] },
            { img: "assets/video/escenas/esc21.mp4", poster: "assets/fotos/escenas/s67.webp", texto: [`Después viene ${P.suenos[1]}.`, `Ya hasta discutimos quién elegirá el nombre.`] },
            { img: "assets/video/escenas/n68.mp4", poster: "assets/fotos/escenas/s68.webp", texto: [`Y algún día: ${P.suenos[2]}.`, `Un espacio para todas nuestras cosas y recuerdos.`] },
            { img: "assets/video/final-prueba.mp4", poster: "assets/fotos/escenas/s69.webp", texto: [`No sabemos cuándo llegará cada sueño.`, `Sí sabemos con quién queremos intentarlo.`] }
          ],
          interaccion: {
            tipo: "rascar", titulo: "Rasca para ver el próximo capítulo",
            revelar: `Próximo destino: ${P.suenos[0]}. Contigo.`,
            imagen: "assets/fotos/rasca-2.webp", ok: "Anotado en el guion."
          },
          recompensa: `Cupón: damos el primer paso hacia "${P.suenos[0]}" 🗺️`
        },
        {
          titulo: "Continuará…", duracion: 70,
          descripcion: "El episodio que te prepara para la Temporada Final.",
          escenas: [
            { img: "assets/video/escenas/n70.mp4", poster: "assets/fotos/escenas/s70.webp", texto: [`Quedan lugares por conocer.`, `La lista empieza en ${P.suenos[0]}.`] },
            { img: "assets/video/escenas/n71.mp4", poster: "assets/fotos/escenas/s71.webp", texto: [`También hay sitio para ${P.suenos[1]}.`, `Y para las sorpresas que aún no imaginamos.`] },
            { img: "assets/video/escenas/n72.mp4", poster: "assets/fotos/escenas/s72.webp", texto: [`Algún día construiremos ${P.suenos[2]}.`, `Con espacio para repetir nuestras escenas favoritas.`] },
            { img: "assets/video/escenas/n73.mp4", poster: "assets/fotos/escenas/s73.webp", texto: [`Hasta entonces, seguimos aquí.`, `Haciendo extraordinario lo cotidiano.`] },
            { img: "assets/video/escenas/esc11.mp4", poster: "assets/fotos/escenas/s74.webp", texto: [`Esta historia continuará.`, `Pero antes… queda una Temporada Final.`] }
          ],
          interaccion: {
            tipo: "quiz", pregunta: "¿Lista para la Temporada Final?",
            opciones: ["Sí", "Obvio", "Nací para esto"], correcta: "todas",
            ok: "Sabía que dirías eso."
          },
          recompensa: "Desbloqueaste: LA TEMPORADA FINAL 🔴"
        }
      ]
    }
  ];

  /* -------------------------------------------------------------
     6. DETRÁS DE CÁMARAS (fila de extras en el inicio)
     ------------------------------------------------------------- */
  const extras = [
    { titulo: "Casting", img: "assets/fotos/x-casting.webp", texto: `${P.nombreA} hizo audiciones durante años. El papel era tuyo desde el primer día.` },
    { titulo: "Locaciones", img: "assets/fotos/x-locaciones.webp", texto: `${P.ciudad}, ${P.primeraCita}, ${P.viajes.join(", ")}. Cada lugar, un set.` },
    { titulo: "Banda sonora", img: "assets/fotos/x-banda.webp", texto: `"${P.cancion}" de ${P.artista}. Escúchala mientras ves la serie.` },
    { titulo: "Lo que le gusta a la protagonista", img: "assets/fotos/x-gustos.webp", texto: P.gustosB.join(" · ") },
    { titulo: "Escenas eliminadas", img: "assets/fotos/x-eliminadas.webp", texto: "Hay escenas que solo existen para nosotros. Y así se quedan." }
  ];

  /* -------------------------------------------------------------
     7. TEMPORADA FINAL
     ------------------------------------------------------------- */
  const final = {
    titulo: "Temporada Final",
    sinopsis: `Después de ${P.anios} ${P.anios === 1 ? "año" : "años"} y ${temporadas.length} temporadas, ` +
              `la protagonista toma la palabra. En este episodio, ${P.nombreB} escribe el guion.`,
    imagen: F.final,
    preguntas: [
      "¿Cuál ha sido tu episodio favorito de nuestra historia y por qué?",
      "¿Qué es lo que más te gusta de nosotros?",
      "Si pudieras repetir un solo día juntos, ¿cuál sería?",
      "¿Qué sueño quieres que cumplamos en la próxima temporada?",
      `Escríbele a ${P.nombreA} algo que nunca le hayas dicho.`
    ],
    // Plantilla de la carta. r = respuestas [0..4]
    carta: (r) =>
`${P.apodo}:

Llegaste al final de la serie, pero no de la historia.

Dices que tu episodio favorito es "${r[0]}". El mío es cualquiera en el que sales tú.

Lo que más te gusta de nosotros: ${r[1]}. Lo que más me gusta a mí es que existe un "nosotros".

Si pudiéramos repetir un día, elegiste: ${r[2]}. Prometo que habrá muchos días así.

Y la próxima temporada ya tiene trama: ${r[3]}. Hagámoslo realidad.

${P.mensajeFinal}

Con todo mi amor,
${P.nombreA}`
  };

  /* -------------------------------------------------------------
     8. CRÉDITOS Y POST-CRÉDITOS
     ------------------------------------------------------------- */
  const creditos = [
    ["Una serie original de", P.nombreA],
    ["Protagonizada por", P.nombreB],
    ["Coprotagonista", P.nombreA],
    ["Dirección", "El destino"],
    ["Guion", "Los dos, improvisando"],
    ["Banda sonora", `"${P.cancion}" — ${P.artista}`],
    ["Locación principal", P.ciudad],
    ["Primera escena rodada en", P.primeraCita],
    ["Locaciones adicionales", P.viajes.join(" · ")],
    ["Efectos especiales", "Tus besos"],
    ["Catering", P.gustosB.join(" · ")],
    ["Dobles de riesgo", "Ninguno. Todo fue real."],
    ["Asesoría en tormentas", P.dificiles.join(" · ")],
    ["Departamento de comedia", P.anecdota],
    ["Producción ejecutiva", `${P.anios} ${P.anios === 1 ? "año" : "años"} juntos`],
    ["Agradecimientos especiales", "A cada casualidad que nos juntó"],
    ["", "Ningún corazón fue dañado durante la filmación de esta serie."],
    ["", `© ${P.anioInicio}–${new Date().getFullYear()} ${P.nombreA} & ${P.nombreB}. Todos los derechos reservados (para nosotros).`]
  ];

  const postCreditos = {
    imagen: F.postCreditos,
    etiqueta: "ESCENA POST-CRÉDITOS",
    texto: `${P.nombreB}… esta serie acaba de ser renovada.`,
    anuncio: `Temporada ${P.anios + 1}`,
    subtitulo: "Próximamente. Y para siempre.",
    sorpresa: "Mira debajo de tu almohada 💝"
  };

  return { pareja: P, fotos: F, media: M, acceso, notificacion, sitio, temporadas, extras, final, creditos, postCreditos };
})();
