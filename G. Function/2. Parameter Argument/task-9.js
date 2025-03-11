/* 
৯. একটা ফাংশন লিখ, যেখানে প্যারামিটার হিসেবে দিবি, প্রতিদিন তুই কয় ঘণ্টা সময় মোবাইল ফোন ইউজ করস। তারপর সেই ফাংশন বের করবে, মাসে তুই কত ঘণ্টা সময় মোবাইল ফোন ইউজ করস। ধরে নে, এক মাসে 30 দিন হয় */

function getTimeForMobileUse(dailyUsePhoneTime) {
    let monthlyUsePhoneTime = dailyUsePhoneTime * 30;
    console.log(monthlyUsePhoneTime);
}
getTimeForMobileUse(1)
