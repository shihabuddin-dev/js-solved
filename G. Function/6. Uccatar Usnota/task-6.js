/* 
৬. যদি 1 পাউন্ড = 0.453 কিলোগ্রাম হলে পাউন্ড থেকে কিলোগ্রামে কনভার্ট করার একটা ফাংশন লিখে ফেল।
 */
function poundToKg(pound) {
    if (typeof pound !== 'number' || pound < 0) return 'Invalid Input'
    return pound * 0.453
}
console.log(poundToKg(20));