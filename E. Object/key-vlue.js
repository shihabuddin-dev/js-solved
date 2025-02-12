/* Problem-18

You have a Student object. You print the key and value of the object.
const student = {
    name: "Alice",
    age: 20,
    grade: "A",
    city: "New York",
    isGraduated: false
};


*/
const student = {
    name: "Alice",
    age: 20,
    grade: "A",
    city: "New York",
    isGraduated: false
};

let keys = Object.values(student);
console.log(keys);
for (let key in student) {
    console.log(`${key} : ${student[key]}`);

}
if (student.isGraduated) {
    console.log("Graduated");
}
else {
    console.log("Not Graduated");
}
