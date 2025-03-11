/* Problem-17

Find the height number in the array below.
const numbers = [167, 190, 120, 165, 137];
*/

const numbers = [167, 190, 120, 165, 137];
let maxNumber = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
        maxNumber = numbers[i]
    }
}
console.log("This is height Number = ", maxNumber);