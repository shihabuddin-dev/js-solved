/* 
২. ফাংশন লিখ, যেটি একটা অবজেক্ট প্যারামিটার নিবে এবং callback-এর মাধ্যমে অবজেক্টের সব কিগুলো কনসোলে দেখাবে 
*/
const getObject = (obj, callBack) => {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            callBack(key);
        }
    }
};

const myCallBack = (key) => {
    console.log(key);
};

const badMan = {
    name: 'dakat',
    age: 50,
    profession: 'katakati'
};

getObject(badMan, myCallBack);