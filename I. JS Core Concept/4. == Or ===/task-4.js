/* 
৪. একটা ফাংশন লিখ, যেখানে প্রথম প্যারামিটার হলো, কোনো সংখ্যা আর দ্বিতীয় প্যারামিটার হলো boolean। ফাংশনটা চেক করবে, এই দুইটা মান ডাবল ইকুয়াল কি না, আর আউটপুট দেখাবে।
 */
const getMultiple = (number, boolean) => {
    if (number == boolean) {
        console.log("মান দুটি সমান");
    } else {
        console.log("মান দুটি অসমান");
    }
}
getMultiple(10, true)