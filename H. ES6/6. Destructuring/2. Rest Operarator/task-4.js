/* 
৪. একটা সংখ্যার array আছে। [10, 20, 3, 30, 300, 3000] এইটা থেকে প্রথম দুইটা উপাদান বাদে বাকিগুলো আলাদা আরেকটা array-এর মধ্যে রাখ।
 */
const numbers = [10, 20, 3, 30, 300, 3000]
const [, , ...all] = numbers
console.log(all);