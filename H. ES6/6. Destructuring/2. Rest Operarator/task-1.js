/* 
১. একটা product অবজেক্ট আছে const product = { name: "Laptop", price: 50000, brand: "Dell"}; এইটা থেকে name বাদে বাকি প্রোপার্টিগুলো আলাদা একটা অবজেক্টে রাখ।
 */
const product = { name: "Laptop", price: 50000, brand: "Dell" };
const { name, ...more } = product
console.log(more);