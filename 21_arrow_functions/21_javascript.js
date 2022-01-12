//Arrow functions

const saludar = () =>{
    console.log("Hola");
}


const saludar2 = () => console.log("Hola2");
const saludar3 = (nombre) => console.log(`Hola ${nombre}`);

saludar();

saludar2();

saludar3("Gerardo");

const sumar = function(a,b){
    return a+b;
};

const sumar2 = (a,b) => a+b;


console.log(sumar(8,7));
console.log(sumar2(10,7));

const funcionDeVariasLineas = () => {
    console.log("uno");
    console.log("dos");
    console.log("tres");

}

funcionDeVariasLineas();
const numeros = [1,2,3,4,5];

numeros.forEach( (e) => console.log(e*2) );
 
//función declarada
function Perro(){
    console.log(this);
}

Perro();

// diferencia entre function normal y 
//Arrow function
//En el objeto literal no se usa Arrow functions

const dog = {
    nombre:'Pascal',
    ladrar: function(){
        console.log(this);
    },
    ladrar2: () => {
        console.log(this);
    },
    ladrar3() {
        console.log(this);
    }
}

dog.ladrar();
dog.ladrar2();
dog.ladrar3();