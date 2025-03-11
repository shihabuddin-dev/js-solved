/* 
৮. একটা family অবজেক্ট বানা। যার মধ্যে একটা প্রোপার্টি হবে father সেটার মানও আরেকটা অবজেক্ট এবং ফাদারের মধ্যে তোর আবুর নাম, বয়স এবং পেশা (profession) থাকবে। একইভাবে family অবজেক্টে mother নামে আরেকটা প্রোপার্টি থাকবে, সেই প্রোপার্টির মানও আরেকটা অবজেক্ট। আর mother-এর অবজেক্টের মধ্যে তোর আম্মুর নাম, বয়স আর পেশা থাকবে। এখন তোর কাজ হচ্ছে, mother-এর age প্রোপার্টি বের কর। তারপর তোর আবুর age-এর মান বের কর। তারপর এই দুইটা age-এর যোগফল বের করে সেটা আউটপুট হিসেবে দেখা।
 */

const family = {
    father: {
        name: 'Ruhul',
        age: 43,
        profession: 'Expatriate',
    },
    mother: {
        name: 'Fahima',
        age: 40,
        profession: 'Homemaker',
        husband: {
            name: 'Ruhul',
            age: 43,
            profession: 'Expatriate',
        }
    }
}
const parentAge = family.father.age + family.mother.age;
console.log(parentAge);