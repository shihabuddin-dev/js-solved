/* ৭. গজকে মিটারে কনভার্ট করার জন্য একটা ফাংশন তৈরি কর। 1 গজ = 0.91 মিটার */
function guzToMeter(guz) {
    if (typeof guz !== 'number' || guz < 0) return 'Invalid Input'
    return guz * 0.91
}
console.log(guzToMeter(10));