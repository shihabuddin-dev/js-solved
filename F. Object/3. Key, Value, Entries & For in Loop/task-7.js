/* 
৭. সংখ্যার একটা অবজেক্ট দিলাম- const numbers = { a: 10, b: 20, c: 30. d: 40}; এইবার বুদ্ধি খাটিয়ে এই অবজেক্টের সব প্রোপার্টির ভ্যালুগুলোর যোগফল বের কর।
 */
const numbers = { a: 10, b: 20, c: 30, d: 40 };
let sum = 0;
for (let number in numbers) {
    let allNumbers = numbers[number]
    sum += allNumbers;

}
console.log(sum);