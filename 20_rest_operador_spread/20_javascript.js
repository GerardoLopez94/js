//parámetro rest
function sumar (a, b, ...c){
    let resultado = a + b;
    c.forEach((n) => resultado += n )
    return resultado;
} 

console.log(sumar(1,2,3,4));

const arr1=[1,2,3,4,5]
const arr2=[6,7,8,9,0]
console.log(arr1);
console.log(arr2);
//operador spread
const arr3 = [...arr1, ...arr2];

console.log(arr3);