/* 
২. শুনতে কঠিন, কিন্তু চিন্তা করলে সহজ একটা বিষয় হচ্ছে, 1 কিলোওয়াট ঘণ্টা মানে 860 কিলো ক্যালরি। তাহলে একটা ফাংশন লিখে বের কর। যেটাতে যেকোনো কিলোওয়াট ঘণ্টা দিলে সে সেটাকে কিলো ক্যালরিতে কনভার্ট করে দিবে।
 */
function KWHToKilocalorie(kwh) {
    if (typeof kwh !== 'number' || kwh < 0) return 'Invalid Input'
    let oneKWH = 860
    return kwh * oneKWH
}
console.log(KWHToKilocalorie(20))