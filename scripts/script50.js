function ejercicio50(){
    alert("Los primeros 5 números primos:");

    let numero = 2;
    let cantidadPrimosEncontrados = 0; 

    while (cantidadPrimosEncontrados < 5) {
    let esPrimo = true; 

    
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            esPrimo = false; 
            break; 
        }
    }

    if (esPrimo) {
        alert(numero);
        cantidadPrimosEncontrados++;
    }
    numero++; 
    }

}