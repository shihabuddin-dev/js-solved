/* 
২. তুই এক স্কুলে 31 থেকে 58 পর্যন্ত ছাত্রদের রোল নাম্বার লিস্ট করবি, তারপর একটা for লুপ ব্যবহার করে সেই সংখ্যাগুলোর যোগফল বের কর।
 */

let sum = 0;
for (let roll = 31; roll <= 58; roll++) {
    console.log(roll);
    sum += roll;
}
console.log(sum);