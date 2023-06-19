console.log('START');


let str = 'a';
let check = 0;

const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};

function getKey(str, obj) {
    for(let key in obj) {
        if(key == str) {
            check = 1;
        }
    }

    if(check == 1) {
        console.log('true');
    } else {
        console.log('false');
    }

}

getKey(str, obj);