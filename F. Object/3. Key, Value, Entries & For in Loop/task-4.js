/* 
৪. একটা phone নামের অবজেক্ট আছে। const phone = { brand: "Samsung", model: "Galaxy S21", price: 85000}; এইটার জন্য Object.keys ব্যবহার করে for... of লুপ চালিয়ে প্রতিটি প্রোপার্টি এবং তার মান কনসোল লগ কর।
 */

const phone = {
    brand: "Samsung",
    model: "Galaxy S21",
    price: 85000
};

const keys = Object.keys(phone);
for (let key of keys) {
    console.log(key, phone[key]);
}