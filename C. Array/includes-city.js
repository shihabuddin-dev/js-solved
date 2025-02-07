/**  problem-10
You are writing down the names of some cities: ‘Dhaka’, ‘Chittagong’, ‘Sylhet’. Now you think you will add another city name, Bogura. Now write a program to check if ‘Bogura’ is there, and you will understand whether it is there or not. **/
let city = ['Dhaka', 'Chittagong', 'Sylhet'];

city.push('Bogura');
// normal includes 
console.log(city.includes('Bogura'));
// ternary includes 
console.log((city.includes("Bogura")) ? 'You can go Bogura City' : 'Hortal is ongoing');