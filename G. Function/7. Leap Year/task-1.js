/* 
১. একটা function লিখ, যেটা একটা income amount প্যারামিটার হিসেবে নিবে এবং কোনো tax bracket-এ পড়ে সেটা রিটার্ন করবে। ইনকাম যদি ≤ 50,000-এর নিচে হয়, তাহলে 10 রিটার্ন করবে। ইনকাম 50,001-100,000-এর মধ্যে হলে 20 ট্যাক্স হবে। আবার 100,001-200,000-এর মধ্যে হলে 30, আর $200,000 ওপরে হলে 40 পার্সেন্ট ট্যাক্স হবে। ফাংশন থেকে শুধু সংখ্যা রিটার্ন করবি। কোনো পার্সেন্টেজ চিহ্ন রিটার্ন করবি না।
 */
function incomeTaxCalculate(incomeAmount) {
    if (typeof incomeAmount !== 'number' || incomeAmount < 0) return 'No Need to Pay Tax'
    else if (incomeAmount <= 50000) return incomeAmount / 10
    else if (incomeAmount > 50000 && incomeAmount <= 100000) return incomeAmount / 20
    else if (incomeAmount > 100000 && incomeAmount <= 200000) return incomeAmount / 30
    else if (incomeAmount > 200000) return incomeAmount / 40

}
console.log(incomeTaxCalculate(10000000));