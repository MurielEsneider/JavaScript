function ejercicio27(){
    let evento = prompt("Ingrese el nombre del evento:".toLowerCase());

    switch (evento) {
    case "cumpleaños":
        alert("¡Feliz cumpleaños!.");
        break;
    case "boda":
        alert("¡Felicidades por tu boda!.");
        break;
    case "graduación":
        alert("¡Felicidades por tu graduación!.");
        break;
    case "aniversario":
        alert("¡Feliz aniversario!.");
        break;
    default:
        alert("¡Feliz " + evento + "!");
    }

}