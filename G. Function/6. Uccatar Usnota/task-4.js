/* 
৪. সেন্টিমিটারকে মিটারে কনভার্ট করার জন্য একটা ফাংশন তৈরি কর। তারপর বিভিন্ন মান দিয়ে সেই ফাংশনকে টেস্ট কর। আর তুই তো জানস, 1 মিটার = 100 সেন্টিমিটার।
 */
function cmToMeter(cm) {
    if (typeof cm !== 'number' || cm < 0) {
        return 'Invalid Input'
    }
    const oneMeter = 100;
    return cm / oneMeter
}
console.log(cmToMeter(-1));