/* Problem-2

For this object below add a property named passenger capacity with value 5

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020 };
 */

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

// Solution-1 by bracket notation
car["passenger capacity"] = 5;
console.log(car);



// Solution-2 by object method
Object.assign(car, { "passenger capacity ": 5 });
console.log(car);