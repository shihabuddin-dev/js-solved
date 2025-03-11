/* 
৭. তুই এমন একটা ফাংশন লিখ, যা দুইটি সংখ্যা নিবে এবং তাদের গুণফল রিটার্ন করবে। তবে, গুণফল 100-এর বেশি হলে শুধু তার অর্ধেক রিটার্ন করবে 
*/
function numbers(a, b) {
    let multiply = a * b;
    if (multiply > 100) return multiply / 2;
    else return multiply;
}
console.log(numbers(20, 8));