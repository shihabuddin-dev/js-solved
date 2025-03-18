/* 
২. একটা খালি অবজেক্টে {} কোনো প্রোপার্টি নাই। এইটা কী falsy একটা ভ্যালু। চেক কর if-এর ভিতরে শর্ত হিসেবে লিখে।
 */

const emptyObject = {};

if (emptyObject) {
    console.log("Object is truthy");
} else {
    console.log("Object is falsy");
}