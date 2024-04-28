function ejercicio9(){
    let colorArcoiris = ["rojo","naranja","amarillo","verde","azul","añil","violeta"];
    let colorIngresado = prompt("Ingresar un color").toLowerCase();
    if (colorArcoiris.includes(colorIngresado)){
        alert("El color ingresado es un color arcoiris.");
    } else {
        alert("El color ingresado no es un color arcoiris.");
    }
}