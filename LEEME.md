# Temporadas de Nosotros: cómo personalizar y publicar

Una plataforma de streaming de aniversario, con navegación tipo Netflix. Usa HTML, CSS y JS sin frameworks y no necesita servidor.

## Archivos

| Archivo | Qué es |
|---|---|
| `config.js` | **El único archivo que se edita por cliente**: nombres, fechas, textos, fotos, contraseña, estreno, contacto |
| `splash.html` | Intro "TA-DUM" (sonido sintetizado, botón de silencio) y cuenta regresiva si aún no es el estreno |
| `password.html` | Pantalla de contraseña tipo inicio de sesión (se salta si `password` está vacío) |
| `profiles.html` | "¿Quién está viendo?" con 2 perfiles |
| `index.html` | Inicio: hero, filas (Continuar viendo, Temporadas, Top 10, Momentos destacados, Detrás de cámaras, Porque viste…, Mi lista) |
| `temporada.html?t=N` | Detalle de temporada y lista de episodios |
| `episodio.html?t=N&e=M` | Reproductor con pausa interactiva |
| `final.html` | Temporada Final: 5 preguntas, carta, video oculto y notificación |
| `credits.html` | Créditos + escena post-créditos |
| `imprimible.html` | Boleto de estreno con QR (imprimir o descargar PNG) |
| `styles.css` / `script.js` | Estilos y lógica (no hace falta tocarlos) |
| `GUION.md` | El guion completo de la serie |
| `assets/fotos/`, `assets/audio/` | Fotos, música y audio del cliente. La intro y las ocho temporadas usan nombres genéricos. |

**Flujo:** `index.html` → (primera visita de la sesión) splash → contraseña → perfiles → inicio. Si alguien entra por un enlace directo, después del flujo vuelve a esa página.

## Personalizar un pedido (≈30 min)

1. **Copia la carpeta** completa y cámbiale el nombre (p. ej. `netflix-ana-luis`).
2. **Abre `config.js`** y reemplaza todo lo que esté entre `[CORCHETES]`:
   - `P`: nombres, apodos, `fechaInicio` (AAAA-MM-DD), ciudad, primera cita, canción, viajes, momentos difíciles, anécdota, gustos, sueños y mensaje final.
   - `culpableAnecdota`: 0 = A, 1 = B, 2 = "Los dos".
   - En T2:E1 cambia `[OPCIÓN_FALSA_1]` y `[OPCIÓN_FALSA_2]` por lugares creíbles.
   - En T3:E2, `palabras`: de 5 a 8 palabras, solo letras, sin espacios y con 10 letras como máximo (ej. gustos de B).
3. **Fotos** → guárdalas en `assets/fotos/` y escribe la ruta en `F` (ej. `hero: "assets/fotos/hero.webp"`).
   - Formato **WebP** (calidad 75–80). Portadas: 1600 px de ancho; miniaturas: 800 px; perfiles y puzzle: cuadradas (mín. 900×900).
   - Las escenas de cada episodio tienen `img: ""`: pon ahí una foto distinta por escena. Si queda vacío, se genera una portada de color.
   - En el memory (`pares`) puedes usar 6 rutas de foto en lugar de emojis.
4. **Audio/video** (`M`): `intro.mp3` es el sonido del logo; `temporada-0.mp3` a `temporada-7.mp3` son las canciones de cada temporada. Para otro cliente, sustituye los archivos conservando los nombres o cambia las rutas en `M.temporadas`. `videoFinal` acepta MP4 o enlace de YouTube y la nota de voz es opcional. Consulta `assets/audio/README.md` para saber qué canción de muestra corresponde a cada temporada.
5. **Acceso** (`acceso`): `password` (no distingue mayúsculas ni acentos), `pistaPassword` y `estreno` (`"2026-02-14T20:00:00"`, hora local de quien abre). Con `estreno` vacío, la serie está disponible desde ya.
6. **Notificación** (`notificacion`): `whatsapp` con código de país y solo dígitos (México: `521…`), o `email`. Opcional: `endpoint` (p. ej. `https://formsubmit.co/ajax/correo@cliente.com`) para recibir las respuestas sin que B tenga que pulsar "enviar" en WhatsApp.
7. **Open Graph**: sube `assets/og.jpg` (1200×630) para que el enlace se vea bonito en WhatsApp. Si cambias el título que se comparte, edita las etiquetas `og:` del `<head>` de `index.html` y `splash.html`.
8. **Abre el sitio** y revisa la consola del navegador (F12). Aparece un aviso rojo con la lista de datos que siguen `[PENDIENTE]`.
9. **Publica** (GitHub Pages, Netlify o el hosting de rotf.com) y pon la URL final en `sitio.url`. Luego abre `imprimible.html` para imprimir el boleto o descargar el QR.

