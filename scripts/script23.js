function ejercicio23(){
    let palabra = prompt("Ingrese una palabra en inglés para traducir:".toLowerCase());
    let traduccion;

switch (palabra) {
    case "hello":
        traduccion = "Hola";
        break;
    case "apple":
        traduccion = "Manzana";
        break;
    case "car":
        traduccion = "Coche";
        break;
    case "book":
        traduccion = "Libro";
        break;
    case "cat":
        traduccion = "Gato";
        break;
    default:
        traduccion = "La palabra no tiene traducción disponible.";
}

alert("La traducción de '" + palabra + "' es: " + traduccion);

}