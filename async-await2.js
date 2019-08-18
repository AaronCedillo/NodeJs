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

let getEmpleado = async (id) => {
  let empleadoDB = empleados.find(empleado => empleado.id === id);

    if(!empleadoDB)
      throw new Error(`No existe el usuario con ID ${ id }`)
      else
        return empleadoDB;
}

let getSalario = async (empleado) => {

  let salarioDB = salarios.find(salario => salario.id === empleado.id);

  if(!salarioDB)
    throw new Error(`No existe el salario para el empleado ${ empleado.nombre }`)
    else {
      return{
        nombre: empleado.nombre,
        salario: salarioDB.salario,
        id: empleado.id
      };
    }
}

let getInformacion = async (id) => {
  let nombre = await getEmpleado(id);
  let resp = await getSalario(nombre);
  return `El empleado ${resp.nombre} tiene un salario de ${resp.salario}$`;
}
getInformacion(1)
  .then (mensaje => console.log(mensaje))
  .catch (error => console.log(error));
