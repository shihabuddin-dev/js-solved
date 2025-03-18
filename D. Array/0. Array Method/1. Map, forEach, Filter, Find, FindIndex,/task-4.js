/* 
৪. তোর কিছু হাইটের ডেটা আছে, যেমন: [65, 70, 68, 72, 68, 73]। 69 ইঞ্চির বেশি লম্বা যাদের হাইট আছে, তাদের শুধু খুঁজে বের কর filter দিয়ে।
 */
const heights = [65, 70, 68, 72, 68, 73]
const updateHeight = heights.filter(height => height > 69)
console.log(updateHeight);