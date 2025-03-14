**৩. as কি-ওয়ার্ড কীভাবে নাম পরিবর্তন করতে সাহায্য করে?**


**Answer**

যখন কোনো মডিউল থেকে একাধিক জিনিস এক্সপোর্ট করা হয়, তখন as ব্যবহার করে তাদের নাম পরিবর্তন করা সম্ভব।


import { add as sum, subtract as minus } from "./app.js";
console.log(sum(5, 3));  
console.log(minus(5, 3));
