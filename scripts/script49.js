function ejercicio49(){

    let numero = (prompt("Ingrese un número para obtener su factorial: "));
    let factorial = 1;
    
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    
    alert("El factorial de " + numero + " es: " + factorial);
    
}