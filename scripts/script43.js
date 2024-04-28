function ejercicio43(){
    let numero;

    do {
        numero = parseInt(prompt("Por favor, ingresa un número entre 1 y 5:"));
    } while (numero < 1 || numero > 5 || isNaN(numero));
    
    alert("El número ingresado es: " + numero);
      
}