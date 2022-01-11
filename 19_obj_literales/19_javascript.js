//objeto literales
let nombre = 'kenai', edad = 7;

const perro ={
    nombre: nombre,
    edad: edad,
    ladrar: function (){
        console.log("gua-gua");
    }
}

console.log(perro);

//ojo
const dog = {
    nombre,
    edad,
    ladrar (){
        console.log("guauu guauu!!");
    },
    raza: "Callejero"
}

dog.ladrar();