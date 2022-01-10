try {
    console.log(`En el Try se agrega el 
    código a evaluar`);
    noExiste;
    console.log(`Segundo mensaje en el Try`);
}catch(error){
    console.log(`Catch, captura cualquier error surguido
    o lanzado en el Try`)
    console.log(error);
}finally{
    console.log(`El bloque finally se ejecutar siempre
    al final de un bloque Try-Catch`);
}

try{
    let numero = "y";
    if (isNaN(numero)){
        throw new Error(`El caracter introducido
        no es un número`);
    }
    console.log(numero * numero);
}catch(error){
    console.log(`Se produjo el siguiente errpr ${error}`)
}