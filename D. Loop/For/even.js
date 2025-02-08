/*** Problem-4

Find all the even numbers from 78 to 98.

 */


// Solution 1 
for (let i = 78; i <= 98; i += 2) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Solution 2 
for (let num = 78; num <= 98; num += 2) {
    console.log(num);
}
