function ejercicio5(){
    let mes = prompt ("Ingresa un mes del año");
    mes = mes.toLowerCase();

    switch (mes){
        case "enero":
        case "marzo":
        case "mayo":
        case "julio":
        case "agosto":
        case "octubre":
        case "diciembre":
            alert ("El mes de "+ mes + " " + "tiene 31 días.");
            break;
        case "abril":
        case "junio":
        case "septiembre":
        case "noviembre":
            alert("El mes de " + mes + " " + "tiene 30 días.");
            break
        case "febrero":
            alert ("El mes de febrero tiene 28 o 28 días dependiendo del año")
    }
}