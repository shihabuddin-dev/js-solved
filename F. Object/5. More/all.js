/* Problem-19

You have an object, which contains an array called students.
We need to check the students array using a for loop.
If "Alice" is present, it will print "Alice is in the class".
If not, it will print "Alice is not in the class".

const classroom = {
    className: "JavaScript Basics",
    students: ["John", "Jane", "Alice", "Bob", "Eve"]
};

*/

const classroom = {
    className: "JavaScript Basics",
    students: ["John", "Jane", "Alice", "Bob", "Eve"]
};
let alice = false;

for (let i = 0; i < classroom.students.length; i++) {
    if (classroom.students[i] === "Alice") {
        alice = true;
        break;
    }

}

if (alice) {
    console.log("Alice is in the class");
}
else {
    console.log("Alice is not in the class");
}
