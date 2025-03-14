/* একটি Arrow Function লিখো যা একটি স্ট্রিং ইনপুট নেবে এবং সকল স্বরবর্ণ বাদ দিয়ে নতুন স্ট্রিং রিটার্ন করবে।
const removeVowels =???;
console.log(removeVowels("Hello World"));
"Hll Wrld"
*/
const removeVowels = (sentence) => {
    return sentence.replace(/[aeiouAEIOU]/g, '');
}

console.log(removeVowels("Hello World"));