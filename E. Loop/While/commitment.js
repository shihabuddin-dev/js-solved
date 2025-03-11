/*** Problem-1

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */
// Solution-1 
let day = 1;
while (day <= 60) {
    console.log("I will invest at least 6 hrs every single day for next " + day + " days!");
    day++;
}

// Solution-2
let i = 1;
while (i <= 60) {
    console.log(`I will invest at least 6 hrs every single day for next ${i} days!`);
    i++;
}