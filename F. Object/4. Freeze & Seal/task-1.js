/* ১. ধর, তোর একটা headphone অবজেক্ট আছে, যার মধ্যে brand: "Sony", price: 3000, আর color: "red"। Object.freeze() মেথড ব্যবহার করে অবজেক্টটা freeze কর। এরপর আরেকটা নতুন প্রোপার্টি যোগ করতে চেষ্টা কর। দেখ, কাজ করে কি না।
*/
const headphone = {
    brand: "Sony",
    price: 3000,
    color: "red"
};
Object.freeze(headphone)
console.log(headphone);
headphone.isAvailable = true; // add hobe na karon  freeze method use korsi