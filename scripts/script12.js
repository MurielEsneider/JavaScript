function ejercicio12(){
    let num1 = parseFloat(prompt("Por favor, ingresa el primer número:"));
    let num2 = parseFloat(prompt("Por favor, ingresa el segundo número:"));
    let num3 = parseFloat(prompt("Por favor, ingresa el tecer número:"));

    let mayor = Math.max(num1, num2, num3);
    let menor = Math.min(num1, num2, num3);
    let medio = num1 + num2 + num3 - mayor - menor;

    alert("El número mayor es :" + mayor);
    alert("El número menor es :" + menor);
    alert("El número del medio es: " + medio);
}