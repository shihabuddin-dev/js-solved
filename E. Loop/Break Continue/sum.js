/* Problem-2
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
let i = 1;
let sum = 0;
while (i <= 100) {
    i++;
    sum = sum + i;
    if (sum = 100) {
        break;
    }
}
console.log(sum);