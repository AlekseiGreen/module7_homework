console.log('START');


const obj = {
    a: 1,
    b: 2
};


function getKey(obj) {
    const ownObj = Object.create(obj);
    ownObj.c = 3;
    ownObj.d = 4;
    
    for(let key in ownObj) {
        if(ownObj.hasOwnProperty(key)) {
            console.log(key, '=', ownObj[key]);
        }
    }
}

getKey(obj);