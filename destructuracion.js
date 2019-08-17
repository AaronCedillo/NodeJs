let persona = {
  nombre: 'Adrian',
  apellido: 'Cedillo',
  edad: 23,

  getNombre: function() {
    return `${this.nombre} ${this.apellido} - edad: ${this.edad}`;
  }
}

//console.log(persona.getNombre());

// Destructuracion:

let {nombre, apellido, edad} = persona;

console.log(nombre, apellido, edad);
