/* problem-3

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A+: 80-100
    A: 70-79
    B: 60-69
    C: 50-59
    D: 40-49
    E: 33-39
    F: 0-32

*/
let marks = 100;
// normal solution 
if (marks >= 80 && marks <= 100) {
    console.log("You Got A+");
}
else if (marks >= 70 && marks <= 79) {
    console.log("You Got A");
}
else if (marks >= 60 && marks <= 69) {
    console.log("You Got B");
}
else if (marks >= 50 && marks <= 59) {
    console.log("You Got C");
}
else if (marks >= 40 && marks <= 49) {
    console.log("You Got D");
}
else if (marks >= 33 && marks <= 39) {
    console.log("You Got E");
}
else if (marks > 100) {
    console.log("Invalid Marks");
}
else {
    console.log("You Have Failed in the Exam");
}


// solution by Nested
if (marks >= 80 && marks <= 100) {
    console.log("You Got A+");
}
else {
    if (marks >= 70 && marks <= 79) {
        console.log("You Got A");
    }
    else if (marks >= 60 && marks <= 69) {
        console.log("You Got B");
    }
    else if (marks >= 50 && marks <= 59) {
        console.log("You Got C");
    }
    else if (marks >= 40 && marks <= 49) {
        console.log("You Got D");
    }
    else if (marks >= 33 && marks <= 39) {
        console.log("You Got E");
    }
    else if (marks > 100) {
        console.log("Invalid Marks");
    }
    else {
        console.log("You Have Failed in the Exam");
    }

}
// ternary solution 
let result = marks >= 80 && marks <= 100 ? "You Got A+" : marks >= 70 && marks <= 79 ? "You Got A" : marks >= 60 && marks <= 69 ? "You Got B" : marks >= 50 && marks <= 59 ? "You Got C" : marks >= 40 && marks <= 49 ? "You Got D" : marks >= 33 && marks <= 39 ? "You Got E" : marks > 100 ? "Invalid Marks" : "You Have Failed in the Exam";
console.log(result);