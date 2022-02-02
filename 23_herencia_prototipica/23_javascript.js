//Función construtura donde asignamos los métodos al prototipo
function Animal (nombre,genero){
    //Atributos
    this.nombre = nombre;
    this.genero = genero;
}

//Métodos agregados al prototipo de la función constructora
Animal.prototype.sonar = function(){
    console.log('Hago sonidos por que estoy vivo')
},
Animal.prototype.saludar = function(){
    console.log(`Hola me llamo ${this.nombre}`);
}

//Herencia Prototípica

function Perro (nombre, genero, tamanio){
    this.super = Animal;

    this.super(nombre, genero);
    this.tamanio = tamanio;
}

//Perroestá heredando de Animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

//sobreescritura de métodos del Prototipo 
// padre en el hijo

Perro.prototype.sonar = function (){
    console.log('I am a Dog');
}

Perro.prototype.ladrar = function () {
    console.log('guau guau');
}

const pascal = new Perro('Pascal', 'Macho', 'Pequenio');

console.log(pascal);
pascal.sonar();