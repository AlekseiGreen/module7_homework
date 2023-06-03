console.log('START');

function revStr(str) {
    let splitStr = str.split('');
    let revArr = splitStr.reverse();
    let joinArr = revArr.join('');
    return joinArr;
}

console.log(revStr('Hello'));
