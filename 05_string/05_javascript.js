/* Cadenas de texto*/
let nombre ='Gerardo';
let apellido = 'Lopez';

/*Creando con el constructor*/
let saludo = new String('Hola Mundo');

console.log(nombre,apellido,saludo);

console.log(
  nombre.length,
  apellido.length,
  saludo.length,
  nombre.toUpperCase(),
  apellido.toLowerCase(),
  saludo.includes('Hola'),
  saludo.includes('Gerardo')
)
