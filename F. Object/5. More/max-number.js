/* Problem-15

Find the largest number among the following numbers using loop.
const numbers = [12, 45, 78, 23, 89, 56, 99, 34];

*/

const numbers = [12, 45, 78, 23, 89, 56, 99, 34];

// Solution-1 by for loop 
let maxNumber = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
    }
}
console.log(maxNumber);


// solution-2 by Math.max 
let maxNum = Math.max(...numbers);
console.log(maxNum);