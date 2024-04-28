function ejercicio22(){

    let numero1 = parseFloat(prompt("Ingrese el primer número:"));
    let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
    let operacion = prompt("Ingrese el operador (+, -, *, /):");
    
    let resultado;

    switch(operacion) {
        case '+':
            resultado = numero1 + numero2;
            break;
        case '-':
            resultado = numero1 - numero2;
            break;
        case '*':
            resultado = numero1 * numero2;
            break;
        case '/':
            if(numero2 === 0) {
                resultado = "Error: No se puede dividir por cero.";
            } else {
                resultado = numero1 / numero2;
            }
            break;
        default:
            resultado = "Operador inválido";
    }
    
    alert("El resultado de la operación es: " + resultado);
} 