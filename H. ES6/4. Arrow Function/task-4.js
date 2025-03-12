/* 
৪. একটি object-এর মধ্যে নাম এবং পকেটে কত টাকা আছে এমন দুইটা প্রপার্টি আছে। এখন এমন একটা অ্যারো ফাংশন লিখ, যেটা টাকার পরিমাণকে 5 দিয়ে ভাগ করে ভাগফল রিটার্ন করবে।
 */

const getObject = (object) => object.money / 5
const person = { name: 'Boss', money: 500 }
console.log(getObject(person));