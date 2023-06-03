console.log('START');

let arr = [0, 1, 2, 3, 4, 5, 6, null];
let markEven = 0;
let markOdd = 0;
let markNull = 0;

for (let i in arr) {
    if(null != arr[i] && 0 != arr[i]) {
        if(0 == arr[i] % 2) {
            ++markEven;
        } else {
            ++markOdd;
        }
    } else {
        ++markNull;
    }
}

console.log(`Количество четных чисел ${markEven}`);
console.log(`Количество нечетных чисел ${markOdd}`);
console.log(`Количество нулевых чисел ${markNull}`);
