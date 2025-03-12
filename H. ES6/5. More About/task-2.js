/* 
Use Spread Operator 
দুটি অ্যারে arr1 এবং arr2 একসাথে যোগ করে নতুন একটি অ্যারে তৈরি করো।
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6]; 
*/
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const finalArray = [...arr1, ...arr2]
console.log(finalArray);