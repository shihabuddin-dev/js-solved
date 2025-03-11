/* ৫. অ্যারেতে প্রতিটি বিজোড় সংখ্যা থেকে 1 বিয়োগ করে একটা নতুন অ্যারে বানিয়ে ফেল */
function subtraction(array) {
    let getOddNumbers = []
    for (let number of array) {
        if (number % 2 !== 0) {
            getOddNumbers.push(number - 1)
        }
    }
    return getOddNumbers
}
const result = subtraction([1, 2, 5, 4, 6, 9, 8, 7, 10])
console.log(result);