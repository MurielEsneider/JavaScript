function ejercicio34(){
    let numero = parseInt(prompt("Ingresa un número:"));
    let cantidadDigitos = 0;
    let numeroAbsoluto = Math.abs(numero); 


    if (numero === 0) {
    cantidadDigitos = 1;
    }

    while (numeroAbsoluto !== 0) {
    numeroAbsoluto = Math.floor(numeroAbsoluto / 10);
     cantidadDigitos++;
    }

    alert("El número ingresado tiene " + cantidadDigitos + " dígitos.");

}