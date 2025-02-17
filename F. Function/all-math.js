function allMath(number1, number2) {
    const addition = number1 + number2;
    const subtraction = number1 - number2;
    const multiply = number1 * number2;
    const division = number1 / number2;
    const modulus = number1 % number2;
    return { addition, subtraction, multiply, division, modulus };
}
const result = allMath(20, 10);
console.log(result);