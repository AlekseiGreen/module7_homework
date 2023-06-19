console.log('START');


function NoneProto() {
    const obj = Object.create(null);;
    console.log(obj);
    console.log(Object.getPrototypeOf(obj));
}

console.log(NoneProto());
