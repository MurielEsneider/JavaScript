function ejercicio40(){
    let numero;

    do {
    numero = parseInt(prompt("Por favor, ingresa un número mayor que 100:"));
    } while (numero <= 100 || isNaN(numero));

    alert("El número ingresado es: " + numero);

}