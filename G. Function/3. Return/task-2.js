/* 
২. তুই একটা ফাংশন লিখ, যা সংখ্যা নিবে আর তারপর সেই সংখ্যা যদি 13 দিয়ে সমানভাবে ভাগ যায়, তাহলে true রিটার্ন দিবে, না হয় false রিটার্ন দিবে।
 */
function numbers(number) {
    if (number % 13 === 0) return true
    else return false;
}
console.log(numbers(26));
console.log(numbers(22));