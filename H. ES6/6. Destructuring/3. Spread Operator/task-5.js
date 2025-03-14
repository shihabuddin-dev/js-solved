/* 
৫. const young = { name: "Arif", age: 30, country: "B Baria" } এই অবজেক্টের একটা কপি তৈরি কর এবং country বাদে বাকিসব প্রোপার্টি নতুন অবজেক্টে রেখে প্রিন্ট কর।
 */
const young = { name: "Arif", age: 30, country: "B Baria" }
const { country, ...all } = young
console.log(all);