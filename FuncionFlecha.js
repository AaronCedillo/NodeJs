let sumar = ( a, b ) => a + b

console.log( sumar(10, 20));

let saludo = () => 'Hola Mundo';

console.log(saludo());

let persona = {
  nombre: 'Adrian',
  apellido: 'Cedillo',
  edad: 23,
  getNombre() {
    return `${ this.nombre } ${ this.apellido } - edad: ${ this.edad }`;
  }
}

console.log(persona.getNombre());
