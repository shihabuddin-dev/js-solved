/* 
৬. তুই এমন একটা ফাংশন লিখবি, যা দুইটা নাম নিবে, প্রথম নাম আর দ্বিতীয় নাম। যদি প্রথম নামের দৈর্ঘ্য দ্বিতীয় নামের দৈর্ঘ্যের চেয়ে বেশি হয়, তাহলে true রিটার্ন করবে, না হলে false।
 */
function names(name1, name2) {
    if (name1.length > name2.length) return true;
    else return false;
}
console.log(names('shihab', 'omar'));