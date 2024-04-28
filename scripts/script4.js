function ejercicio4(){
    let letra = prompt("Por favor, ingresa una letra:").toLowerCase(); 

    if (letra.length === 1 && /[a-z]/.test(letra)) {
  
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        alert("La letra" + letra + "es una vocal.");
    } else {
        alert("La letra" + letra + "es una consonante.");
    }
    } else {
    alert("Por favor, ingresa una única letra del alfabeto.");
}
}