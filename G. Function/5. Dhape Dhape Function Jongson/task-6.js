/* ৬. এমন একটা ফাংশন লিখ, যা array-এর মধ্যে শুধু নেগেটিভ সংখ্যাগুলোর যোগফল করবে। */

function getArrayNumbers(array) {
    let sum = 0;
    for (let number of array) {
        if (number < 0) sum += number;
    }
    return sum;
}
const result = getArrayNumbers([10, 20, -10, -30, -3, 10, 22]);
console.log(result);