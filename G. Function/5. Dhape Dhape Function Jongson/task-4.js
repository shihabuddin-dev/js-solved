/* 
৪. তোর এক বন্ধুর কাছে একটা array আছে, যেমন: [2, 4, 5, 7, 8, 32, 45] এখন এমন একটা ফাংশন তৈরি কর, যেটা শুধু array-এর 4 দিয়ে ভাগ যায়, এমন সংখ্যাগুলোর যোগফল দেখাবে 
*/
function getDivisible(numbers) {
    let sum = 0;
    for (let number of numbers) {
        if (number % 4 === 0) {
            sum += number;
        }
    }
    return sum;
}

const result = getDivisible([2, 4, 5, 7, 8, 32, 45])
console.log(result);