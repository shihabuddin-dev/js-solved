/* 
৪. একটা পরীক্ষায় যদি কোনো ছাত্রের মার্কস 50-এর কম হলে বলবি "Fail", 50 থেকে 80-এর মধ্যে হলে বলবি "Pass", আর ৪০-এর বেশি হলে বলবি "A+"।
 */
let marks = 40;
if (marks < 50) {
    console.log('Fail');
}
else if (marks > 50 && marks <= 80) {
    console.log('Pass');
}
else if (marks > 80) {
    console.log('A+');
}