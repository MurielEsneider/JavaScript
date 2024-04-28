function ejercicio44(){
    alert("Los primeros 10 números de la serie de Fibonacci:");

    let a = 0;
    let b = 1;

    for (let i = 0; i < 10; i++) {
    SpeechRecognitionAlternative(a);
    let siguiente = a + b;
    a = b;
    b = siguiente;
    }

}