/* 
৬. ফাংশন রিটার্ন থেকে ডিস্ট্রাকচারিং করে প্রথম এবং দ্বিতীয় ভ্যালু আলাদা কর। function multiply(a, b) { return [a* 3, b* 3]; }
 */
function multiply([a, b]) {
    return [a * 3, b * 3];
}
const numbers = [2, 5];
console.log(multiply(numbers));