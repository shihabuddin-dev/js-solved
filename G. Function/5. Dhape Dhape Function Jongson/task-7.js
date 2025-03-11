/* 
৭. একটা ফাংশন লিখ, যা একটা array নিবে এবং array-এর মধ্যে যে সংখ্যাগুলো 3 দিয়ে ভাগ যায়, তাদের গুণফল রিটার্ন করবি 
*/
function getArray(numbers) {
    let multiply = 1;
    for (let number of numbers) {
        if (number % 3 === 0) multiply *= number;
    }
    return multiply;
}
const result = getArray([10, 20, 3, 9, 30, 40, 50]);
console.log(result);