function ejercicio47(){
    let numero;

    do {
    numero = parseInt(prompt("Por favor, ingresa un número positivo:"));

    if (numero <= 0 || isNaN(numero)) {
        alert("Error: Debes ingresar un número positivo.");
    }
    } while (numero <= 0 || isNaN(numero));

    alert("Número ingresado correctamente: " + numero);

}