/** Problem-2
Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

Input:
The first line of the input is the marks of the five subjects mentioned above, respectively. marks 75.25, 65, 80, 35.45, 99.50

Output: 71.04
Print the result in 2 decimal places. **/
let mathematic = 75.25;
let biology = 65;
let chemistry = 80;
let physics = 35.45;
let bangla = 99.50;
let totalMarks = mathematic + biology + chemistry + physics + bangla;
let averageMarks = totalMarks / 5;
console.log(averageMarks.toFixed(2));