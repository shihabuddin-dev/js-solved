/* Use Arrow Function
একটি অ্যারো ফাংশন লিখো যা ইনপুট হিসেবে একটি অ্যারে নিবে এবং ইউনিক ভ্যালুগুলোর অ্যারে রিটার্ন করবে।
const uniqueNumbers = ???;
console.log(uniqueNumbers ([1, 2, 3, 2, 1, 4, 5, 4])); // [1, 2, 3, 4, 5] */

// solution-1
const uniqueNumbers = (array) => {
    const uniqueArray = []
    array.forEach(number => {
        if (uniqueArray.includes(number) === false) {
            uniqueArray.push(number)
        }
    });
    return uniqueArray
}
console.log(uniqueNumbers([1, 2, 3, 2, 1, 4, 5, 4]));


// solution-2
const uniqueNumber = (array) => {
    const uniqueArray = []
    for (let number of array) {
        if (uniqueArray.includes(number) === false) {
            uniqueArray.push(number)
        }
    }
    return uniqueArray
}
console.log(uniqueNumber([1, 2, 3, 2, 1, 4, 5, 4]));
