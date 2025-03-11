/* 
১. বই নামে একটা অবজেক্ট বানিয়ে ফেল। সেটার মধ্যে বইয়ের নাম, লেখক, দাম ইত্যাদি থাকবে। তারপর অবজেক্টের সব প্রোপার্টি (keys) এবং সব ভ্যালু (values) কনসোল লগ কর।
 */
const books = {
    bookName: 'Marhaba JavaScript A Maro Thaba',
    writer: 'Jhankar Mahbub',
    price: 570,
}
const allKeys = Object.keys(books);
const allValues = Object.values(books);
console.log(allKeys, allValues);