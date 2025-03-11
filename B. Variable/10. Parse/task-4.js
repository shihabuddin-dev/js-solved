/* 
৪. তুই 3.456 আর 2.789 যোগ করলি। আউটপুটে তুই দশমিকের পর মাত্র 2 ঘর পর্যন্ত দেখতে চাস। কীভাবে দেখাবি? একটা প্রোগ্রাম লিখ।
 */
let number1 = 3.456;
let number2 = 2.789;
const totalNumber = parseFloat(number1 + number2).toFixed(2);
console.log(totalNumber);