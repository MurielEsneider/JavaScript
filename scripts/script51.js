function ejercicio51(){
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            if (!confirm("FizzBuzz")) {
                break;
            }
        } else if (i % 3 === 0) {
            if (!confirm("Fizz")) {
                break;
            }
        } else if (i % 5 === 0) {
            if (!confirm("Buzz")) {
                break;
            }
        } else {
            if (!confirm(i)) {
                break;
            }
        }
    }
}