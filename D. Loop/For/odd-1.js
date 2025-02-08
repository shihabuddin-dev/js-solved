/*** Problem-2

Find all the odd numbers from 61 to 100.

 */

// Solution-1 
for (let i = 61; i <= 100; i++) {
    if (i % 2 == 1) {
        console.log(i);
    }
}

// Solution-2
for (let num = 61; num <= 100; num += 2) {
    console.log(num);
}