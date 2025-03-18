/* 
৩. তোর একটা number লিস্ট আছে [10, 15, 20, 25, 30, 35]। তুই এমন একটা প্রোগ্রাম লিখে দেখ, যা 20-এর ওপরে প্রথম যে সংখ্যাটা আছে, সেটা খুঁজে বের করে দিবে।
 */
const numbers = [10, 15, 20, 25, 30, 35]
const updateNumbers = numbers.find(num => num > 20)
console.log(updateNumbers);