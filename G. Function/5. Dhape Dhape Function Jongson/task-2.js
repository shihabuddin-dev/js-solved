/* 
২. একটা ফাংশন লিখে দেখ, যেটা array-এর প্রথম দুইটা উপাদানের মধ্যে যেটা ছোট সেটাকে রিটার্ন করবে। উদাহরণস্বরূপ, তুই যদি [20, 45, 78] পাঠাস, ফাংশন 20 রিটার্ন করবে।
 */

function getSmall(numbers) {
    for (let number of numbers) {
        return Math.min(number)
    }
}
const result = getSmall([20, 45, 78]);
console.log(result);