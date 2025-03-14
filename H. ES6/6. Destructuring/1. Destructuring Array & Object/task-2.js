/* ২. Item অবজেক্ট থেকে phone এবং price প্রোপার্টি ডিস্ট্রাকচারিং কর। const item = { name: "Mobile", price: 20000, phone: "Samsung" }
 */

const item = { name: "Mobile", price: 20000, phone: "Samsung" }
const { phone, price } = item
console.log(phone, price);