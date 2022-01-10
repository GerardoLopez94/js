
var hola = "Hola mundo";
//var a = 3;

console.log(hola);

/* Si se declara con var, entonces,
es un variable de ambito global.
*/


if (true){
    var a = 3;
    let hello = "Hello World";
}

console.log(a);

//No se puede da error
//console.log(hello);

//Note
//No uses var, utiliza let
//Si utilizas var la variable se podra vet
// en el objeto windoms en el navegador

//Ambito de global mala
console.log("*****************var**************");
var musica = "Rock";
console.log("Este es el valor de musica antes del bloque",
musica);
{
    var musica = "Pop";
    console.log("Este es el valor de musica dentro del bloque",
musica);
}

console.log("Este es el valor de musica después del bloque",
musica);
console.log("*****************let**************");
let musica2 = "Rock";
console.log("Este es el valor de musica antes del bloque",
musica2);
{
    let musica2 = "Pop";
    console.log("Este es el valor de musica dentro del bloque",
musica2);
}

console.log("Este es el valor de musica después del bloque",
musica2);