/* 
৪. এমন একটা ফাংশন বানা, যেখানে বয়স দিলে সেটি 1৪-এর বেশি হলে "Eligible for Voting" রিটার্ন করবে, আর না হলে "Not Eligible"
 */
function vote(age) {
    if (age > 18) return "Eligible for Voting";
    else return "Not Eligible";
}
console.log(vote(20));