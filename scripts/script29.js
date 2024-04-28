function ejercicio29(){
    let numero = parseInt(prompt("Ingrese un número entero positivo:"));
    let suma = 0;
    let contador = 1;

    while (contador <= numero) {
    suma += contador;
    contador++;
    }
    alert("La suma de todos los números enteros positivos desde 1 hasta " +numero + " " + "es: " + suma +".");

}