/* 
৮. এমন একটা ফাংশন বানাও, যেখানে একটা অ্যারে প্যারামিটার নিবে। প্রতিটি উপাদানকে 2 দিয়ে গুণ করে নতুন অ্যারে রিটার্ন করবে। যদি অ্যারে না দেওয়া হয়, ডিফল্ট হিসেবে [5, 10, 15] সেট কর।
 */
function getArray(array = [5, 10, 15]) {
    const squareArray = []
    for (let number of array) {
        squareArray.push(number * 2)
    }
    return squareArray
}
console.log(getArray());