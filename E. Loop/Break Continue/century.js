/* Problem-1

Write a loop 1 to 200. Use break to exit the loop once you find 100.
*/

// Solution-1 by while loop 
let i = 0;
while (i <= 200) {
    i++;
    console.log(i);
    if (i >= 100) {
        break;
    }
}


// Solution-2 by for loop
for (let j = 1; j <= 200; j++) {
    console.log(j);
    if (j >= 100) {
        break;
    }
}


