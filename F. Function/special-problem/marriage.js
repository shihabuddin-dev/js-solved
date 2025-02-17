/* Problem-4 

 You need to write a function for a matrimony website. So that they can easily analyze the biodata of two people and understand whether marriage is possible between them or not. Whether marriage is possible between 2 people has to be determined based on some conditions.
The 2 people have to be of different genders.
The age difference between the 2 people cannot be more than 7 years. ( 💡explore Math.abs() )
Your function will return true only if these conditions are met.
 */

function validProposal(person1, person2) {
    if (typeof person1 !== 'object' || typeof person2 !== 'object') {
        return "Invalid";
    }
    let person1Age = person1.age;
    let person2Age = person2.age;
    let ageDifference = Math.abs(person1Age - person2Age);
    if (person1.gender !== person2.gender && ageDifference <= 7) {
        return true;
    }
    else {
        return false;
    }
}
const person1 = { name: "Rahul", gender: "male", age: 28 };
const person2 = { name: "Joya", gender: "female", age: 21 };
const result = validProposal(person1, person2);
console.log(result);