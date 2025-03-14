/* 
একটি ফাংশনের মধ্যে let এবং const ব্যবহার করে ভ্যারিয়েবল ডিক্লেয়ার করো এবং তাদের ভ্যালু পরিবর্তনের চেষ্টা করো। দেখো কোনটার ক্ষেত্রে এয়র আসে, কেন আসে?
 */
const newFunction = () => {
    let age = 22
    age = 23
    const isMarried = false
    isMarried = true
    return `${age} ${isMarried}`

}
console.log(newFunction())


// const dile change kora jai na so error asbe