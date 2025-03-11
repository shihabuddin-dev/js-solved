/* 
৩. একটা function বানা, যেটা marks input নিবে এবং তারপর 80 বা তার ওপরে হলে A, 70 থেকে 79 হলে B, 60 থেকে 69-এর মধ্যে হলে C, 50 থেকে 59-এর মধ্যে হলে D, আর 50-এর নিচে হলে F গ্রেড return করবে 
*/
function makeGradeByMarks(marks) {
    if (typeof marks !== 'number' || marks < 0) return 'Invalid Input'
    else if (marks >= 80) return 'A'
    else if (marks >= 70) return 'B'
    else if (marks >= 60) return 'C'
    else if (marks >= 50) return 'D'
    else return 'F'

}
console.log(makeGradeByMarks(90));