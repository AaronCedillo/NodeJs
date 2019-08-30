//Requierds
const fs = require('fs');

let listarTabla = (base, limite = 10) => {
  for(let i = 0; i < limite; ++i) {
    let newBase = base * i;
    console.log(`${base} * ${i} = ${newBase}`);
  }
}

let crearArchivo = (base, limite = 10) => {

  return new Promise((resolve, reject) => {

    if(!Number(base)) {
        reject(`El valor introducido ${base} no es un numero`);
        return;
    }

    let data = '';

    for(let i = 0; i < limite; ++i) {
      let newBase = base * i;
      data +=` ${base} * ${i} = ${newBase}\n`;
    }

    fs.writeFile(`tabla del ${base} al ${limite} .txt`, data, (err) => {
      if(err) reject (err);
        else resolve(`tabla - ${ base }.txt`);
    });
  });
}

module.exports = {
  crearArchivo,
  listarTabla
}
