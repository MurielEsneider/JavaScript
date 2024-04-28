function ejercicio24(){
    let peso = parseFloat(prompt("Ingrese el peso del paquete en kilogramos:".toLowerCase()));
    let destino = prompt("Ingrese el destino del envío (local, nacional, internacional):".toLowerCase());
    let tarifaBase = 5; 
    let tarifa;

    switch(destino) {
    case "local":
        tarifa = tarifaBase + 2; 
        break;
    case "nacional":
        tarifa = tarifaBase + 5; 
        break;
    case "internacional":
        tarifa = tarifaBase + 10; 
        break;
    default:
        tarifa = "Destino no válido";
    }

    if (typeof tarifa === "number") {
    alert("La tarifa de envío es: $" + tarifa.toFixed(2));
    } else {
    alert(tarifa);
    }

}