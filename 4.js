console.log('START');


function showRange(a, b) {
    let startInterval = setInterval(function() {
        console.log(a++);
    }, 1000, 1, 2);

    setTimeout(function() {
    clearInterval(startInterval);
}, (b - a + 1) * 1000);
}

showRange(4, 5);