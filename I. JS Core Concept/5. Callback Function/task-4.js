/* 
৪. তুই ফাংশনের ভিতর থেকে অন্য একটা ফাংশন কল করবি, যেমন greeting ফাংশনের ভিতরে greetingHandler() ফাংশন কল করা হয়েছে। একবার তুই একটা প্রোগ্রাম লিখে দেখ, যেখানে প্রথম ফাংশনটি অন্য ফাংশনকে কল করবে এবং ফাংশনের আউটপুট কনসোলে দেখাবে 
*/
const greeting = (age) => {
    greetingHandler(age)
}
const greetingHandler = (age) => {
    console.log('My Current Age is', age);
}
greeting(22)