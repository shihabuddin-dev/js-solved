/* 
১. একটা ফাংশন লিখ, যাতে কোনো কন্ডিশনের ভিত্তিতে নাম্বার 10-এর বেশি হলে true রিটার্ন করবে, আর না হলে false রিটার্ন করবে।
 */
function checkNumbers(number) {
    if (number > 10) return true;
    else return false;
}
console.log(checkNumbers(50));
console.log(checkNumbers(5));