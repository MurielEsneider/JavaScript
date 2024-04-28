function ejercicio46(){
    alert("Los primeros 5 números primos:");

    let contador = 2;
    let primosEncontrados = 0;

    while (primosEncontrados < 5) {
    let esPrimo = true;

    for (let i = 2; i <= Math.sqrt(contador); i++) {
        if (contador % i === 0) {
            esPrimo = false;
            break;
        }
    }

    if (esPrimo) {
        alert(contador);
        primosEncontrados++;
    }

    contador++;
}


}
