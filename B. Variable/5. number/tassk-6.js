/* 
৬. তোর কাছে 500 টাকা আছে, প্রতিবার তুই 75 টাকা খরচ করবি। কয়বার খরচ করতে পারবি আর শেষে কয় টাকা বাকি থাকবে, সেটা বের করার একটা প্রোগ্রাম লিখ।
 */
const totalMoney = 500;
const willExpenseEveryTimes = 75;
const expenseTimes = Math.floor(totalMoney / willExpenseEveryTimes);
const remainMoney = totalMoney % willExpenseEveryTimes;
console.log(expenseTimes, 'Times We can Expense Money', 'and', remainMoney, 'Tk Will Remain');