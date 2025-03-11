/* 
৫. কোনো বইয়ের পৃষ্ঠাসংখ্যা 100-এর কম হলে বলবি "Small book", 100 থেকে 500-এর মধ্যে হলে বলবি "Mid-size book", আর 500-এর বেশি হলে বলবি "heart-attack size book"
 */
let pages = 477;
if (pages < 100) {
    console.log('Small Book');
}
else if (pages >= 100 && pages <= 500) {
    console.log('Mid Size Book');
}
else if (pages > 500) {
    console.log('heart-attack size book');
}