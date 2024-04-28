function ejercicio31(){
    let numeroIngresado = parseInt(prompt("Ingresa un número para calcular su factorial:"));
    let factorial = 1;
    let contador = 1;

    while (contador <= numeroIngresado) {
    factorial *= contador;
    contador++;
    }

    alert("El factorial de " + numeroIngresado + " es: " + factorial);

}