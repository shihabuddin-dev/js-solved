/* 
৪. একটা ফাংশন বানা, যার নাম হবে schoolDetails এই ফাংশনের ভেতরে schoolName নামে একটা ভেরিয়েবল ডিক্লেয়ার কর। এরপর school Details ফাংশনের ভেতরে আরেকটা nested ফাংশন বানা, যার নাম হবে displaySchoolName এই nested ফাংশন outer ফাংশনের schoolName ভেরিয়েবল অ্যাক্সেস করে সেটা console-এ প্রিন্ট করবে। ফাংশনগুলো কল করার সময় যেন আউটপুটে স্কুলের নাম দেখা যায়। এখন বাহির থেকে school Details ফাংশনকে কল কর 
*/
const schoolDetails = () => {
    let schoolName = 'Free School'
    const displaySchoolName = () => {
        console.log(schoolName);
    }
    displaySchoolName()
}
schoolDetails()