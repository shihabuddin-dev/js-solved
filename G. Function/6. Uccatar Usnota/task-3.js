/* 
৩. ঘণ্টাকে সেকেন্ডে কনভার্ট করতে একটা ফাংশন বানা। এক ঘণ্টাতে কত মিনিট বা এক মিনিটে কত সেকেন্ড। সেটা আমি বলে দিচ্ছি না। তুই চিন্তা করে বের কর এবং আমাকে একটা ফাংশন লিখে দে, যেটা ঘণ্টা দিলে আমাকে সেকেন্ডে কনভার্ট করে দিবে।
 */
function hourToSecond(hour) {
    if (typeof hour !== 'number' || hour < 0) {
        return 'Invalid Input Hour'
    }
    const oneHourToSecond = 3600
    return hour * oneHourToSecond;
}
console.log(hourToSecond(3));