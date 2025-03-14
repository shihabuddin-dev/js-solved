/* 
একটি Arrow Function লিখো যা একটি সংখ্যা ইনপুট নেবে এবং উল্টো সাজিয়ে রিটার্ন করবে।
const reverseNumber = ???; console.log(reverseNumber(12345)); 
54321 
*/


const reverseNumber = (number) => {
    return parseInt(number.toString().split('').reverse().join(''))
}
console.log(reverseNumber(12345))