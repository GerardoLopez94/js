let nombre = "Gerardo";
let apellido = "Lopez";

//Concatenación
console.log('Concatenación');
let saludo = "Hola mi nombre es " + nombre + " " + apellido;

console.log(saludo);

//Interpolación de variables.
//Template String
console.log('Interpolación de variables');

let saludo2 = `Hola mi nombre es ${nombre} ${apellido}`;

console.log(saludo2);

console.log("Ventaja de interpolación");
let ul2 = `
    <ul>
        <li> Primavera </li>
        <li> Verano </li>
        <li> Otoño </li>
        <li> Invierno </li>
    </ul>
`;
console.log(ul2);
