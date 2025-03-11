/* 
৫. একটা প্রোগ্রাম বানিয়ে 'বৃষ্টি' নামক উপাদান আছে কি না, চেক কর। যদি থাকে, তাহলে আউটপুটে বলবি 'I need umberalla', না থাকলে বলবি 'No rain no pain'। অ্যারেতে 'দীঘি', 'মেঘ', 'বৃষ্টি' ও 'বর্ষা' আছে।
 */

const names = ['দীঘি', 'মেঘ', 'বৃষ্টি', 'বর্ষা'];
if (names.includes('বৃষ্টি')) {
    console.log('I need umberalla');
}
else {
    console.log('No rain no pain');
}