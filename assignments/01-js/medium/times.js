/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    const timeNow = Date.now()
    let sum = 0;
    for(let i=0;i<n;i++){
        sum+=i;
    }

    const timeAfterComputation = Date.now()

    return (timeAfterComputation-timeNow)/1000;
}

const n100 = calculateTime(100)
const n100000 = calculateTime(100000)
const n1000000000 = calculateTime(1000000000)

console.log(n100)
console.log(n100000)
console.log(n1000000000)
