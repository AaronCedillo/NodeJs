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

let getEmpleado = (id) => {

  return new Promise((resolve, reject) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if(!empleadoDB)
      reject(`No existe el usuario con ID ${ id }`)
        else
          resolve(empleadoDB);
  });
}

let getSalario = (empleado) => {

  return new Promise((resolve, reject) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if(!salarioDB)
      reject(`No existe el salario para el empleado ${ empleado.nombre }`)
        else {
          resolve({
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
          });
        }
  });
}

getEmpleado(2).then(empleado => {
  return getSalario(empleado);
})
.then(resp => {
  console.log(`El salario de ${ resp.nombre } es de ${ resp.salario }`);
})
.catch(err => {
  console.log(err);
});
