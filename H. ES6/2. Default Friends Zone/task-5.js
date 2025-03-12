/* 
৫. এমন একটা ফাংশন বানা, যেটা কোনো পণ্যের নাম ও তার মূল্য নিবে। যদি নাম না দেওয়া হয়, তাহলে "Unknown product" এবং মূল্য না থাকলে 1 সেট কর।
 */
function getProductNameAndPrice(productName = "Unknown product", productPrice = 1) {
    return `${productName} ${productPrice}`
}
console.log(getProductNameAndPrice());