/*** Problem-4

Find all the even numbers from 78 to 98.

 */


// Solution 1 
let i = 78;
while (i <= 98) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
}

// Solution 2 
let j = 78;
while (j <= 98) {
    console.log(j);
    j += 2
}