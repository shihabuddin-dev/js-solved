/* Problem-1

Write a JavaScript code to reverse the array colors without using the reverse method.

Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output: ['orange', 'yellow', 'green', 'blue', 'red']
*/

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

// solution-1  by for of loop 
const reverseColor = [];
for (const color of colors) {
    reverseColor.unshift(color);
}
console.log(reverseColor);


// solution-2  by for loop 

const revColor = [];
for (let i = 0; i < colors.length; i++) {
    const color = colors[i];
    revColor.unshift(color)
}
console.log(revColor);


// solution-3  by for loop  (decrements -- )
const decrementColor = [];
for (let i = colors.length - 1; i >= 0; i--) {
    const col = colors[i];
    decrementColor.push(col)
}
console.log(decrementColor);


// solution-4 Easy method solution Shortcut

colors.reverse();
console.log(colors);