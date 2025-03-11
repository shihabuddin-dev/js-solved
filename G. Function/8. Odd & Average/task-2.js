/* 
২. একটা অ্যারের বিজোড় সংখ্যাগুলোকে 2 দিয়ে গুণ করে একটা নতুন অ্যারে বানিয়ে নতুন অ্যারে রিটার্ন কর।
 */
function getMultiplyFromArray(array) {
    const getMultiplyOddNumbers = []
    for (let number of array) {
        if (number % 2 !== 0) {
            getMultiplyOddNumbers.push(number * 2)
        }
    }
    return getMultiplyOddNumbers
}
const result = getMultiplyFromArray([1, 2, 5, 4, 6, 9, 8, 7, 10])
console.log(result);