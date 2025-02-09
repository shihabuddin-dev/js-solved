/*** Problem-2

Find all the odd numbers from 61 to 100.

 */

// Solution-1 
let i = 61;
while (i <= 100) {
    i++;
    if (i % 2 === 1) {
        console.log(i);
    }
}


// solution-2
let j = 61;
while (j <= 100) {
    console.log(j);
    j += 2;
}
