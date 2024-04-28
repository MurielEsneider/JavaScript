function ejercicio17(){
    let num1 = (prompt("Ingrese primer número: "));
    let num2 = (prompt("Ingrese su segundo número: "));

    if (num1 % num2 === 0){
        alert(num1 + " es divisible entre " + num2);
    } else if (num2 % num1 === 0){
        alert(num2 + " es divisible entre " + num1);
    } else {
        alert(num1 + " y " + num2 + " no son divisibles entre sí");
    }
}

