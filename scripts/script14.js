function ejercicio14(){
    let mes = prompt("Por favor ingrese un mes").toLowerCase();

    let estacion1 = "invierno";
    let estacion2 = "primavera";
    let estacion3 = "verano";
    let estacion4 = "otoño";

    if (mes === "enero" || mes === "frebrero" || mes === "diciembre"){
        alert("La estación del mes ingresado es: " + estacion1);
    } else if (mes === "marzo" || mes === "abril" || mes === "mayo"){
        alert("la estación del mes ingresado es: " + estacion2)
    } else if (mes === "junio" || mes === "julio" || mes === "agosto"){
        alert("La estación del mes ingresado es: " +estacion3);
    } else if ( mes === "septiembre" || mes === "octubre" || mes === "noviembre"){
        alert("La estación del mes ingresado es: " + estacion4);
    } else{
        alert("Ingresa un mes válido.");
    }
}