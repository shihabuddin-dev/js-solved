/*** Problem-5

Display sum of all the even numbers from 51 to 85.
 */

// Solution-1 
let i = 51;
sum = 0;
while (i <= 85) {
    if (i % 2 === 0) {
        sum = sum + i;
    }
    i++;
}
console.log(sum);


// Solution-2 
let j = 52;
add = 0;
while (j <= 85) {
    add = add + j;
    j += 2;

}
console.log(add);