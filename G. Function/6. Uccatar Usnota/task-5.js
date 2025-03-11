/* 
৫. ইঞ্চিকে সেন্টিমিটারে রূপান্তর করার ফাংশন লিখ। 1 ইঞ্চি = 2.54 সেন্টিমিটার।
 */
function inchToCm(inch) {
    if (typeof inch !== 'number' || inch < 0) {
        return 'Invalid Input'
    }
    return inch * 2.54
}
console.log(inchToCm(10));