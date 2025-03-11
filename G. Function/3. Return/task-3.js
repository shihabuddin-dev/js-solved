/* 
৩. তুই একটা রেস্টুরেন্টে গিয়েছিস, সেখানে ভাত (rice), তরকারি (curry) আর ড্রিঙ্কস (drinks) খাবি। একটা ফাংশন লিখ, যাতে খাবারের মোট দাম যোগ করে মোট বিল রিটার্ন করবে।
 */
function restaurantBill(rice, curry, drinks) {
    let totalBill = rice + curry + drinks;
    return totalBill;
}
console.log(restaurantBill(100, 200, 50));