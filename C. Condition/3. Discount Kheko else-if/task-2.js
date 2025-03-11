/* 
২. তুই একটা রেস্টুরেন্ট চালাচ্ছস, যেখানে 12 বছরের নিচে বাচ্চাদের ফ্রি খাওয়ানো হয় এবং 60 বছরের ওপরের মানুষকে 50% ডিসকাউন্ট দেওয়া হয়, বাকিদের পুরা টাকা দিতে হয়।
 */
let age = 30;
let price = 500;
if (age < 12) {
    discountPrice = price / 100 * 100;
    payPrice = price - discountPrice;
    console.log('You got full discount');

}
else if (age > 60) {
    discountPrice = (price / 100) * 50;
    payPrice = price - discountPrice;
    console.log('You have to pay:', payPrice, 'Tk and you got Discount:', discountPrice, 'Tk');

}
else {
    console.log('You have to pay:', price, 'Tk');
}