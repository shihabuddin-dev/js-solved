/* Problem-4

Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
*/

function count_zero(numbers) {
    let numberZero = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === '0') {
            numberZero++;
        }
    }
    return numberZero;
}
const input = "10100101001000011000";
const result = count_zero(input);
console.log(result);