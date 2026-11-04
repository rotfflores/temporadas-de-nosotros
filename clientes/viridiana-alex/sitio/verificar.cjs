const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = __dirname;
const context = { window: {}, Date, console };
vm.createContext(context);
for (const file of ['config.js', 'cliente.js']) {
  vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), context, { filename: file });
}
const c = context.window.TDN;
const assert = (test, message) => { if (!test) throw new Error(message); };
const films = c.temporadas.filter(t => t.tipo === 'pelicula');
const series = c.temporadas.filter(t => t.tipo === 'serie');
assert(c.pareja.nombreA === 'Viridiana' && c.pareja.nombreB === 'Alex', 'Nombres incorrectos');
assert(films.length === 4 && series.length === 1, 'Alcance del paquete incorrecto');
assert(series[0].episodios.length === 3, 'La serie debe tener tres episodios');
assert(c.temporadas.every(t => t.episodios.every(e => !e.interaccion)), 'Hay juegos adicionales');
assert(c.final.carta().includes('Viridiana') && c.final.carta().includes('Alex'), 'Falta la carta');
assert(c.media.temporadas.length === 5, 'Faltan canciones');
assert(c.pareja.fechaInicio === '2026-05-02', 'Fecha de aniversario incorrecta');
const historiaLiteral = fs.readFileSync(path.join(root, 'LEEME.md'), 'utf8').split('<!-- historia -->')[1].trim();
const extra = c.extras.find(x => x.titulo.includes('en palabras de Viridiana'));
assert(extra && extra.texto.replace(/\s+/g, ' ') === historiaLiteral.replace(/\s+/g, ' '), 'Falta la historia de Viridiana en extras');
const literal = films[0].episodios[0].escenas.flatMap(s => s.texto).join(' ');
assert(literal === historiaLiteral.replace(/\s+/g, ' '), 'La primera película no reproduce la historia de Viridiana');
const videos = c.temporadas.flatMap(t => t.episodios.flatMap(e => e.escenas)).filter(s => s.img.endsWith('.mp4'));
assert(videos.length >= 8 && videos.every(s => s.poster && s.poster.endsWith('.webp')), 'Faltan los videos del cliente');
for (const t of c.temporadas) {
  const fotos = new Set(t.episodios.flatMap(e => e.escenas.map(s => s.img)));
  assert(fotos.size <= 10, `«${t.titulo}» tiene más de 10 imágenes`);
}
assert(/^[0-9a-f]{64}$/.test(c.acceso.password), 'La contraseña debe ir como huella SHA-256');
assert(c.notificacion.whatsapp === '525567373460', 'WhatsApp de Viridiana incorrecto');
const media = new Set([
  ...Object.values(c.fotos), c.media.intro, c.media.videoFinal, ...c.media.temporadas,
  ...c.temporadas.flatMap(t => [t.imagen, t.musica, ...t.episodios.flatMap(e => [e.musica, ...e.escenas.flatMap(s => [s.img, s.poster])])]),
  ...c.extras.map(x => x.img), c.final.imagen, c.postCreditos.imagen
].filter(x => typeof x === 'string' && x.startsWith('assets/')));
for (const item of media) assert(fs.existsSync(path.join(root, item)), `Falta ${item}`);
for (const name of ['index', 'splash', 'profiles', 'password', 'temporada', 'episodio', 'juegos', 'final', 'credits']) {
  const html = fs.readFileSync(path.join(root, `${name}.html`), 'utf8');
  assert(html.includes('cliente.js'), `Falta cliente.js en ${name}`);
  assert(html.includes('https://streaming-us.rotfstudio.com/clientes/viridiana-alex/sitio/assets/og.jpg?v=1'), `Falta Open Graph en ${name}`);
}
const script = fs.readFileSync(path.join(root, 'script.js'), 'utf8');
assert(script.includes('const KEY = "vx_v1"') && !/"(la|jl|jr|bg|mp|yl|cb|sm)_/.test(script), 'Almacenamiento compartido con otro cliente');
assert(/const arcades = \[\s*\{ id: "memory"[^\n]*\}\s*\]/.test(script), 'El paquete incluye juegos extra');
assert(fs.existsSync(path.join(root, 'assets/og.jpg')), 'Falta imagen de WhatsApp');
console.log(`OK (Viridiana → Alex): 4 películas, 1 serie, 1 memorama, 5 canciones y ${media.size} medios válidos.`);
