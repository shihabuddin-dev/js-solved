/* 
১. একটা অ্যারে বানা, যেটার নাম numbers এবং দেখা, এই অ্যারেতে 100-এর বড় কোনো সংখ্যা আছে কি না।
 */
const numbers = [10, 20, 50, 60, 90, 102, 105, 140, 150, 200]
const updateNumbers = numbers.some(num => num > 100)
console.log(updateNumbers);