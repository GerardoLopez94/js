/*
    Condicionales
*/

/*
    if - else
*/
let edad = 1;

if (edad >= 18){
    console.log("Eres mayor de edad");
}else{
    console.log("Eres menor de edad");
}

if (edad > 17){
    console.log("Eres mayor de edad");
}else{
    console.log("Eres menor de edad");
}

if (edad < 18){
    console.log("Eres menor de edad");
}else{
    console.log("Eres mayor de edad");
}

if (edad <= 17){
    console.log("Eres menor de edad");
}else{
    console.log("Eres mayor de edad");
}

/*
    if - else if - else
*/
let hora = 0;
if(hora >=0  && hora <= 5){
    console.log("Déjame Dormir");
}else if ( hora > 5 && hora <= 11 ){
    console.log("Buenos días")
}else if (hora > 11 && hora <= 18){
    console.log("Buenos Tardes");
}else{
    console.log("Buenos Noches");
}

/*
    Operador Ternario
*/ 
( (edad > 17)
    ? console.log("Eres mayor de edad") 
    : console.log("Eres menor de edad")  )

/*
    switch - case
*/
const dia = 2;
 switch (dia){
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sabado");
        break;
     default:
         console.log("No definida");
        break;
 }