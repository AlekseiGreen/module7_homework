console.log('START');
let num = 2;
let str = 'S';
let boo = true;

let value = boo;

if (typeof(value) == 'number') {
    console.log(value, ' - число.');
} else if (typeof(value) == 'string') {
    console.log(value, ' - строка.');
} else if (typeof(value) == 'boolean') {
    console.log(value, ' - логический тип.');
}
