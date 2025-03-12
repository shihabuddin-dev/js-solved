/* 
৫. জাভাস্ক্রিপ্টে কোনো একটা অ্যারের শেষ উপাদান পাওয়ার জন্য শেষ উপাদানের ইনডেক্স বের করতে হয়। শেষ উপাদানের ইনডেক্স বের করার সিস্টেম হচ্ছে, অ্যারের লেংথ বের করে সেটা থেকে  1 বিয়োগ করবি। এইটা আগে একটু প্র্যাকটিস করে ফেল। তারপর একটা array-এর প্রথম ও শেষ উপাদান যোগ করে যোগফল রিটার্ন করবে, এমন একটা arrow function লিখে ফেল।
 */

const getArray = (array) => {
    const lastElement = array[array.length - 1]
    const firstElement = array[0]
    return firstElement + lastElement
}
const array = [10, 20, 55, 60, 34, 35, 88, 20]
console.log(getArray(array));