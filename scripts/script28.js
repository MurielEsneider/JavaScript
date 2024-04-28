function ejercicio28(){
    let opcion;

    do {
    opcion = prompt("Seleccione una opción: \n1. Saludar \n2. Despedirse \n3. Mostrar fecha actual \n4. Salir");

    switch (opcion) {
        case "1":
            alert("¡Hola! Bienvenido.");
            break;
        case "2":
            alert("¡Hasta luego! Que tengas un buen día.");
            break;
        case "3":
            let fechaActual = new Date();
            alert("La fecha actual es: " + fechaActual.toLocaleDateString());
            break;
        case "4":
            alert("Saliendo del programa...");
            break;
        default:
            alert("Opción no válida. Por favor, seleccione una opción válida.");
    }
    } while (opcion !== "4");
}