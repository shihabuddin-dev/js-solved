/* Use Arrow Function
একটি অ্যারো ফাংশন লিখো যা একটি নামগুলোর অ্যারে ইনপুট নেবে এবং প্রত্যেক নামের প্রথম অক্ষর ক্যাপিটালাইজ করবে।
const capitalizeNames = ???;
console.log(capitalizeNames(["alice", "bob","charlie"])); //["Alice", "Bob", "Charlie"] */

const capitalizeNames = (names) => names.map(name => name.charAt(0).toUpperCase() + name.slice(1))


console.log(capitalizeNames(["alice", "bob", "charlie"]));