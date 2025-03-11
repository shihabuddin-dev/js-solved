/* Problem-14

You have a string, “hello”! Write a program to reverse it and see what output it produces. */

let words = "hello";
let revWord = " ";
for (let word of words) {
    revWord = word + words;
}
console.log(`"${revWord}"`);