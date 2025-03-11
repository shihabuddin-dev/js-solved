/* 
৬. একটা প্রোগ্রাম লিখ। যা চেক করবে, তাপমাত্রা ০ ডিগ্রির কম হলে বলবে "Ice". 0 থেকে 20-এর মধ্যে হলে বলবে "Cool Cool", আর 20-এর বেশি হলে বলবে "Hot Hot"!
 */
let temperature = 30;
if (temperature < 0) {
    console.log('Ice');
}
else if (temperature >= 0 && temperature <= 20) {
    console.log('Cool Cool');
}
else if (temperature > 20) {
    console.log('Hot Hot');
}