/* 
৯. একটা ফাংশন তৈরি কর, যা একটা অবজেক্ট প্যারামিটার নিবে। অবজেক্টে principal এবং rate থাকবে। যদি অবজেক্ট না পাঠানো হয়, ডিফল্ট principal 1000 এবং rate 5 রাখ। ফাংশন simple interest হিসাব কর, এই ফর্মুলা দিয়ে (principal * rate/100), তাহলে রেজাল্ট রিটার্ন করবে।
 */
function getObject(object = { principal: 1000, rate: 5 }) {
    const interest = object.principal * object.rate / 100
    return interest
}
console.log(getObject());