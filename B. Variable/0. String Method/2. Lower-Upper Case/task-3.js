/* 
৩. কেইস ইগনোর করে চেক কর const language = 'JavaScript'; এর মধ্যে scripet আছে কি না।
 */
const language = 'JavaScript';
const checkText = 'script';
const isIncludes = language.toLowerCase().includes(checkText.toLowerCase());
console.log(isIncludes);