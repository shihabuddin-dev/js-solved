/* 
৫. [10, 20, 30, 40, 50] এই অ্যারে reduce ব্যবহার করে সর্বোচ্চ মান বের কর।
 */
const numbers = [10, 20, 30, 40, 50]
const maxNumber = numbers.reduce((max, currentNumber) => {
    return currentNumber > max ? currentNumber : max
})
console.log(maxNumber);