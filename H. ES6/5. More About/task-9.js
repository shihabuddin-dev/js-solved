/* একটি অ্যারে অব অবজেক্ট দেওয়া হলো।
• map() দিয়ে price দ্বিগুণ করো
• filter() দিয়ে ১০০০-এর কম দামের প্রোডাক্ট ফিল্টার করো
• reduce() দিয়ে মোট দাম বের করো
const products = [
{name: "Laptop", price: 800},
{name: "Mobile", price: 500 },
{name: "Tablet", price: 200},
{ name: "Headphone", price: 100},] */

const products = [
    { name: "Laptop", price: 800 },
    { name: "Mobile", price: 500 },
    { name: "Tablet", price: 200 },
    { name: "Headphone", price: 100 },]


// map 
const doublePrice = (products) => {
    return products.map(product => {
        const double = product.price * 2
        return `{name: ${product.name}, Price: ${double}} `
    })

}
// console.log(doublePrice(products));

// make filter  
const makeFiler = () => {
    return products.filter(product => product.price < 1000)
}
console.log(makeFiler(products));

// reduce 
const totalPrice = () => {
    return products.reduce((total, product) => total + product.price, 0)
}
console.log(totalPrice(products));