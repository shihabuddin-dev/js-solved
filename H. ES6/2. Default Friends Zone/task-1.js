/* 
১. এমন একটা ফাংশন তৈরি কর যা তিনটি সংখ্যার যোগফল বের করবে। ডিফল্ট মান হিসেবে প্রতিটি প্যারামিটারের জন্য 0 সেট কর।
 */
function getDefaultValue(a = 0, b = 0, c = 0) {
    return a + b + c
}
console.log(getDefaultValue(1, 5, 9));