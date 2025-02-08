/*** Problem-3

Display sum of all the odd numbers from 91 to 129.
***/

// Solution-1 
sum = 0;
for (let i = 91; i <= 129; i++) {
    if (i % 2 === 1) {
        sum = sum + i;
    }
}
console.log(sum);

// Solution-2 
add = 0;
for (let j = 91; j <= 129; j += 2) {
    add = add + j;
}
console.log(add);