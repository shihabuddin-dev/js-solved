/* 
৩. একটা অবজেক্ট বানা, যার নাম হবে language, যার মধ্যে দুটি প্রোপার্টি থাকবে name এবং age, name হবে JS এবং age হবে 30 language অবজেক্টটি একটা নতুন ভ্যারিয়েবল newVersion-এ সেট কর। এরপর newVersion-এ নতুন প্রোপার্টি যোগ কর, যেটার key হবে location এবং value হবে Browser! console.log ব্যবহার করে person এবং newPerson-এর মান দেখাও 
*/
const language = {
    name: 'JS',
    age: 30
}
const newVersion = language
newVersion.location = 'Browser'
console.log(language, newVersion);