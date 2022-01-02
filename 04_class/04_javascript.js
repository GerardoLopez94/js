/*
  Constantes en javascript
*/

const PI = 3.1416;

console.log("Probamos declarar una constate sin asignar valor");
//No se puede declarar una constante vacía
//const NUEVE;

console.log("Probamos asignar otro valor a PI")
//No podemos asignar otro valor a una constante
//PI = 3.15;

//Miremos el comportamiento de cons con objeos y arreglos

const objeto = {
    nombre: "Gerardo",
    edad: 27
};

const colores = ["blanco", "negro","azul"];

console.log(objeto);
console.log(colores);


console.log("*************ADD****************");

/*Probemos agregar una propiedad más al objeto*/
objeto.correo = "paraguay@hotmail.com";

/*Probemos agregar un color más al array*/ 
colores.push("rojo");

console.log(objeto);
console.log(colores);

/*La constantes no pueden cambiar pero depente del tipo de dato*/
console.log("La constantes no pueden cambiar pero depente del tipo de dato");


