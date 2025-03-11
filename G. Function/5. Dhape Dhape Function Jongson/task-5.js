/* 
৫. একটা ফাংশন লিখ, যা একটা নাম্বার নিবে এবং সেটি যদি 20-এর কম হয়, তবে নাম্বারটিকে দ্বিগুণ করবে, না হলে 20 দিয়ে ভাগ করবে।
 */
function getNumber(number) {
    if (number < 20) return number * 2;
    else return number / 20;
}
console.log(getNumber(30));