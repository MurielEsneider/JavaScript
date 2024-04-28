function ejercicio6(){
    let calificacion = parseFloat(prompt("Ingrese su calificación"));
    if (isNaN(calificacion)){
        alert ("Por favor ingresar una calificación válida")
    } else {
        if (calificacion >= 4.5 && calificacion <= 5.0) {
            alert("Tu calificación es A.");
        } else if (calificacion >= 4.0 && calificacion < 4.5) {
            alert("Tu calificaion es B.");
        } else if (calificacion >= 3.5 && calificacion < 4.0) {
            alert("Tu calificaion es C.");
        } else if (calificacion >= 3.0 && calificacion < 3.5) {
            alert("Tu calificacion es D.");
        } else if (calificacion >= 2.5 && calificacion < 3.0) {
            alert("Tu calificacion es F.");
        } else if (calificacion >= 1.0 && calificacion < 2.5) {
            alert("Tu calificacion es Reprobado.");
        } else {
            alert("Por favor ingrese una calificacion de 1.0 a 5.0");
        }
    }
}