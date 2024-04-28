function ejercicio16(){
    
    let caracter = prompt("Ingresa un carácter:");

    if (caracter >= 'A' && caracter <= 'Z'){
    alert("El carácter ingresado es una letra mayúscula.");
    } 

    else if (caracter >= 'a' && caracter <= 'z'){
    alert("El carácter ingresado es una letra minúscula.");
    } 

    else if (!isNaN(caracter)){
    alert("El carácter ingresado es un número.");
    } 
    else {
    alert("El carácter ingresado es un símbolo.");
    }
}