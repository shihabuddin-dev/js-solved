/* Problem-2

Write a JavaScript code to get the even numbers from an array using any looping technique.

Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

Output: [12, 98, 76, 46]
*/


const numbers = [12, 98, 5, 41, 23, 78, 46];

// Solution-1 by using for loop 
let evenNum = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNum.push(numbers[i]);
    }
}
console.log(evenNum);


// Solution-2 by using While loop
let evenNumbers = [];
let j = 0;
while (j < numbers.length) {
    if (numbers[j] % 2 === 0) {
        evenNumbers.push(numbers[j]);

    }
    j++;
}
console.log(evenNumbers);