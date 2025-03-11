/* 
২. একটা প্যাকেজ ডেলিভারির খরচ হিসাব কর। যেখানে 10kg-এর কম হলে 100 টাকা। আর 20kg-এর কম হলে 300 টাকা। 50 kg-এর কম হলে 1000 টাকা। আর তার বেশি হলে কেজিপ্রতি 100 টাকা করে খরচ দিতে হবে।
 */
function deliveryCharge(weight) {
    if (typeof weight !== 'number' || weight < 0) return 'Invalid Input'
    else if (weight < 10) return `100 TK`
    else if (weight < 20) return `300 TK`
    else if (weight < 50) return `1000 TK`
    else return `${weight * 100} TK`
}
console.log(deliveryCharge(15));