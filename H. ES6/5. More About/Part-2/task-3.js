/* একটি Arrow Function লিখো যা একটি অবজেক্ট ইনপুট নেবে এবং ব্যবহারকারীর নাম রিটার্ন করবে।

const getUserName = ???, console.log(getUserName({ id: 1, name: "John", age: 303})); //"John
 */
const getUserName = (obj) => obj.name
console.log(getUserName({ id: 1, name: "John", age: 303 }));