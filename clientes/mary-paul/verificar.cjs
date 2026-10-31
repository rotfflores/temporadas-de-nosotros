const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = __dirname;
const context = { window: {}, Date, console };
vm.createContext(context);
for (const name of ['config.js', 'cliente.js']) vm.runInContext(fs.readFileSync(path.join(root, name), 'utf8'), context, { filename: name });
const c = context.window.TDN;
const check = (ok, message) => { if (!ok) throw new Error(message); };
check(c.pareja.nombreA === 'Mary Frutes' && c.pareja.nombreB === 'Paul Garcia', 'Nombres incorrectos');
check(c.temporadas.filter(t => t.tipo === 'pelicula').length === 4, 'El paquete debe tener cuatro películas');
check(c.temporadas.filter(t => t.tipo === 'serie').length === 1, 'El paquete debe tener una serie');
check(c.temporadas.every(t => t.episodios.every(e => !e.interaccion)), 'Hay juegos extra');
check(c.final.carta().includes('Mary Frutes') && c.final.carta().includes('Paul'), 'Falta la carta');
check(c.media.videoFinal === 'assets/video/recuerdo-2-gloria.mp4', 'Falta el video final con música');
const media = new Set([
  ...Object.values(c.fotos), c.media.intro, c.media.videoFinal,
  ...c.temporadas.flatMap(t => [t.imagen, ...t.episodios.flatMap(e => e.escenas.flatMap(s => [s.img, s.poster, s.video]))]),
  ...c.extras.map(e => e.img), c.final.imagen, c.postCreditos.imagen, 'assets/og.jpg'
].filter(x => typeof x === 'string' && x.startsWith('assets/')));
for (const item of media) check(fs.existsSync(path.join(root, item)), `Falta ${item}`);
for (const page of ['index','splash','password','profiles','temporada','episodio','juegos','final','credits','imprimible']) {
  const html = fs.readFileSync(path.join(root, `${page}.html`), 'utf8');
  check(html.includes('cliente.js'), `Falta personalización en ${page}`);
  check(html.includes('https://streaming-us.rotfstudio.com/clientes/mary-paul/assets/og.jpg'), `Falta imagen para compartir en ${page}`);
}
const script = fs.readFileSync(path.join(root, 'script.js'), 'utf8');
check(script.includes('const KEY = "mp_v1"'), 'El progreso no está aislado');
check(script.includes('const arcades = [\n      { id: "memory"'), 'El catálogo de juegos no es el básico');
check(!script.includes('Jesús y Lili'), 'Quedan nombres de otro cliente');
console.log(`OK: 4 películas, 1 serie, 1 juego y ${media.size} medios locales válidos.`);
