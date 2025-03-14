/* 
১. তোর কাছে একটা array আছে: [5, 10, 15, 20, 25]। তুই একটা প্রোগ্রাম লিখে দেখ, সব সংখ্যার যোগফল কত হয় reduce দিয়ে।
 */
const numbers = [5, 10, 15, 20, 25]
const totalNumbers = numbers.reduce((sum, num) => (sum + num))
console.log(totalNumbers);