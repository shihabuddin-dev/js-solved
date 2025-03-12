/* Use Filter
একটি অ্যারে আছে [10, 20, 25, 30, 35, 40]
৩০-এর চেয়ে বড় সংখ্যাগুলো ফিল্টার করে নতুন অ্যারে তৈরি করো।
 */
const numbers = [10, 20, 25, 30, 35, 40]
const getFilter = numbers.filter(num => {
    if (num > 30) return num
})
console.log(getFilter);