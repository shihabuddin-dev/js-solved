/* 
৬. const books = { book1 "Harry Potter", book2 "The Hobbit", book3 "Game of Thrones"}; এর ওপরে লুপ চালিয়ে সব বইয়ের নাম কনসোল লগ কর।
 */

const books = {
    book1: "Harry Potter",
    book2: "The Hobbit",
    book3: "Game of Thrones"
};

for (let book in books) {
    const bookName = books[book]
    console.log(bookName);
}