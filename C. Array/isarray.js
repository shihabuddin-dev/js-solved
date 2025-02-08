/**  problem-13
Create different variables, each containing either an array or a non-array value.
Now use isArray to check if each variable is an array.
Print a message to the console indicating whether each variable is an array or not. **/
let home = ['Normal Home', 'Simple Building', 'Dynamic Building', 'Expensive Home'];
let person = NaN;
let place = '';
console.log(Array.isArray(home));
console.log(Array.isArray(person));
console.log(Array.isArray(place));