function ejercicio38(){
    let montoMensual = parseFloat(prompt("Ingresa el monto a ahorrar mensualmente:"));
    let tasaInteres = parseFloat(prompt("Ingresa la tasa de interés anual (en porcentaje):"));
    let meses = parseInt(prompt("Ingresa el número de meses a ahorrar:"));

    let saldoAcumulado = 0;
    let mes = 1;

    while (mes <= meses) {
  
     let interes = saldoAcumulado * (tasaInteres / 100 / 12);  /* Divididir por 100 para convertir el porcentaje a decimal, y luego por 12 para obtener el interés mensual */
  
  
    saldoAcumulado += montoMensual + interes;
  
    mes++; 
    }

    alert("Después de " + meses + " meses, tendrás un saldo acumulado de $" + saldoAcumulado.toFixed(2));

}