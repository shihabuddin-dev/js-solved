/* 
8. reduce দিয়ে [1, 2, 3, 4, 5] সব সংখ্যার গুণফল বের কর।
 */
const numbers = [1, 2, 3, 4, 5]
const multiplyNumbers = numbers.reduce((multiply, number) => multiply * number)
console.log(multiplyNumbers);