/* 
৪. একটা অ্যারেতে বিজোড়সংখ্যাগুলোর গড় বের করে দশমিকের পরে দুই ঘর পর্যন্ত মান রিটার্ন কর।
 */
function makeOddAverage(array) {
    let getOddNumber = []
    let sum = 0
    for (let number of array) {
        if (number % 2 !== 0) {
            getOddNumber.push(number)
        }
    }
    for (let num of getOddNumber) {
        sum += num
    }
    let length = getOddNumber.length
    if (length === 0) {
        return "No odd numbers found";
    }
    let Average = parseFloat(sum / length).toFixed(2);
    return `Average Number of Array ${Average}`
}
const result = makeOddAverage([1, 3, 5, 2, 4, 6, 8, 10, 11, 13])
console.log(result);