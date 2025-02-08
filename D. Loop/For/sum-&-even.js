/*** Problem-5

Display sum of all the even numbers from 51 to 85.
 */

// Solution-1 
sum = 0;
for (let i = 51; i <= 85; i++) {
    if (i % 2 === 0) {
        sum = sum + i;
    }
}
console.log(sum);

// Solution-2 
add = 0;
for (let j = 52; j <= 85; j += 2) {
    add = add + j;
}
console.log(add);