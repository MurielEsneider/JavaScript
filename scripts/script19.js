function ejercicio19(){
    a = ("MENSAJE 1");
    b = ("MENSAJE 2");
    c = ("MENSAJE 3");
    d = ("MENSAJE 4");
    e = ("MENSAJE 5");
    f = ("MENSAJE 6");

    let mensaje = prompt("Ingrese una letra de la A  a la F:").toLowerCase();

    if (mensaje === "a"){
        alert("La letra A tiene el siguiente mensaje: " + a);
    } else if (mensaje === "b"){
        alert("La letra B tiene el siguiente mensaje: " + b);
    } else if (mensaje === "c"){
        alert("La letra C tiene el siguiente mensaje: " + c);
    } else if (mensaje === "d"){
        alert("La letra D tiene el siguiente mensaje: " + d);
    } else if (mensaje === "e"){
        alert("La letra E tiene el siguiente mensaje: " + e);
    } else if (mensaje === "f"){
        alert("La letra F tiene el siguiente mensaje: " + f);
    } else {
        alert("Ingrese una letra de la A a la F.")
    }
}


