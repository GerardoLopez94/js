//Arreglos
const a = [];

const b = [1, true, 'jajaj', [1,2,3, ['A','B', 'C']]];
console.log(a);
console.log(b);

console.log(b.length);

console.log(b[2]);
console.log(b[3][3][2]);
//Otra manera de crear un arreglo
const c = Array.of("X", "Y", "Z", 9, 8, 7);

console.log(c);

const d = Array(100).fill(false);

console.log(d);

//No se utiliza

const f = new Array();

console.log(f);

const colores = ['Rojo', 'Verde', 'Azul'];
colores.push("Negro");
console.log(colores);
colores.pop();
console.log(colores);

colores.forEach(function(el, index){
    console.log(`<li id="${index}" >${el}</li>`);
});

