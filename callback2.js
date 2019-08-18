let empleados = [{
  id: 1,
  nombre: 'Adrian'
}, {
  id: 2,
  nombre: 'Carmen'
}, {
  id: 3,
  nombre: 'Alejandra'
}];

let salarios = [{
  id: 1,
  salario: 2000
}, {
  id: 2,
  salario: 3000
}, {
  id: 3,
  salario: 4000
}];

let getEmpleado = (id, callback) => {
  let empleadoDB = empleados.find(empleado => empleado.id === id);

  if(!empleadoDB)
    callback(`No existe el usuario con ID ${ id }`)
      else
        callback(null, empleadoDB);
}

let getSalario = (empleado, callback) => {
  let salarioDB = salarios.find(salario => salario.id === empleado.id);

  if(!salarioDB)
    callback(`No existe el salario para el empleado ${ empleado.nombre }`)
      else {
        callback(null, {
          nombre: empleado.nombre,
          salario: salarioDB.salario,
          id: empleado.id
        });
      }
}

getEmpleado(1, (err, empleado) => {

  if(err)
    return console.log(err);

  //console.log(empleado);


  getSalario(empleado, (err, resp) => {

    if(err)
      return console.log(err);
    console.log(`EL salario de ${resp.nombre} es de ${resp.salario}`);
  })

});
