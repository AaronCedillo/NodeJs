let getUsuarioId = (id, callback) => {
  let usuario = {
    nombre: 'Adrian',
    id
  }
  if(id === 30) {
    callback(`El usuario con id ${ 30 }, no existe`)
  } else
      callback(null, usuario);
}

getUsuarioId(7, (err, usuario) => {

  if(err)
    return console.log(err);

  console.log('Usuario de base de datos', usuario);
});
