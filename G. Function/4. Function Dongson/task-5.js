/* 
৫. একটা ফাংশন বানাবি, যেটা কোনো সংখ্যা n পাবে, আর সেই সংখ্যা দ্বিগুণ করে রিটার্ন করবে, যদি n পজিটিভ হয়। যদি n নেগেটিভ হয়, তাহলে তিনগুণ করে রিটার্ন করবে।
 */
function numbers(n) {
    if (n > 0) return n * 2;
    else if (n < 0) return n * 3;
    else return 0;
}
console.log(numbers(20));