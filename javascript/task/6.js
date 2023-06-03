console.log('START');

let arr = [1, 2, 3, 4, 5]
let control = 0;
let mark = 0;

for (let gen_i in arr) {
    for (let sub_i in arr) {
        if(gen_i != sub_i) {
            if(arr[gen_i] == arr[sub_i]) {
                console.log('Совпадение');
                mark= 1;
            } else {
                ++control;
            }
        }
        if(mark == 1) {
            break;
        }
    }
    if(mark == 1) {
        break;
    }
}

if(control == ((arr.length * arr.length) - arr.length)) {
    console.log('Нет cовпадений');
}