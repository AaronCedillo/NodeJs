const argv = require('yargs').argv;

let comando = argv._[0];

switch (comando) {
  case 'crear':
    console.log("crear");
  break;

  case 'listar':
    console.log("listar las tareas por hacer");
  break;

  case 'actualizar':
      console.log("actualizar los datos");
  break;

  default:
    console.log("comando no reconocido");
}
