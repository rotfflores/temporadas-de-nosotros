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
assert(c.pareja.nombreA === 'Cristian' && c.pareja.nombreB === 'Beatriz', 'Nombres incorrectos');
assert(films.length === 4 && series.length === 1, 'Alcance del paquete incorrecto');
assert(series[0].episodios.length === 3, 'La serie debe tener tres episodios');
assert(c.temporadas.every(t => t.episodios.every(e => !e.interaccion)), 'Hay juegos adicionales');
assert(c.final.carta().includes('Cristian') && c.final.carta().includes('Beatriz'), 'Falta la carta');
assert(c.media.temporadas.length === 4, 'Faltan canciones');
const cartaLiteral = ['Beatriz:', 'No sé exactamente cómo comenzar a decirte todo lo que llevo dentro, porque cuando se trata de ti, las palabras a veces se quedan cortas.', 'Quiero que sepas que te amo. Te amo por lo que eres, por tu manera de ser, por esos pequeños detalles que quizá para ti pasan desapercibidos, pero que para mí significan muchísimo.', 'Desde que llegaste a mi vida despertaste sentimientos que creí que ya no volvería a experimentar. Me hiciste volver a ilusionarme, a disfrutar de los pequeños momentos, a querer compartir mis días con alguien y a imaginar un futuro de dos.', 'No voy a decir que todo ha sido perfecto, porque hemos tenido diferencias, momentos difíciles y situaciones que nos han lastimado. Pero si algo tengo claro es que mis sentimientos por ti han sido sinceros.', 'No quiero que dudes de lo importante que eres para mí. Me gusta estar contigo, cuidarte, consentirte, escucharte y compartir hasta los momentos más sencillos. Porque al final entendí que el amor también está en esas pequeñas cosas que construimos día con día.', 'Si pudiera pedir algo, sería que nunca olvidáramos por qué nos elegimos, que aprendamos a escucharnos, a comprendernos y a cuidarnos incluso cuando las cosas no sean fáciles.', 'No sé qué nos tenga preparado la vida, pero hoy quiero que sepas que mi corazón te quiere, que agradezco haberte encontrado y que, entre tantas personas en este mundo, yo sigo sintiendo algo muy especial por ti.', 'Te amo, Beatriz. Y si algo deseo es que podamos seguir escribiendo nuestra historia, pero siempre desde el amor, la confianza y las ganas de elegirnos.', 'Con todo mi cariño. ❤️'];
assert(!cartaLiteral.join(' ').includes('desapeBeatriz'), 'La carta trae el texto duplicado');
assert(c.extras.some(x => x.texto === cartaLiteral.join('\n\n')), 'Falta la carta literal de Cristian en extras');
assert(c.final.carta().startsWith(cartaLiteral.join('\n\n')), 'La carta final no es la de Cristian');
const literal = films[0].episodios[0].escenas.flatMap(s => s.texto).join(' ');
assert(literal === cartaLiteral.join(' '), 'La primera película no reproduce la carta palabra por palabra');
for (const t of c.temporadas) {
  const fotos = new Set(t.episodios.flatMap(e => e.escenas.map(s => s.img)));
  assert(fotos.size <= 10, `«${t.titulo}» tiene más de 10 imágenes`);
}
assert(/^[0-9a-f]{64}$/.test(c.acceso.password), 'La contraseña debe ir como huella SHA-256');
assert(c.notificacion.whatsapp === '525663696233', 'WhatsApp de Cristian incorrecto');
const media = new Set([
  ...Object.values(c.fotos), c.media.intro, c.media.videoFinal, ...c.media.temporadas,
  ...c.temporadas.flatMap(t => [t.imagen, t.musica, ...t.episodios.flatMap(e => [e.musica, ...e.escenas.flatMap(s => [s.img, s.poster])])]),
  ...c.extras.map(x => x.img), c.final.imagen, c.postCreditos.imagen
].filter(x => typeof x === 'string' && x.startsWith('assets/')));
for (const item of media) assert(fs.existsSync(path.join(root, item)), `Falta ${item}`);
for (const name of ['index', 'splash', 'profiles', 'password', 'temporada', 'episodio', 'juegos', 'final', 'credits']) {
  const html = fs.readFileSync(path.join(root, `${name}.html`), 'utf8');
  assert(html.includes('cliente.js'), `Falta cliente.js en ${name}`);
  assert(html.includes('https://streaming-us.rotfstudio.com/clientes/cristian-beatriz/sitio/assets/og.jpg?v=1'), `Falta Open Graph en ${name}`);
}
const script = fs.readFileSync(path.join(root, 'script.js'), 'utf8');
assert(script.includes('const KEY = "cb_v1"') && !/"(la|jl|jr|bg|mp|yl)_/.test(script), 'Almacenamiento compartido con otro cliente');
assert(/const arcades = \[\s*\{ id: "memory"[^\n]*\}\s*\]/.test(script), 'El paquete incluye juegos extra');
assert(fs.existsSync(path.join(root, 'assets/og.jpg')), 'Falta imagen de WhatsApp');
console.log(`OK (Cristian → Beatriz): 4 películas, 1 serie, 1 memorama, 4 canciones y ${media.size} medios válidos.`);
