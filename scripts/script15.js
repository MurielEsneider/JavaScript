function ejercicio15(){

    let edad = parseFloat(prompt("Ingrese su edad:"))

    if (edad < 18){
        alert("Eres menor de edad.");
    } else if (edad >= 18 && edad <= 61){
        alert("Eres mayor de edad");
    } else if (edad >= 62){
        alert("Eres jubilado");
    } 
}