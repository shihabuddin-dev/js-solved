/* Problem-5

Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
*/

function odd_even(numbers) {
    if (numbers % 2 === 0) {
        return "Even";
    }
    else {
        return "Odd"
    }
}

const oddEven = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = odd_even(oddEven);
console.log(result);