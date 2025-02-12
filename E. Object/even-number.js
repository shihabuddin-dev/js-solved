/* Problem-17

Print only even numbers from the array below.
const numbers = [10, 25, 30, 47, 52, 61, 70, 85, 90];

*/
const numbers = [10, 25, 30, 47, 52, 61, 70, 85, 90];


// Solution-1 by for loop 

for (let i = 0; i < numbers.length; i++) {
    if (i % 2 === 0) {
        console.log(numbers[i]);
    }
}

// solution-2 by while loop 
let j = 0;
while (j < numbers.length) {
    j++;
    if (j % 2 === 0) {
        console.log(numbers[j]);
    }
}