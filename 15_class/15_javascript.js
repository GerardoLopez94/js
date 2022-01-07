let contador = 0;

while ( contador < 10 ){
    console.log(contador);
    contador++;
}

//contador = 0;

do{
    console.log(`Do while ${contador}` );
    contador++;
}while(contador < 10);

for (let index = 0; index < 10; index++) {
    console.log(`For ${index}` );
    
}

let numero = [10,20,30,40,50,60,70,80,90];

for (let index = 0; index < numero.length; index++) {
    console.log(numero[index]);
    
}

const ger ={
    nombre: "Gerardo",
    apellido: "Lopez",
    edad: 35
}

// Se utiliza para objetos primitivos
for (const propiedad in ger) {
    console.log(`key: ${propiedad}, Value: ${ger[propiedad]}`)
}

// Se utiliza para arreglos o cadenas o etc
for (const elemento of numero) {
    console.log(elemento);
}

let cadena = 'Hola Mundo';

for (const caracter of cadena) {
    console.log(caracter);
}