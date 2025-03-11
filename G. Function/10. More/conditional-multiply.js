/* Problem-2

Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

 */
function numbers(number) {
    if (number % 2 === 1) {
        const odd = number * 2;
        return odd;
    }

    else {
        const even = number / 2;
        return even;
    }
}
const oddResult = numbers(15); //odd number just for check
const evenResult = numbers(10); //even number just for check
console.log(oddResult);
console.log(evenResult);