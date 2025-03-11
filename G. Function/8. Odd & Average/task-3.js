/*
৩. একটা অ্যারেতে যদি বিজোড়সংখ্যা না থাকে, তবে "No odd numbers found" দেখানোর ব্যবস্থা কর। আর যদি বিজোড়সংখ্যা থাকে, তাহলে "Odd numbers found" রিটার্ন কর।
 */
function getNumbers(array) {
    for (let number of array) {
        if (number % 2 !== 0) return "Odd numbers found"
    }
    return "No odd numbers found"
}
const result = getNumbers([1, 3, 5, 2, 4, 6, 8, 10])
console.log(result);