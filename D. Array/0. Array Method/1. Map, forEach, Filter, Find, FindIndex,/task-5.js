/* 
৫. তোর কাছে কিছু সংখ্যা আছে: [7, 10, 15, 20, 25, 30]। তুই চাস প্রত্যেক সংখ্যা 3 দিয়ে ভাগ করলে কত হয়, সেটা এক এক করে দেখতে। map ইউজ করে প্রোগ্রাম লিখ।
 */
const numbers = [7, 10, 15, 20, 25, 30]
const updateNumbers = numbers.map(num => (num / 3).toFixed(2))
console.log(updateNumbers);