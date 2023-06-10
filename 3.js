console.log('START');


function getSum(x) {
    return function(y) {
        return x + y;
    };
}

let getFunc = getSum(6);

console.log(getFunc(3));