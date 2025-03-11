/* Problem-7

You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5] find: 5 output: 2

sample-input: numbers = [5,6,11,12,98, 5] find: 25 output: 0
*/
function countNumber(numbers, find) {
    let findingNum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === find) {
            findingNum++;
        }
    }
    return `Number 5 is repeated ${findingNum} times`;

}

const arrayNumbers = [5, 6, 11, 12, 98, 5];
const find = 5;
const result = countNumber(arrayNumbers, find)
console.log(result);



function checkNum(numbers) {
    let get25 = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === find2) {
            get25++;
        }
    }

    return get25;
}


const numbers2 = [5, 6, 11, 12, 98, 5];
const find2 = 25;
const result2 = checkNum(numbers2, find2)
console.log('Output', result2);