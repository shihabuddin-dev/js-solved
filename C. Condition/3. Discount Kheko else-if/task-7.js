/* 
৭. তোর একটা গেমিং অ্যাপ আছে। প্লেয়ারের লেভেল 10-এর কম হলে বলবি "novice", 10 থেকে 50-এর মধ্যে হলে বলবি "Expert", আর 50-এর বেশি হলে বলবি 'Pro Gamer" 
*/
let gameLevel = 60;
if (gameLevel < 10) {
    console.log('novice');
}
else if (gameLevel >= 10 && gameLevel <= 50) {
    console.log('Expert');
}
else if (gameLevel > 50) {
    console.log('Pro Gammer');
}