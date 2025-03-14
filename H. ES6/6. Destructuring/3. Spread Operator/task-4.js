/* 
৪. const website = { name: "MySite", type: "e-commerce",status: "active"} এই অবজেক্টে নতুন প্রোপার্টি theme: "dark" যোগ করে নতুন অবজেক্ট তৈরি কর এবং প্রিন্ট কর।
 */
const website = { name: "MySite", type: "e-commerce", status: "active" }
const updateWebsite = { ...website, theme: 'dark' }
console.log(updateWebsite);