/* 
১. একটা অ্যারের জোড়সংখ্যাগুলোর গড় বা এভারেজ বের করার একটা ফাংশন 'লিখ এবং বিভিন্ন মান দিয়ে সেই ফাংশনকে চেক করবি, ঠিক রেজাল্ট দিচ্ছে কি না।
 */
function evenAverage(array) {
    let evenNumbers = []
    let sum = 0
    for (let number of array) {
        if (number % 2 === 0) {
            evenNumbers.push(number)
        }
    }
    if (evenNumbers.length === 0) return "No even numbers in the array";
    for (let number of evenNumbers) {
        sum += number
    }
    let avg = sum / evenNumbers.length
    return avg
}
let result = evenAverage([2, 3, 4, 5, 6, , 8, 9, 10])
console.log(result);