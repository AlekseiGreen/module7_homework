console.log('START');


let number = new Map([

    ["one", 1],

    ["two", 2],
  
    ["three", 3]

]);


for (let x of number) {
    console.log(`Ключ — ${x[0]}, значение — ${x[1]}`);
}