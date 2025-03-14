/* Use Find
একটি অ্যারে আছে [5, 10, 15, 20, 25] প্রথম যে সংখ্যাটি ১৫-এর বেশি সেটি খুঁজে বের করো।
 */
const numbers = [5, 10, 15, 20, 25]
const useFind = numbers.find(num => {
    if (num > 15) return num
})
console.log(useFind);