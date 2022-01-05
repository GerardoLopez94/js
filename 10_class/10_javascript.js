//Función declarada

//Funcion que no recibe parámetros y tampoco valor
function estEsUnaFuncion(){
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
};

function unaFuncionQueDevuelveValor(){
    return 'Hola'
}

// llamamos a la funcion
estEsUnaFuncion();

console.log(unaFuncionQueDevuelveValor());

//Funcion que recibe valores
function saludar(nombre='Desconocido', edad=0){
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años`);

};
saludar('Gerardo', 27);
saludar();

//Que loco
// Se llama antes de ser declarada
funcionDeclarada();

//Función declarada
function funcionDeclarada(){
    console.log(`Esto es un a function declarada puede invocarse en cualquier parte del código incluso 
    antes de se declarada`);
}


//Funciones expresadas
const funcionExpresada = function() {
    console.log(`Este es un función expresada que se le ha asignado
    como valor a una variable. Si invocamos esta función antes de su definición js nos va patear`);
}

funcionExpresada();
