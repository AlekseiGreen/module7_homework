console.log('START');
let num = prompt('Enter your value:');
++num;

if (typeof(num) == 'number') {
    console.log('Принадлежит к множеству Number.');
    if (isNaN(num)) {
        console.log('Значение числом не является.');
    } else {
        if (num % 2 === 0) {
            console.log('И является четным числом.');
        } else {
            console.log('И является нечетным числом.');
        }
    }
} else {
    console.log('Упс, кажется, вы ошиблись.');
}
