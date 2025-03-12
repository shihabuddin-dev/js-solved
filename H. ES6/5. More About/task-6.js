/* Use Arrow Function
নিচের ফাংশনটি এমনভাবে লিখো, যাতে এটি Hello, Alice! রিটার্ন করে। কিন্তু, অ্যারো ফাংশন ও ডিফল্ট প্যারামিটার ব্যবহার করতে হবে!
const greet = ???;
console.log(greet()); // Hello, Alice! console.log(greet("Bob")); // Hello, Bob!
//  
// */
const greet = (greet = 'Alice!') => `Hello ${greet}!`
console.log(greet());
console.log(greet("Bob"))