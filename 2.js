console.log('START');


let check = 0;

function getPrimeNonPrime(num) {
    if(num <= 1000 && num > 1) {
        for(let i=2; i < num; i++) {
            if(!(num % i)) {
                check = 1;
                return 'Непростое число.';
            }
        }
        if(check != 1) {
            return 'Простое число.';
        }
    } else {
        return 'Данные неверны.';
    }
}

console.log(getPrimeNonPrime(999));
