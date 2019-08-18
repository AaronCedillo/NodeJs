let getNombre = () => {
  return new Promise((resolve, reject) => {
    setTimeout( () => {
      resolve('Adrian');
    }, 4000);
  });
}

let saludo = async() => {
  let nombre = await getNombre();
  return `Hola ${nombre}`;
}

saludo().then(mensaje => {
  console.log(mensaje);
})
.catch(e => {
  console.log('Error de ASYNC', e);
})
