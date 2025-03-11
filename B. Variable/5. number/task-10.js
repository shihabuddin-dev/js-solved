/* 
১০. ধর, একদিন ঘুম থেকে উঠে খিদার চোটে তুই ছোটখাটো একটা রাক্ষস হয়ে গেছস। তারপর থেকে প্রতিদিন 4 কেজি চালের ভাত খেয়ে ফেলস। এখন যদি তোকে 12 মন (480 কেজি) চাল দেয়া হয় থাকে, তাহলে এই চাল দিয়ে তোর কত দিন যাবে। আবার একমাস যদি 30 দিনে হয়, তাহলে এই 12 মন চাল দিয়ে তোর কত মাস যাবে।
 */
const totalRich = 480;
const perDayRich = 4;
const days = totalRich / perDayRich;
const months = days / 30;
console.log('This Rich Will Stay', days, 'Days or', months, 'Month');