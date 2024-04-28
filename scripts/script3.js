function ejercicio3(){
    let year = parseInt(prompt("Ingresar año"))
    if (( year % 4 == 0 )&& ( year % 100 != 0 || year % 400 == 0)){
       alert("El año es bisiesto"); 
    }else{
        alert("El año no es bisiesto");
    }
  
}