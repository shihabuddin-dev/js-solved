/* 
৪. তুই কিছু শহরের নাম লিখে রাখছিস- 'Dhaka', 'Chittagong', 'Sylhet'। এখন তুই ভাবলি, আরেকটা শহরের নাম যোগ করবি, কিন্তু ভুলে ছোট হাতের 'rajshahi' যোগ করে ফেললি। এবার প্রোগ্রাম লিখে চেক কর, 'RajShahi' আছে কি না।
 */

const city = ['Dhaka', 'Chittagong', 'Sylhet'];
city.push('rajshahi');
console.log(city.includes('Rajshahi'));