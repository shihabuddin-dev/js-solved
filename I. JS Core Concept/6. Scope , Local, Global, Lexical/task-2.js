/* 
২. একটা ফাংশন বানা, যেটার মধ্যে let দিয়ে insideSecret নামে ভেরিয়েবল ডিক্লেয়ার কর। এইটার মান হবে "internal secret hiding place"। ফাংশনের বাইরে থেকে insideSecret অ্যাক্সেস করতে চেষ্টা কর।
 */
const getInfo= ()=>{
    let insideSecret= "internal secret hiding place"
    return insideSecret
}
console.log(insideSecret);
console.log(getInfo());

// insideSecret ভেরিয়েবলটা ফাংশনের মধ্যে let দিয়ে ডিক্লেয়ার করা আছে, তাই এটা বাইরে থেকে অ্যাক্সেস করা যাবে না। কারণ, let ব্লক-স্কোপড, অর্থাৎ যেখানে ডিক্লেয়ার করা হয়, সেই ব্লকের বাইরে থেকে এটি ব্যবহার করা যায় না। 