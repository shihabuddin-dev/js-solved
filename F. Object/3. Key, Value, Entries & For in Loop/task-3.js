/* 
৩. তোকে ল্যাপটপ নামের একটা অবজেক্ট দেয়া হলো- const laptop = { brand: "Dell", model: "Inspiron", price: 45000}; এইবার for...in লুপ চালিয়ে প্রতিটি প্রোপার্টি এবং তার মান প্রিন্ট কর।
 */

const laptop = {
    brand: "Dell",
    model: "Inspiron",
    price: 45000
};

for (let key in laptop) {
    const value = laptop[key]
    console.log(key, value);
}