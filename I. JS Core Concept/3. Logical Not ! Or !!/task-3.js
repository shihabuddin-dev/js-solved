/* 
৩. একটা খালি অ্যারে [] কোনো উপাদান নাই। এইটা কি truthy ভ্যালু। চেক কর if-এর ভিতরে শর্ত হিসেবে লিখে।
 */
const emptyArray = [];

if (emptyArray) {
    console.log("Array is truthy");
} else {
    console.log("Array is falsy");
}