/* 
৭. একটা ফাংশন লিখ, যেটা চেক করবে, কোনো একটা সংখ্যা নেগেটিভ কি না। যদি নেগেটিভ (negative) নাম্বার হয়, তাহলে সেটাকে -1 দিয়ে গুণ করে রেজাল্ট রিটার্ন করবে।
 */

function checkNumber(number) {
    if (number < 0) return -1 * number;
    else return 'Positive Number';
}
console.log(checkNumber(2));