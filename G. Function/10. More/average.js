/* Problem-3

Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

 */
function make_avg(numbers) {
    const inputSize = numbers.length;
    console.log("Size of the array", inputSize);
    let sum = 0;
    for (let i = 0; i < inputSize; i++) {
        sum = sum + numbers[i];
    }
    const average = sum / inputSize;
    return average;
}
const input = [2, 4, 6, 8, 10];
const result = make_avg(input);
console.log("Average Number = ", result);