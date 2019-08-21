const {crearArchivo} = require(`./multiplicar/multiplicar`);

//console.log(process.argv);

let argv = process.argv;

let parametro = argv[2];
let base = parametro.split('=')[1];

crearArchivo(base)
  .then(archivo => console.log(`Archivo de la tabla ${base} creado`))
  .catch(e => console.log(e));
