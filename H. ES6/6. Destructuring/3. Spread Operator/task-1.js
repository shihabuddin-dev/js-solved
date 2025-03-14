/* 
১. নতুন একটা অ্যারে বানা, যেখানে প্রথম উপাদান হবে "variable", তারপরের উপাদানগুলো আসবে const technologies = ["Condition", "array", "loop"], অ্যারে Spread Operator দিয়ে কপি করে।
 */
const technologies = ["Condition", "array", "loop"]
const newTechnologies = ["variable", ...technologies]
console.log(newTechnologies);
