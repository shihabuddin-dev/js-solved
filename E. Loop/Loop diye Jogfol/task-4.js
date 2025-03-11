/* 
8. while লুপ ব্যবহার করে 21 থেকে 50 পর্যন্ত সংখ্যাগুলোর যোগফল বের কর এবং প্রতিবারের যোগফল দেখাবি।
 */
let numbers = 21;
let sum = 0;

while (numbers <= 50) {
    sum += numbers;
    console.log(`সংখ্যা: ${numbers}, বর্তমান যোগফল: ${sum}`);
    numbers++;
}

console.log(`সর্বমোট যোগফল: ${sum}`);
