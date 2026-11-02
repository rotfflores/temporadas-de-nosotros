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
assert(c.pareja.nombreA === 'Jesús' && c.pareja.nombreB === 'Lorena', 'Nombres incorrectos');
assert(films.length === 4 && series.length === 1, 'Alcance del paquete incorrecto');
assert(series[0].episodios.length === 3, 'La serie debe tener tres episodios');
assert(c.temporadas.every(t => t.episodios.every(e => !e.interaccion)), 'Hay juegos adicionales');
assert(c.final.carta().includes('Jesús') && c.final.carta().includes('Lorena'), 'Falta la carta');
assert(c.media.temporadas.length === 4, 'Faltan canciones');
const historia = 'Nos conocimos hace 10 años, nos tratamos poco tiempo, nos alejamos y todo. Apenas hace 2 meses lo estamos intentando: por primera vez una relación, donde hemos pasado de todo.';
assert(c.extras.some(x => x.texto === historia), 'Falta la historia literal de Jesús');
const literal = films[0].episodios[0].escenas.flatMap(s => s.texto).join(' ');
for (const parte of ['Nos conocimos hace 10 años,', 'nos tratamos poco tiempo,', 'nos alejamos y todo.', 'Apenas hace 2 meses lo estamos intentando:', 'por primera vez una relación,', 'donde hemos pasado de todo.']) assert(literal.includes(parte), `Falta «${parte}» en «Diez años después»`);
for (const t of c.temporadas) {
  const fotos = new Set(t.episodios.flatMap(e => e.escenas.map(s => s.img)));
  assert(fotos.size <= 10, `«${t.titulo}» tiene más de 10 imágenes`);
}
assert(/^[0-9a-f]{64}$/.test(c.acceso.password), 'La contraseña debe ir como huella SHA-256');
assert(c.notificacion.whatsapp === '529841057499', 'WhatsApp de Jesús incorrecto');
const media = new Set([
  ...Object.values(c.fotos), c.media.intro, c.media.videoFinal, ...c.media.temporadas,
  ...c.temporadas.flatMap(t => [t.imagen, t.musica, ...t.episodios.flatMap(e => [e.musica, ...e.escenas.flatMap(s => [s.img, s.poster])])]),
  ...c.extras.map(x => x.img), c.final.imagen, c.postCreditos.imagen
].filter(x => typeof x === 'string' && x.startsWith('assets/')));
for (const item of media) assert(fs.existsSync(path.join(root, item)), `Falta ${item}`);
for (const name of ['index', 'splash', 'profiles', 'password', 'temporada', 'episodio', 'juegos', 'final', 'credits']) {
  const html = fs.readFileSync(path.join(root, `${name}.html`), 'utf8');
  assert(html.includes('cliente.js'), `Falta cliente.js en ${name}`);
  assert(html.includes('https://streaming-us.rotfstudio.com/clientes/jesus-lorena/assets/og.jpg?v=1'), `Falta Open Graph en ${name}`);
}
const script = fs.readFileSync(path.join(root, 'script.js'), 'utf8');
assert(script.includes('const KEY = "jr_v1"') && !script.includes('"la_') && !script.includes('"jl_') && !script.includes('"bg_'), 'Almacenamiento compartido con otro cliente');
assert(/const arcades = \[\s*\{ id: "memory"[^\n]*\}\s*\]/.test(script), 'El paquete incluye juegos extra');
assert(fs.existsSync(path.join(root, 'assets/og.jpg')), 'Falta imagen de WhatsApp');
console.log(`OK (Jesús → Lorena): 4 películas, 1 serie, 1 memorama, 4 canciones y ${media.size} medios válidos.`);
