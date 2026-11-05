const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = __dirname;
const context = { window: {}, Date, console, document: { addEventListener() {} } };
vm.createContext(context);
for (const file of ['config.js', 'cliente.js']) vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), context, { filename: file });
const c = context.window.TDN;
const assert = (test, message) => { if (!test) throw new Error(message); };
const films = c.temporadas.filter(t => t.tipo === 'pelicula');
const series = c.temporadas.filter(t => t.tipo === 'serie');
const eps = c.temporadas.flatMap(t => t.episodios);
assert(c.pareja.nombreA === 'Alondra' && c.pareja.nombreB === 'Adrián', 'Nombres incorrectos');
assert(films.length === 12 && series.length === 3, 'Alcance del paquete incorrecto (12 películas y 3 series)');
assert(eps.filter(e => e.interaccion).length === 7, 'Deben ser 7 juegos');
assert(eps.every(e => e.escenas.length >= 5), 'Cada capítulo necesita al menos 5 escenas');
assert(films[0].episodios[0].escenas[0].texto.join(' ') === 'Nos conocimos en el trabajo.', 'Falta la historia literal de Alondra');
assert(c.media.temporadas.length === 15 && new Set(c.temporadas.map(t => t.musica)).size === 15, 'Cada título debe tener su canción');
for (const t of c.temporadas) {
  const fotos = new Set(t.episodios.flatMap(e => e.escenas.map(s => s.img)));
  assert(fotos.size <= 10, `«${t.titulo}» tiene más de 10 imágenes`);
}
assert(/^[0-9a-f]{64}$/.test(c.acceso.password), 'La contraseña debe ir como huella SHA-256');
assert(c.notificacion.whatsapp === '525624787143', 'WhatsApp de Alondra incorrecto');
const media = new Set([
  ...Object.values(c.fotos), c.media.intro, ...c.media.temporadas,
  ...c.temporadas.flatMap(t => [t.imagen, t.musica, ...t.episodios.flatMap(e => e.escenas.flatMap(s => [s.img, s.poster]))]),
  ...c.extras.map(x => x.img), c.final.imagen, c.postCreditos.imagen
].filter(x => typeof x === 'string' && x.startsWith('assets/')));
for (const item of media) assert(fs.existsSync(path.join(root, item)), `Falta ${item}`);
for (let i = 1; i <= 21; i++) assert(fs.existsSync(path.join(root, `assets/fotos/foto-${String(i).padStart(2, '0')}.webp`)), `Falta foto ${i}`);
for (let i = 1; i <= 4; i++) assert(fs.existsSync(path.join(root, `assets/video/momento-0${i}.mp4`)), `Falta video ${i}`);
for (const name of ['index', 'splash', 'profiles', 'password', 'temporada', 'episodio', 'juegos', 'final', 'credits']) {
  const html = fs.readFileSync(path.join(root, `${name}.html`), 'utf8');
  assert(html.includes('cliente.js'), `Falta cliente.js en ${name}`);
  assert(html.includes('https://streaming-us.rotfstudio.com/clientes/alondra-adrian/sitio/assets/og.jpg'), `Falta Open Graph en ${name}`);
}
const script = fs.readFileSync(path.join(root, 'script.js'), 'utf8');
assert(script.includes('const KEY = "ar_v1"') && !/"(la|jl|jr|bg|mp|yl|cb|sm|vx|jm)_/.test(script), 'Almacenamiento compartido con otro cliente');
assert(script.includes('function gameFs()'), 'Falta el modo de pantalla completa de los juegos');
for (const name of fs.readdirSync(root).filter(n => /\.(html|js|css)$/.test(n) && n !== 'verificar.cjs')) {
  assert(!/Viridiana|Alex\b|Rosa Janet|Greys/.test(fs.readFileSync(path.join(root, name), 'utf8')), `Dato de otro cliente en ${name}`);
}
console.log(`OK (Alondra → Adrián): ${films.length} películas, ${series.length} series (${eps.length} capítulos), 7 juegos, 15 canciones y ${media.size} medios válidos.`);
