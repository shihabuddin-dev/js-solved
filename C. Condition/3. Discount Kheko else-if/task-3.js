/* 
৩. যদি কারো ব্যাংক অ্যাকাউন্টে ব্যালেন্স 1000 টাকার কম হয়, তাহলে বলবি, ডিপোজিট কর। 1000 থেকে 5000-এর মধ্যে হলে বলবি, "বিন্দাস লাইফ এনজয় কর।' আর 5000-এর বেশি হলে বলবি, 'তুই ধনী, আমাকে বিয়া কর।"
 */
let accountBalance = 9000;
if (accountBalance < 1000) {
    console.log('ডিপোজিট কর');

}
else if (accountBalance >= 1000 && accountBalance <= 5000) {
    console.log('বিন্দাস লাইফ এনজয় কর');
}
else if (accountBalance > 5000) {
    console.log('তুই ধনী, আমাকে বিয়া কর');
}