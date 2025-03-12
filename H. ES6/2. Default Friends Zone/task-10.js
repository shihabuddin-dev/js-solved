/* 
১০. একটি ফাংশন তৈরি কর, যা একটি অবজেক্ট প্যারামিটার নিবে। অবজেক্টে salary এবং tax থাকবে। যদি অবজেক্ট না পাঠানো হয়, ডিফল্ট salary 50000 এবং tax 10 সেট কর। ফাংশনের ভিতরে ট্যাক্সের পার্সেন্ট দিয়ে ট্যাক্সের টাকার পরিমাণ বের করবি। তারপর স্যালারি থেকে ট্যাক্সের টাকার পরিমাণ বিয়োগ করে রেজাল্ট রিটার্ন করবি 
*/
function getObject(object = { salary: 50000, tax: 10 }) {
    const totalTax = object.salary * object.tax / 100
    const remainMoney = object.salary - totalTax
    return remainMoney
}
console.log(getObject());