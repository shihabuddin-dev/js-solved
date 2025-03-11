/* 
৭. একজন দোকানদার প্রত্যেকটা আইটেমে 250 টাকা লাভ করে। একটা ফাংশন লিখ, যেখানে কোনো একটা জিনিসের কেনা দাম দিবি, তাহলে সে বিক্রির দাম (sellingPrice) দিবে।
 */
function sellingPrice(costPrice) {
    let profit = 250;
    let sellingPrice = profit + costPrice;
    console.log(sellingPrice);
}
sellingPrice(1000)