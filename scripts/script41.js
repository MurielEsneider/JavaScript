function ejercicio41(){
    let numeroAleatorio;
    let intentos = 0;

    do {
    numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    intentos++;
    } while (numeroAleatorio !== 7);

    alert("Se obtuvo un 7 después de " + intentos + " intentos.");

}