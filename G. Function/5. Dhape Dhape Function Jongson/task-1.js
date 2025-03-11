/* 
১. তোর এক বন্ধুর কাছে কিছু নাম্বার আছে: [5, 15, 8, 7] ওর চাওয়া অনুযায়ী, শুধু বিজোড় সংখ্যাগুলোর যোগফল বের করে দে। এই কাজের জন্য একটা ফাংশন লিখে ফলাফলটা রিটার্ন কর।
 */

function getOdd(numbers) {
    let sum = 0;
    for (let number of numbers) {

        if (number % 2 === 1) {
            sum = sum + number;
        }
    }
    return sum;
}

const result = getOdd([5, 15, 8, 7]);
console.log(result);