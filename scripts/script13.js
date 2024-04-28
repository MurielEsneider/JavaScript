function ejercicio13(){

    let dia = prompt("Ingresa un día de semana").toLowerCase();

    if (dia === "lunes" || dia === "martes" || dia === "miercoles" || dia === "jueves" || dia==="viernes" || dia === "sabado"){
        alert("El día ingresado es laboral.");
    } else if (dia === "domingo"){
        alert("El dia ingresado es de descanso.");
    } else {
        alert("Por favor ingrese un día de semana válido.");
    }
   
}   
