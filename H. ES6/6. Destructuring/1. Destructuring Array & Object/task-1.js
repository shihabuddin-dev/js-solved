/* 
১. অবজেক্ট থেকে brand প্রোপার্টি আলাদা কর। const product = { name: "Laptop", price: 50000, brand: "Dell" };
 */
const product = { name: "Laptop", price: 50000, brand: "Dell" };
const {brand}= product
console.log(brand);