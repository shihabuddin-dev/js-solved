/* 
৬. একটা অ্যারে বানা [100, 200, 300, 400]। reduce দিয়ে সব সংখ্যার যোগফল বের কর এবং ইনিশিয়াল ভ্যালু হিসেবে 50 ব্যবহার কর 
*/
const numbers = [100, 200, 300, 400]
const totalNumber = numbers.reduce((sum, number) => sum + number, 50)
console.log(totalNumber);