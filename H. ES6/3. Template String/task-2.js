/* 
২. একটা অবজেক্ট employee তৈরি কর, যেখানে name, age এবং salary থাকবে। টেমপ্লেট স্ট্রিং দিয়ে তার নাম, বয়স এবং স্যালারি দেখা।
 */
function getObject(object) {
    return `Name: ${object.name} Age: ${object.age} Salary: ${object.salary}`
}
const object = { name: 'Boss', age: 33, salary: 30000 }
console.log(getObject(object));