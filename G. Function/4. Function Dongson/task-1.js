/* 
১. তোর দেওয়া array-এর মধ্যে যতগুলো উপাদান আছে, উপাদানের সংখ্যা জোড় নাকি বিজোড়, তা চেক কর। ফাংশন লিখে এটা করে দেখ।
 */
function checkArray(arr) {
    const arrayEven = arr.length;
    if (arrayEven % 2 === 0) return 'This is Even Numbers of Array Elements';
    else return 'This is Odd Numbers of Array Elements'
}
const result = checkArray([1, 2, 3, 4, 5, 6, 9]);
console.log(result);