function ejercicio10(){
    let animalIngresado = prompt("Ingresa un animal").toLowerCase();

    let mamiferos = ["perro","gato","elefante","ballena"];
    let aves = ["pato","águila","pinguino", "búho"];
    let reptiles = ["serpiente","lagarto","cocodrillo", "tortuga"];
    let anfibios = ["rana","salamandra", "sapo", "axolote"];
    let peces = ["salmón","pez payaso","tiburón"]
    let invertebrados = ["araña", "caracol", "medusa","gusano"];

    if(mamiferos.includes(animalIngresado)){
        alert("El animal ingresado es un mamífero.");
    } else if (aves.includes(animalIngresado)){
        alert("El animal ingresado es un ave.");
    } else if (reptiles.includes(animalIngresado)){
        alert("El animal ingresado es un reptíl.");
    } else if (anfibios.includes(animalIngresado)){
        alert("El animal ingresado es un anfíbio.");
    } else if (peces.includes(animalIngresado)){
        alert("El animal ingresado es un pez.");
    } else if (invertebrados.includes(animalIngresado)){
        alert("El animal ingresado es un invertebrado.");
    } else {
        alert("No se reconoce el animal ingresado.");
    }
}