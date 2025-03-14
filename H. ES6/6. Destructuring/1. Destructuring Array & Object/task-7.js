/* 
৭. person অবজেক্ট থেকে name এবং city আলাদা কর। আর phone না থাকলে ডিফল্ট ভ্যালু N/A সেট কর। const person = { name: "Rahim", city: "Dhaka" }
 */


const getDefault = ({ name, city, phone = 'N/A' }) => ({ name, city, phone })
const person = { name: "Rahim", city: "Dhaka" }
console.log(getDefault(person));