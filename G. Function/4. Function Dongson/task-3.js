/* 
৩. তুই একটা ফাংশন বানাবি, যেটাতে একটা সংখ্যা দিবি। ফাংশনটা চেক করবে, সংখ্যাটা 10-এর বড় কি না। বড় হলে 10 দিয়ে ভাগ করবে। আর 10-এর ছোট হলে 10 দিয়ে গুণ করবে। তারপর রেজাল্ট রিটার্ন করবে।
 */
function numbers(num) {
    if (num > 10) return num / 10;
    else if (num < 10) return num * 10;
    else return num;
}
console.log(numbers(10));