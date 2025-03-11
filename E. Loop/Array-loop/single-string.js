/* Problem-3

Use a for...of loop to concatenate all the elements of an array into a single string.

Input: let names = ['Tom', 'Tim', 'Tin', 'Tik']

Output: 'TomTimTinTik'
*/

let names = ['Tom', 'Tim', 'Tin', 'Tik'];

// Solution-1 
let newString = '';
for (let name of names) {
    newString += name
}
console.log(`"${newString}"`);


// Solution-2 (Short)
let addAllName = names.join('');
console.log(`'${addAllName}'`);