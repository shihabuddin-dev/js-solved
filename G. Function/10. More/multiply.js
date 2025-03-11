/* Problem-1

Take four parameters. Multiply the four numbers and then return the result

 */


// solution-1 by simple call back function 

function multiply(a, b, c, d) {
    const multiplyResult = a * b * c * d;
    console.log(multiplyResult);
}
multiply(2, 5, 6, 10);




// Solution-2 by return 

function multi(a, b, c, d) {
    const result = a * b * c * d;
    return result;
}
const output = multi(2, 5, 6, 10);
console.log(output);