//Requierds

const fs = require('fs');

let crearArchivo = (base) => {

  return new Promise((resolve, reject) => {

    if(!Number(base)) {
        reject(`El valor introducido ${base} no es un numero`);
        return;
    }

    let data = '';

    for(let i = 0; i < 11; ++i) {
      let newBase = base * i;
      data +=` ${base} * ${i} = ${newBase}\n`;
    }

    fs.writeFile(`tabla del ${base} .txt`, data, (err) => {
      if(err) reject (err);
        else resolve(`tabña - ${ base }.txt`);
    });
  });
}

module.exports = {
  crearArchivo
}
