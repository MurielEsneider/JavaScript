function ejercicio26(){
    let valor = prompt("Ingrese un valor:");

    if (!isNaN(valor)) {
    alert(+valor + " " + "es un número.");
    } else if (typeof valor === "string") {
    alert(+valor + " " +"es una cadena de texto.");
    } else if (typeof valor === "boolean") {
    alert(+valor + "" +"es un booleano." );
    } else if (typeof valor === "object") {
    alert(+valor + "" +"es un objeto.");
    } else {
    alert("El tipo de " +valor + " " + "es indefinido.");
    } 
}