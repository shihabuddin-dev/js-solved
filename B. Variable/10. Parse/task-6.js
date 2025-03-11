/* 
৬. ধর, তোর কাছে '10.5678' আর '5.4321' আছে। তুই আউটপুটে দশমিকের পর 1 ঘর পর্যন্ত দেখতে চাস। সেটা কীভাবে দেখাবি?
 */
let number1 = 10.5678;
let number2 = 5.4321;
let totalNumber = parseFloat(number1 + number2).toFixed(1);
console.log(totalNumber);