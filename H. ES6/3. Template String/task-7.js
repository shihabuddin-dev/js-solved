/* 
৭. তোর কাছে স্টুডেন্ট নামে একটা অবজেক্ট আছে, সেই স্ট্রিংয়ের মধ্যে তার নাম আছে, তার বয়স আছে এবং তার তিনটা সাবজেক্টের মার্কস দেয়া আছে results নামক একটা প্রোপার্টির মধ্যে। যেটার মান একটা অ্যারে। এখন তোর কাজ হবে একটা টেমপ্লেট স্ট্রিং দিয়ে একটা স্ট্রিংয়ের মধ্যে এই স্টুডেন্টের নাম, তার তিনটা সাবজেক্টের রেজাল্টের গড় দেখানো। গড় দেখানোর জন্য তিনটা সাবজেক্টের মান যোগ করে তিন দিয়ে ভাগ করবি 
*/


function makeAverage(array) {
    let sum = 0
    for (let number of array.marks) {
        sum += number
    }
    let avg = sum / array.marks.length
    return `Name: ${array.name} Average Marks: ${avg.toFixed(2)}`
}
const student = {
    name: 'Boss',
    age: 22,
    marks: [82, 74, 91]
}
console.log(makeAverage(student));