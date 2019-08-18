//Requierds

const fs = require('fs');

let base = 5;
let data = '';

for(let i = 0; i < 11; ++i) {
  let newBase = base * i;
  data +=` ${base} * ${i} = ${newBase}\n`;
}

fs.writeFile(`tabla del ${base} .txt`, data, (err) => {
  if(err) throw err;

  console.log('El archivo tabla ha sido creado');
})
