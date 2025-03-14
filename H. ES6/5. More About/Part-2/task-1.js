/* Use Map
নিচের Arrow Function লিখো যা একটি নামের অ্যারে ইনপুট নেবে এবং প্রতিটি নামের প্রথম অক্ষর এবং নামের Length দেখাবে।
const shortNames = ???; console.log(shortNames(["Alice", "Bob", "Charlie"])); // ["A(5)", "B(3)", "C(7)"] 
*/

const shortNames = (names) => {
    return names.map(nam => `${nam[0]}(${nam.length})`)
}

console.log(shortNames(["Alice", "Bob", "Charlie"]))