/* 
৩. তুই এক স্কুলে 1 থেকে 50 পর্যন্ত ছাত্রদের রোল নাম্বার লিস্ট করবি, তারপর একটা while লুপ ব্যবহার করে সেই সংখ্যাগুলোর যোগফল বের কর 
*/

let rollNumbers = 1;
let sum = 0;
while (rollNumbers <= 50) {
    sum += rollNumbers;
    rollNumbers++
}
console.log(sum);