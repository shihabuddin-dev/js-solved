/* 
১. তুই নিজের দোকান খুলছিস। তোর দোকানে কেউ 3000 টাকার বেশি কেনাকাটা করলে 5% ডিসকাউন্ট, আর 6000 টাকার বেশি কেনাকাটা করলে 15% ডিসকাউন্ট দিবি। যদি এক বন্ধু এসে 4500 টাকার জিনিস কিনে, তবে তাকে কত টাকা দিতে হবে 
*/
let shoppingPrice = 4500;
if (shoppingPrice > 3000) {
    discountPrice = shoppingPrice / 100 * 5;
    payPrice = shoppingPrice - discountPrice;
    console.log('You have to pay:', payPrice, 'Tk and you got Discount:', discountPrice, 'Tk');
}
else if (shoppingPrice > 6000) {
    discountPrice = shoppingPrice / 100 * 15;
    payPrice = shoppingPrice - discountPrice;
    console.log('You have to pay:', payPrice, 'Tk and you got Discount:', discountPrice, 'Tk');
}
else {
    console.log('No Discount');
}