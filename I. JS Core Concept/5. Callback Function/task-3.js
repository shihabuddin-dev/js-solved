/* 
৩. numberProcessor নামে একটা ফাংশন লিখ, যেটি একটা সংখ্যা এবং একটা callback নিবে এবং সংখ্যাটিকে 5 দিয়ে ভাগ করে callback-এর মাধ্যমে আউটপুট দেখাবে।
 */

const numberProcessor = (number, callBack) => {
    const result = number / 5
    callBack(result)
}
const myCallBack = (result) => {
    console.log(result);
}
numberProcessor(50, myCallBack)