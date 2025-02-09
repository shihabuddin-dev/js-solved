/*** Problem-7

Implement a countdown timer that counts down from 81 to 65.

 */

// Solution-1 
let j = 81;
while (j >= 65) {
    if (j % 2 === 0 || j % 2 === 1) {
        console.log(j);
        j--;
    }
}

// Solution-2 
let i = 81;
while (i >= 65) {
    console.log(i);
    i--;
}

