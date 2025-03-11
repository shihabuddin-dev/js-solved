/* 
২. ধর, তোকে এমন একটা ফাংশন বানাতে হবে, যেটাতে একটা নাম পাস করলে সেটার প্রথম অক্ষরটা রিটার্ন করবে। ধর 'Raju' দিলে 'R' রিটার্ন করবে।
 */

function checkFirstLetter(name) {
    let firstLetter = name[0];
    return firstLetter;
}
console.log(checkFirstLetter('Raju'));