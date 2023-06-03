console.log('START');

let array = [1, 2, 3];

console.log(array.length);

let mixArray = array.map(function(item, index, array) {
    return item * 2;
});

for (let i in mixArray) {
    console.log(mixArray[i]);
}
