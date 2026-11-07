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
assert(c.pareja.nombreA === 'Christian' && c.pareja.nombreB === 'Rosario', 'Nombres incorrectos');
assert(films.length === 4 && series.length === 1, 'Alcance del paquete incorrecto');
assert(series[0].episodios.length === 3, 'La serie debe tener tres episodios');
assert(c.temporadas.every(t => t.episodios.every(e => !e.interaccion)), 'Hay juegos adicionales');
assert(c.final.carta().startsWith('Rosario:'), 'Falta la carta');
assert(c.media.temporadas.length === 5 && new Set(c.media.temporadas).size === 5, 'Faltan canciones');
assert(require('node:crypto').createHash('sha256').update('2412').digest('hex') === c.acceso.password, 'Contraseña distinta de 2412');
assert(c.pareja.fechaInicio.endsWith('-12-24'), 'Fecha de aniversario incorrecta');
const fotosCliente = new Set(c.temporadas.flatMap(t => t.episodios.flatMap(e => e.escenas.map(s => s.img))).filter(x => x.includes('/fotos/')));
const totalFotos = fs.readdirSync(path.join(root, 'assets/fotos')).filter(f => /^foto-\d+\.webp$/.test(f)).length;
assert(fotosCliente.size === totalFotos, `Se usan ${fotosCliente.size} de ${totalFotos} fotos del cliente`);
for (const t of c.temporadas) {
  const fotos = new Set(t.episodios.flatMap(e => e.escenas.map(s => s.img)));
  assert(fotos.size <= 10, `«${t.titulo}» tiene más de 10 imágenes`);
}
assert(/^[0-9a-f]{64}$/.test(c.acceso.password), 'La contraseña debe ir como huella SHA-256');
assert(c.notificacion.whatsapp === '528448458829', 'WhatsApp del cliente incorrecto');
const media = new Set([
  ...Object.values(c.fotos), c.media.intro, c.media.videoFinal, ...c.media.temporadas,
  ...c.temporadas.flatMap(t => [t.imagen, t.musica, ...t.episodios.flatMap(e => [e.musica, ...e.escenas.flatMap(s => [s.img, s.poster])])]),
  ...c.extras.map(x => x.img), c.final.imagen, c.postCreditos.imagen
].filter(x => typeof x === 'string' && x.startsWith('assets/')));
for (const item of media) assert(fs.existsSync(path.join(root, item)), `Falta ${item}`);
for (const name of ['index', 'splash', 'profiles', 'password', 'temporada', 'episodio', 'juegos', 'final', 'credits']) {
  const html = fs.readFileSync(path.join(root, `${name}.html`), 'utf8');
  assert(html.includes('cliente.js'), `Falta cliente.js en ${name}`);
  assert(html.includes('https://streaming-us.rotfstudio.com/clientes/christian-rosario/sitio/assets/og.jpg?v=1'), `Falta Open Graph en ${name}`);
}
const script = fs.readFileSync(path.join(root, 'script.js'), 'utf8');
assert(script.includes('const KEY = "cr_v1"') && !/"(la|jl|jr|bg|mp|yl|cb|sm|vx|jm|ar|ck|fm|lm|fl|ar|jfja)_/.test(script), 'Almacenamiento compartido con otro cliente');
assert(/const arcades = \[\s*\{ id: "memory"[^\n]*\}\s*\]/.test(script), 'El paquete incluye juegos extra');
assert(fs.existsSync(path.join(root, 'assets/og.jpg')), 'Falta imagen de WhatsApp');
for (const t of c.temporadas) for (const e of t.episodios) for (const s of e.escenas) assert(s.texto.join(' ').length > 0, 'Escena sin texto');
console.log(`OK (para Rosario): 4 películas, 1 serie, 1 memorama, 5 canciones y ${media.size} medios válidos.`);
