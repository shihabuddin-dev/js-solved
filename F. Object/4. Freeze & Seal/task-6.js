/* 
৬. const food = { name Pizza, price 500, size Large}; এমন কিছু কর, যাতে food-এর মধ্যে নতুন প্রোপার্টি যোগ করা যাবে না। তবে চাইলে দাম বাড়ানো বা কমানো যাবে 
*/

const food = {
    name: 'Pizza',
    price: 500,
    size: 'Large'
};
Object.seal(food)
console.log(food);