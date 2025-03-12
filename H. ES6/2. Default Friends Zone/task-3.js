/* 
৩. এমন একটা ফাংশন তৈরি কর, যেখানে নাম আর তার মাসিক আয় নিবি। যদি নাম না দেওয়া হয়, তাহলে ডিফল্ট হিসেবে anonymous ইউজ করবি। আর মাসিক আয় দেয়া না থাকলে সেখানে ডিফল্ট হিসেবে 0 ইউজ করবি।
 */
function getNameAndIncome(name = 'anonymous', income = 0) {
    return `${name} ${income}`
}
console.log(getNameAndIncome());