/* Problem-1
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/

// Solution-1 by While loop 
let i = 1;
while (i <= 40) {
    i++;
    if (i % 2 === 1) {
        continue;
    }
    console.log(i);
}

// Solution-2 by for loop

for (let j = 1; j <= 40; j++) {
    if (j % 2 === 1) {
        continue;
    }
    console.log(j);
}