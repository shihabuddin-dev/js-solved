/* Problem-14

Find the largest number among the following numbers using loop.
const numbers = [12, 45, 78, 23, 100, 89, 56, 99, 34];

*/

const numbers = [12, 45, 78, 23, 100, 5, 89, 56, 99, 34];

// Solution-1 by for loop 

let minNumber = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < minNumber) {
        minNumber = numbers[i];
    }
}
console.log(minNumber);


// solution-2 by Math.min 
let minNum = Math.min(...numbers);
console.log(minNum);