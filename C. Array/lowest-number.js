/* Problem-16

Find the lowest number in the array below.
const numbers = [167, 190, 120, 165, 137];
*/

const numbers = [167, 190, 120, 165, 137];
let minNumber = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < minNumber) {
        minNumber = numbers[i]
    }
}
console.log("This is lowest Number = ", minNumber);