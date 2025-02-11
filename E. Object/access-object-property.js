/* Problem-3

Display the physics marks as output.

const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
 */

const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};

// Solution-1 by dot notation 
let physicsMarks = student.physics.marks;
console.log(physicsMarks);

// Solution-2 by bracket notation 
let physicsMark = student["physics"]["marks"];
console.log(physicsMark);