function ejercicio33(){
    let N = parseInt(prompt("Ingresa el número que deseas generar la secuencia Fibonacci:"));

    let a = 0, b = 1;
    let contador = 0;

    while (contador < N) {
     alert(a);
     let siguiente = a + b;
      a = b;
      b = siguiente;
     contador++;
    }

}