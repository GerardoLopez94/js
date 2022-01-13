
/* Clases : Modelo a seguir
 * Objetos - Es una instancia de una clase
 *  Atributos: es una caracteristica o propiedad del objeto
 * Métodos: - Son las acciones que un objeto puede realizar
|* 
 */
/*
const animal = { 
    nombre: "Snoopy",
    sonar(){
        console.log('Hago sonidos por que estoy vivo');
    }
}


console.log(animal);*/

//función consructura
/*function Animal (nombre,genero){
    //Atributos
    this.nombre = nombre;
    this.genero = genero;
    //Métodos
}

this.sonar = function(){
    console.log('Hago sonidos por que estoy vivo')
},
this.saludar = function(){
    console.log(`Hola me llamo ${this.nombre}`);
}*/

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

const snoopy = new Animal('Snoopy', 'Macho');
const lolaBunny = new Animal('Lola Bunny', 'Hembra');
console.log(snoopy, lolaBunny);
