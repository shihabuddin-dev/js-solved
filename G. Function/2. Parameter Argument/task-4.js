/* 
৪. বয়স বের করার একটা ফাংশন লিখ। যেটাকে তুই তোর কোন বছর জন্ম, সেটা বলবি। তারপর ফাংশনের ভিতরে এই বছর থেকে তোর জন্মসাল বিয়োগ করলে তোকে বলবে, তুই কত বছর বুইড়া হইছস (মানে তোর বয়স কত হইছে)।
 */
function currentAge(dateOfYear) {
    let currentAge = 2025 - dateOfYear;
    console.log(currentAge);
}
currentAge(2003)