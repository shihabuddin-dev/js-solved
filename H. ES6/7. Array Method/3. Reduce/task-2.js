/* 
২. তুই একটা দোকানের মালিক। তোর পণ্যগুলো: [{name: 'shampoo', price: 100}, {name: 'soap', price: 50}, {name: 'toothpaste', price: 75}]। সব পণ্যের মোট দাম বের কর reduce ব্যবহার করে 
*/
const products = [
    { name: 'shampoo', price: 100 },
    { name: 'soap', price: 50 },
    { name: 'toothpaste', price: 75 }
]
const totalPrice = products.reduce((sum, currentPrice) => sum + currentPrice.price, 0)
console.log(totalPrice);