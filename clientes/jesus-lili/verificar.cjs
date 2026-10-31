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
const assert = (condition, message) => { if (!condition) throw new Error(message); };
const movies = c.temporadas.filter(item => item.tipo === 'pelicula');
const series = c.temporadas.filter(item => item.tipo === 'serie');
assert(movies.length === 4, `Películas: ${movies.length}`);
assert(series.length === 1, `Series: ${series.length}`);
assert(series[0].episodios.length === 3, 'La serie debe tener tres episodios');
assert(c.pareja.nombreA === 'Jesús' && c.pareja.nombreB === 'Lili', 'Nombres incorrectos');
assert(c.temporadas.every(item => item.episodios.every(ep => !ep.interaccion)), 'Hay juegos extra en episodios');
assert(c.final.carta().includes('goldita') && c.final.carta().includes('Jesús'), 'Falta la carta personalizada');

const media = new Set([
  ...Object.values(c.fotos), ...c.media.temporadas, c.media.intro, c.media.videoFinal,
  ...c.temporadas.flatMap(item => [item.imagen, item.musica, ...item.episodios.flatMap(ep => [ep.musica, ...ep.escenas.flatMap(scene => [scene.img, scene.poster, scene.video])])]),
  ...c.extras.map(extra => extra.img), c.final.imagen, c.postCreditos.imagen
].filter(item => typeof item === 'string' && item.startsWith('assets/')));
for (const item of media) assert(fs.existsSync(path.join(root, item)), `Falta medio: ${item}`);
for (const page of ['index', 'splash', 'profiles', 'password', 'temporada', 'episodio', 'juegos', 'final', 'credits', 'imprimible']) {
  const html = fs.readFileSync(path.join(root, `${page}.html`), 'utf8');
  assert(html.includes('cliente.js'), `Falta cliente.js en ${page}.html`);
  if (page !== 'imprimible') {
    assert(html.includes('property="og:image" content="https://streaming-us.rotfstudio.com/clientes/jesus-lili/assets/og.jpg?v=3"'), `Falta imagen social en ${page}.html`);
    assert(html.includes('name="twitter:image"'), `Falta imagen de Twitter en ${page}.html`);
  }
}
assert(fs.existsSync(path.join(root, 'assets', 'og.jpg')), 'Falta la imagen social');
const playerCode = fs.readFileSync(path.join(root, 'script.js'), 'utf8');
assert(playerCode.includes('const KEY = "jl_v1"'), 'El progreso no está aislado');
assert(playerCode.includes('const arcades = [\n      { id: "memory"'), 'El paquete incluye juegos extra');
console.log(`OK: ${movies.length} películas, ${series.length} serie, 1 memorama y ${media.size} rutas multimedia válidas.`);
