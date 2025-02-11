/* Problem-3

Use a for...of loop to concatenate all the elements of an array into a single string.

Input: let names = ['Tom', 'Tim', 'Tin', 'Tik']

Output: 'TomTimTinTik'
*/

let names = ['Tom', 'Tim', 'Tin', 'Tik'];

// Solution-1 
let newArray = '';
for (let name of names) {
    newArray += name
}
console.log(newArray);


// Solution-2 (Short)
let addAllName = names.join('');
console.log(addAllName);