### Cambiar el contenido de la serie
- **Añadir o quitar episodios:** copia o borra un bloque `{ titulo, duracion, descripcion, escenas, interaccion, recompensa }`. Los episodios se desbloquean en orden.
- **Cambiar el minijuego:** cambia `interaccion.tipo` y sus campos:

| tipo | campos |
|---|---|
| `quiz` | `pregunta`, `opciones[3]`, `correcta` (índice o `"todas"`) |
| `completar` | `frase` con `___`; `opciones` + `correcta` **o** `respuestas[]` + `pista` |
| `adivinanza` | `texto`, `respuestas[]`, `pista` |
| `codigo` | `pregunta`, `modo` (`"fecha"`/`"texto"`), `placeholder`, `respuestas[]`, `pista` |
| `memory` | `pares[6]` (emojis o rutas) |
| `puzzle` | `imagen` (cuadrada) |
| `sopa` | `palabras[5–8]` |
| `rascar` | `revelar` (texto), `imagen` opcional |
| `ordenar` | `eventos[]` en el orden correcto |

- `pausaEn` (opcional, de 0 a 1) controla en qué momento del episodio aparece la pausa. Por defecto es 0.55.
- Si fallan 2 veces aparece una pista, y a los 5 intentos se muestra la respuesta, para que nadie se quede atascado.

### Probar sin jugar todo
- Si cambias el `KEY` en `script.js` (`tdn_v1`), el progreso de todos se reinicia.
- El menú del avatar tiene **"Reiniciar progreso"** y **"Ver la intro otra vez"**.
- En el reproductor puedes adelantar con la barra. Si saltas por encima de la pausa interactiva, caes directo en el reto.

## Checklist antes de publicar

**Contenido**
- [ ] La consola no muestra datos `[PENDIENTE]`
- [ ] Nombres, apodos y fechas revisados con el cliente (ortografía y acentos)
- [ ] La respuesta del quiz de la primera cita es correcta y las opciones falsas son creíbles
- [ ] Las palabras de la sopa no tienen espacios ni pasan de 10 letras
- [ ] `culpableAnecdota` es correcto
- [ ] La carta final se lee bien con respuestas de ejemplo
- [ ] El texto de la sorpresa post-créditos coincide con la sorpresa física (si la hay)

**Medios**
- [ ] Todas las rutas de fotos cargan (no hay portadas de color donde debería haber foto)
- [ ] Las fotos están en WebP y pesan menos de 300 KB cada una
- [ ] La música suena y el botón de volumen funciona
- [ ] El video final se reproduce (si es de YouTube, permite inserción)
- [ ] `assets/og.jpg` está subido

**Acceso y notificación**
- [ ] La contraseña funciona y la pista ayuda sin regalar la respuesta
- [ ] Si hay `estreno`, la cuenta regresiva muestra la fecha correcta
- [ ] "Enviar mi respuesta" abre WhatsApp o el correo con el número/dirección correctos (prueba real)
- [ ] El `endpoint` (si se usa) está activado: FormSubmit pide confirmar el correo la primera vez

**Experiencia**
- [ ] Recorrido completo en un celular real (iPhone Safari + Android Chrome): splash → contraseña → perfil → los 15 episodios → final → créditos → post-créditos
- [ ] Probado en desktop (Chrome, Safari, Firefox, Edge): hover de tarjetas, flechas de filas y pantalla completa
- [ ] Probado en una ventana privada (sin progreso guardado)
- [ ] `sitio.url` apunta a la URL final y el QR de `imprimible.html` abre esa URL
- [ ] Al compartir el enlace por WhatsApp se ve la imagen de vista previa

## Notas técnicas
- **El progreso** se guarda en `localStorage` del navegador de B. Si B cambia de dispositivo, empieza de nuevo. La contraseña se recuerda en ese navegador, mientras que la intro y el perfil se piden en cada sesión, como en Netflix.
- **Sonido:** la intro usa `assets/audio/intro.mp3` y necesita que B toque «Comenzar» para reproducirse. Las canciones de muestra son grabaciones comerciales proporcionadas para esta demo; antes de publicar una página para un cliente, usa música que pueda distribuirse legalmente o cuenta con las licencias necesarias.
- **La contraseña y la fecha de estreno se comprueban en el navegador.** Bastan para un regalo, pero no son seguridad real: quien lea el código podría saltárselas. No pongas datos sensibles en el sitio.
- Las páginas tienen `noindex` para que no aparezcan en Google.
- **Marca:** el logo "TEMPORADAS DE NOSOTROS" y el icono "T" son propios. No se usa ningún logo ni nombre de Netflix en la interfaz.
- **Tipografías:** "Netflix Sans" es propietaria, así que se usa como primera opción y cae a Helvetica Neue o Arial. Los títulos usan Bebas Neue (Google Fonts).
