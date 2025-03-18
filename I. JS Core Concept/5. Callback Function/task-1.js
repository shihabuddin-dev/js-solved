/* 
১. একটা ফাংশন লিখ, তার ভিতরে আরেকটি ফাংশন প্যারামিটার হিসেবে পাঠিয়ে তাকে কল কর এবং রেজাল্ট দেখ।
 */

const getNumber = (number, callBack) => {
    callBack(number);
};

const myCallBack = (number) => {
    console.log(number);
};

getNumber(500, myCallBack);