/* 
৫. একটা animal অবজেক্ট বানা, যার মধ্যে name Tiger, location Sundarban থাকবে। এখন এমন কিছু কর, যাতে টাইগারের লোকেশন চেইঞ্জ করা না যায়।
 */

const animal = {
    name: 'Tiger',
    location: 'Sundarban'
}
Object.freeze(animal)
console.log(animal);