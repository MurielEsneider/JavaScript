function ejercicio35() {
    let numero = parseInt(prompt("Ingresa un número para mostrar su tabla de multiplicar:"));
    let multiplicador = 1;
    let tablaMultiplicar = "Tabla de multiplicar del " + numero + ":\n";

    while (multiplicador <= 10) {
        let resultado = numero * multiplicador;
        tablaMultiplicar += numero + " x " + multiplicador + " = " + resultado + "\n";
        multiplicador++;
    }

    alert(tablaMultiplicar);
}
