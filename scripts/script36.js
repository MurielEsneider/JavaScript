function ejercicio36(){
    
    let opcion = 's';

    while (opcion === 's') {
    let celsius = parseFloat(prompt("Ingresa la temperatura en grados Celsius:").toLowerCase());

    let fahrenheit = (celsius * 9/5) + 32;

    alert(celsius + " grados Celsius equivale a " + fahrenheit.toFixed(2) + " grados Fahrenheit.");

    opcion = prompt("¿Quieres realizar otra conversión? (s/n)");
    }

}