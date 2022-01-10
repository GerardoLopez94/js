//Desestructuración

const numeros = [1 ,2 , 3];

//sin  desestructuración
let uno = numeros[0], dos = numeros[1], tres = numeros[2];
console.log(uno);
console.log(dos);
console.log(tres);

//con desestructuración
const [one,  two, three] = numeros;
console.log(one);
console.log(two);
console.log(three);

const persona ={
    nombre: "Gerardo",
    apellido: "Lopez",
    edad: 27
};

let {nombre, apellido, edad} = persona;
console.log(nombre);
console.log(apellido);
console.log(edad);
