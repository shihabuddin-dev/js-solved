/* 
৩. তিনটা অ্যারে আছে const frontEnd = ["JavaScript"], const backEnd = ["Node.js"], const database = ["MongoDB"], এগুলোকে Spread Operator দিয়ে একটাতে একত্রিত কর 
*/
const frontEnd = ["JavaScript"]
const backEnd = ["Node.js"]
const database = ["MongoDB"]
const skills = [...frontEnd, ...backEnd, ...database]
console.log(skills);
