function ejercicio25(){
    let opcion = prompt("Seleccione la conversión que desea realizar:\n1. Centímetros a pulgadas\n2. Pulgadas a centímetros\n3. Kilogramos a libras\n4. Libras a kilogramos");

    if (opcion === "1") {
    let centimetros = parseFloat(prompt("Ingrese la cantidad en centímetros:"));
    let pulgadas = centimetros / 2.54;
    alert(+ centimetros + " " + "centímetros son " +pulgadas + " " + "pulgadas.");

    } else if (opcion === "2") {
    let pulgadas = parseFloat(prompt("Ingrese la cantidad en pulgadas:"));
    let centimetros = pulgadas * 2.54;
    alert(+ pulgadas + " " + "pulgadas son " + centimetros + " " + "centímetros.");

    } else if (opcion === "3") {
    let kilogramos = parseFloat(prompt("Ingrese la cantidad en kilogramos:"));
    let libras = kilogramos * 2.20462;
    alert(+ kilogramos + " " + "kilogramos son " + libras + " " + "libras.");

    } else if (opcion === "4") {
    let libras = parseFloat(prompt("Ingrese la cantidad en libras:"));
    let kilogramos = libras / 2.20462;
    alert(+ libras + " " + "libras son" + kilogramos + " " + "kilogramos.");

    } else {
    alert("Opción no válida. Por favor, seleccione una opción válida.");
    }

}