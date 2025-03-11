/* 
৪. একটা ফাংশন বানা, যেটা একটা array নিবে এবং array-এর প্রথম এবং দ্বিতীয় উপাদান যোগ করে যোগফল রিটার্ন করবে 
*/

function sumFirstTwo(arr) {
    if (arr.length < 2) {
        return "Array-এর অন্তত দুইটি উপাদান থাকতে হবে!";
    }
    return arr[0] + arr[1];
}

console.log(sumFirstTwo([5, 10,20])); 
