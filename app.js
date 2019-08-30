const argv = require('./config/yargs.js').argv;

const {crearArchivo} = require(`./multiplicar/multiplicar`);
const {listarTabla} = require(`./multiplicar/multiplicar`);

let comando = argv._[0];

switch (comando) {
  case 'listar':
    listarTabla(argv.base, argv.limite)
  break;

  case 'crear':
    crearArchivo(argv.base, argv.limite)
      .then(archivo => console.log(`Archivo de la tabla ${base} creado`))
      .catch(e => console.log(e));
  break;

  default:
    console.log('no reconocido');
}

//let parametro = argv[2];
//let base = parametro.split('=')[1];
