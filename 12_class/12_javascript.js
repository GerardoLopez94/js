/*
    En javascript todo es un objeto
    Cuando declaramos un objeto con const lo que estamos haciendo
    es evitar que otro objeto ocupe su lugar en memoria
*/

const b = {};
console.log(b);

const c = new Object();
console.log(c);

const ger = {
    nombre: "Gerardo",
    apellido: "López",
    edad: 27,
    pasatiempos: ["Trabajar", "Estudiar", "Vivir"],
    soltero: false,
    contacto: {
        email: "gerardo.a.lopez1994@gmail.com",
        github: "GerardoLopez94",
    },
    saludar: function(){console.log(`Hola, mi nombre es ${this.nombre}` )},
}

ger.saludar();
// Se puede acceder al valor de la propiedades de un objeto de la siguiente forma
// Esta forma es la menos utilizada
console.log(ger["nombre"]);
console.log(ger["apellido"]);

//La forma más utilizada es con el punto
console.log(ger.contacto);
console.log(ger.pasatiempos);
console.log(ger.pasatiempos[1]);
console.log(ger.contacto.email);

console.log(Object.keys(ger));
console.log(Object.values(ger));
console.log(ger.hasOwnProperty("nombre"));
console.log(ger.hasOwnProperty("nacimiento"));


