// Code your solutions in this file
function writeCards(array) {
    return array.map((item) => `Thank you, ${item}, for the wonderful surprise gift!`)
}

function countDown() {
    let n = 10;
    while (n >= 0) {
        console.log(n--);
    }
}

console.log(countDown(10))