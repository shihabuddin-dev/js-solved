/* 8. ages নামের একটা অ্যারে তৈরি কর এবং দেখা, সবার বয়স 18-এর বেশি কি না */
const ages = [10, 20, 25, 30, 33, 64]
const updateAge = ages.every(age => age > 18)
console.log(updateAge);