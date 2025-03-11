/*** Problem-3

Display sum of all the odd numbers from 91 to 129.
***/

// Solution-1 
let i = 91;
sum = 0;
while (i <= 129) {
    if (i % 2 === 1) {
        sum = sum + i;
    }
    i++;
}
console.log("This is total of odd number : ", sum);


// Solution-2 

let j = 91
add = 0;
while (j <= 129) {
    add = add + j;
    j += 2;
}
console.log("This is total of odd number : ", add);