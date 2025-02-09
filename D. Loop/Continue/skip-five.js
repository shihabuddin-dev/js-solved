/* Problem-2
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/
// Solution-1 by While loop 
let i = 55;
while (i <= 85) {
    i++;
    if (i % 2 === 0 || i % 5 === 0) {
        continue;
    }
    console.log(i);
}

// Solution-2 by for loop
for (let j = 55; j <= 85; j++) {
    if (j % 2 === 0 || j % 5 === 0) {
        continue;
    }
    console.log(j);
}