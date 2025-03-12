/* 
৭. একটা ফাংশন তৈরি কর, যেখানে একটা অবজেক্ট প্যারামিটার নিবে। অবজেক্টে price এবং quantity থাকবে। যদি অবজেক্ট না পাঠানো হয়, ডিফল্ট মান হিসেবে price 10 এবং quantity। সেট কর। ফাংশন total price রিটার্ন করবে।
 */
function getObject(object = { price: 10, quantity: 1 }) {
    return object
}
console.log(getObject());