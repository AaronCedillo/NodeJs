let getUsuarioId = (id, callback) => {
  let usuario = {
    nombre: 'Adrian',
    id
  }
  if(id === 30) {
    callback(`El usuario con id ${ 30 }, no existe`)
  }
  callback(usuario);
}

getUsuarioId(30, (usuario) => {
  console.log('Usuario de base de datos', usuario);
});
