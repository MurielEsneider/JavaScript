function ejercicio11(){
    let numero = parseInt(prompt("Escribre un número "));

    if ( numero > 0 ){
        alert("El número ingresado es positivo");
    } else if (numero < 0) {
        alert("El número ingresado es negativo");
    } else {
        alert("El número ingresados es cero");
    }
}