/* 
৮. teacher অবজেক্ট থেকে name এবং profession-এর ভ্যালু বের কর, যেখানে profession-এর নাম alias হিসেবে job রাখ। const teacher = { name: "Maria", profession: "Teacher" } 
*/

const teacher = { name: "Maria", profession: "Teacher" }
const { name: alias, profession: job } = teacher
console.log(teacher);