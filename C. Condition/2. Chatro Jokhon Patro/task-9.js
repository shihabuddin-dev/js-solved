/* 
৯. শার্টের দাম 1000 টাকার বেশি হলে এবং কুপন থাকলে তোকে 20 পারসেন্ট ডিসকাউন্ট দেয়া হবে। এর জন্য প্রোগ্রাম লিখ 
*/
let price = 1200;
if (price > 1000) {
    discountPrice = (price / 100) * 20;
    payPrice = price - discountPrice;
    console.log('You have to pay:', payPrice, 'Tk and you got Discount:', discountPrice, 'Tk');
}
else {
    console.log('No Discount');
}