/* 
৬. const car = { make: "Toyota", model: "Corolla", year: 2020} এই অবজেক্টের একটা কপি তৈরি কর এবং year আপডেট করে 2032 করে নতুন অবজেক্ট তৈরি কর 
*/
const car = { make: "Toyota", model: "Corolla", year: 2020 }
const updateCar = { ...car, year: 2032 }
console.log(updateCar);
