function ejercicio53(){
    let fibArray = [0, 1];
    for (let i = 2; i < 10; i++) {
    fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
    }

    alert(fibArray.join(', '));

}