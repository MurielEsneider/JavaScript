function ejercicio32() {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    let intentos = 0;

    while (true) {
        const input = prompt("Adivina el número (entre 1 y 100):");

        if (input === null) { 
            alert("¡Has cancelado el juego!");
            return; 
        }

        const numeroUsuario = parseInt(input);
        intentos++;

        if (numeroUsuario === numeroAleatorio) {
            alert("¡Felicidades! Adivinaste el número en " + intentos + " intentos.");
            break; /* Salir del bucle */
        } else if (numeroUsuario < numeroAleatorio) {
            alert("El número es mayor. Intenta de nuevo.");
        } else {
            alert("El número es menor. Intenta de nuevo.");
        }
    }
}
