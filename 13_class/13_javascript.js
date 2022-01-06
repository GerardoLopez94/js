/*
    Operadores
    Aritmética: + - * / % ()
*/

let a = 5 + (5 - 10) * 3;
let modulo = 5%2

console.log(a);

console.log(modulo);

/*
    Operadores relacionales
    > , <, >=, <=, == , ===, !=, !==
*/

console.log( 8 > 9);
console.log( 9 > 8);
console.log( 8 >= 9);
console.log( 9 >= 8);
console.log( 7 < 7);
console.log( 7 <= 7);


/*
 = 1 igual asignación
 == 2  iguales es comparación de valores
 === 3 iguales es comparación de tipo de dato y de valor

*/

console.log(7 == 7);
console.log("7" == 7);
console.log("7" === 7);
console.log(0 == false);
console.log(0 === false);

/*
    Incremento y decremento

*/
let i = 1;

//i = i + 2
i += 2;
console.log(i);
i -= 1
console.log(i);
i /= 2
console.log(i);
/*
    Operador unario
    
*/
i++;
console.log(i);
i--;
console.log(i);
++i;
console.log(i);
--i;
console.log(i);


console.log("**************************");
i = 1

console.log(i++); //se suma después de hacer el console.log
console.log(i);

console.log("**************************");
i = 1

console.log(++i); //se suma antes de hacer el console.log
console.log(i);

/*
    Lógicos
    ! not
    || Or
    && and
*/
console.log("**********Lógicos***************");
console.log(!true);
console.log( (9===9) || ("9"===9) );
console.log( (9===9) && ("9"===9) );
console.log( (9===9) && ("9"==="9") );
