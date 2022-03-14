// Code your solutions in this file
const names = ['Ada', 'Brendan', 'Ali'];
const event = 'birthday';
let thankYouArray = [];

function writeCards (names,event) {
    for (let i = 0; i < names.length; i++){
        thankYouArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouArray;
}

// function countDown() {
//     let count = 10;
//     while (count >= 0) {
//         console.log(count--);
//     }
// }
// countDown (10)

let countDown = (n) => {
    let i = 10;
    while (i >= 0) {
        console.log(i--);
    }
}
countDown(10)
