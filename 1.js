console.log('START');


let array = [0, 1, 2, 3, 4, 5, 6, null];
let markEven = 0;
let markOdd = 0;
let markNull = 0;


function getParity(arr) {
    for (let i = 0; i < arr.length; i++) {
        if(null != arr[i] && 0 != arr[i]) {
            if(arr[i] % 2 == 0) {
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
}

console.log(`--> ${typeof('')}`);

getParity(array);