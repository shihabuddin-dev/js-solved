/* 
১. তোর কাছে 50 টাকা আছে, আর বন্ধুর কাছে আছে "50" টাকা (স্ট্রিং হিসেবে)। একটা প্রোগ্রাম লিখে দেখ, 50== "50" দিলে আর 50 === "50" দিলে আউটপুট কী আসবে।
 */
let myMoney= 50;
let friendMoney= '50';
console.log(myMoney==friendMoney); // Eta true hobe
console.log(myMoney===friendMoney); // Eita false hobe because type o check korbe === dile 