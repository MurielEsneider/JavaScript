function ejercicio37(){
    let numero = parseInt(prompt("Ingresa un número para verificar si es primo:"));
    let esPrimo = true;
    let divisor = 2;

    while (divisor < numero) {
    if (numero % divisor === 0) {
    
    esPrimo = false;
    break;
     }
    divisor++;
    }

    if (esPrimo && numero > 1) {
    alert(numero + " es un número primo.");
    } else {
    alert(numero + " no es un número primo.");
    }

}