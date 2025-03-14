/* 
২. একটা অ্যারে বানা, যেখানে সব এলিমেন্টের মান 5 দিয়ে ভাগ যায় কি না, তা চেক করার জন্য every মেথড ব্যবহার কর।
 */
const numbers = [10, 20, 50, 60, 90, 102, 105, 140, 150, 200]
const dividedNumbers = numbers.every(num => num % 5 === 0)
console.log(dividedNumbers);