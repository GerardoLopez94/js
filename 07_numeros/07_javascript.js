let a = 2;

let b = new Number(1);

let c = 7.19;

let d = "5.6";

console.log(a);
console.log(b);
//Redondear
console.log(c.toFixed(1));
//Solo entero
console.log(parseInt(c));
// typeof

console.log(typeof c, typeof d);
//Suma
console.log(a + b);
//Concatena ojo
console.log(c + d);

//Cansting
console.log(c + parseFloat(d));
