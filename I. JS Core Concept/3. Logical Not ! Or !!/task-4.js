/* ৪. একটা অ্যারে [] আছে, এইটার সামনে !! দিলে কী পাওয়া যাবে */
const emptyArray = [];

if (!!emptyArray) {
    console.log("Array is truthy");
} else {
    console.log("Array is falsy");
}