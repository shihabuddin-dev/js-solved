/* 
৩. ধর, তুই একটা product-এর list বানাইছিস: [{name: 'Pen', price: 5}, {name: 'Book', price: 50}, {name: 'Bag', price: 100}]। এবার সব পণ্যের দাম যোগ কর reduce দিয়ে।
 */
const productList = [
    { name: 'Pen', price: 5 },
    { name: 'Book', price: 50 },
    { name: 'Bag', price: 100 }
]
const totalPriceOfProducts = productList.reduce((sum, currentPrice) => sum + currentPrice.price, 0)
console.log(totalPriceOfProducts);