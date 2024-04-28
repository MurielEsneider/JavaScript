function ejercicio20(){
    
    let dia1 = "Lunes";
    let dia2 = "Martes";
    let dia3 = "Miércoles";
    let dia4 = "Jueves";
    let dia5 = "Viernes";
    let dia6 = "Sábado";
    let dia7 = "Domingo";

    let num = parseInt(prompt("Ingrese un número del 1 al 7:"));

    if (num === 1){
        alert("El día correspondiente a ese número es: " + dia1);
    } else if (num === 2){
        alert("El día correspondiente a ese número es: " +dia2);
    } else if (num === 3){
        alert("El día correspondiente a ese número es: " +dia3);
    } else if (num === 4){
        alert("El día correspondiente a ese número es: " +dia4);
    } else if (num === 5){
        alert("El día correspondiente a ese número es: " +dia5);
    } else if (num === 6){
        alert("El día correspondiente a ese número es: " +dia6);
    } else if (num === 7){
        alert("El día correspondiente a ese número es: " +dia7);
    } else {
        alert("Por favor ingrese un número del 1 al 7.");
    }
    
}
