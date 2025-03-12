/* 
২. গুণ বা ভাগ করলে ডিফল্ট মান 1 হতে পারে।
 */
function doMath(a = 1, b = 1) {
    const multiply = a * b
    const division = a / b
    return `Multiply is ${multiply} & Division is ${division}`
}
console.log(doMath());