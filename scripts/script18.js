function ejercicio18(){

    let  nota= prompt("Ingrese su nota: ");

    if (nota >= 11){
        alert("Por favor ingrese una nota del 1 al 10.");
    } else if (nota >= 9){
        alert("Su nota es A");
    } else if (nota >= 7 ) {
        alert("Su nota es B");
    } else if (nota >= 5 ) {
        alert("Su nota es C");
    } else if (nota >= 3 ) {
        alert("Su nota es D");
    } else if (nota >= 0 ) {
        alert("Su nota es F");
    }
 
}